import { useEffect, useRef, useState } from "react"
import { logo } from "../../../data"
import Dropdown from "../../../components/dropdown"
import ContactCTA from "../../../components/contactBlock"
import { navLinks } from "../../../data"
import { data } from "../../../data"

import "./index.css"

const DESKTOP_BP = 1200

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const overlayRef = useRef(null)

  const toggleMenu = () => setMenuOpen((v) => !v)
  const closeMenu = () => setMenuOpen(false)

  // track mobile vs desktop
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= DESKTOP_BP)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  // close menu if we resize back to desktop
  useEffect(() => {
    if (!isMobile && menuOpen) setMenuOpen(false)
  }, [isMobile, menuOpen])

  // scroll lock body/html when menu is open (iOS safe)
  useEffect(() => {
    if (typeof window === "undefined") return

    const html = document.documentElement
    const body = document.body

    let scrollY = 0

    const lock = () => {
      scrollY = window.scrollY || window.pageYOffset || 0
      html.classList.add("nav-open")
      body.classList.add("nav-open")
      // iOS-safe lock
      body.style.position = "fixed"
      body.style.top = `-${scrollY}px`
      body.style.left = "0"
      body.style.right = "0"
      body.style.width = "100%"
      // Prevent scroll chaining
      body.style.overscrollBehavior = "none"
      // Prevent touch scrolling behind overlay on some Android browsers
      html.style.overflow = "hidden"
    }

    const unlock = () => {
      html.classList.remove("nav-open")
      body.classList.remove("nav-open")
      body.style.position = ""
      body.style.top = ""
      body.style.left = ""
      body.style.right = ""
      body.style.width = ""
      body.style.overscrollBehavior = ""
      html.style.overflow = ""
      // restore scroll
      window.scrollTo(0, scrollY)
    }

    if (menuOpen) {
      lock()
    } else {
      unlock()
    }

    return () => {
      // cleanup in case component unmounts while open
      unlock()
    }
  }, [menuOpen])

  // Close on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeMenu()
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  // Backdrop click to close
  const onOverlayClick = (e) => {
    if (e.target === overlayRef.current) closeMenu()
  }

  return (
    <>
      <header className="main-header">
        <div className="left-block">
          <a href="/">
            <img src={logo} alt="Schofield & Sons Logo" className="logo" />
          </a>

          <div className="title-group">
            {isMobile ? (
              <h1 className="mobile-title">
                <div> { data.title} </div>
              </h1>
            ) : (
              <>
                <h1 className="mobile-title">
                  <div> { data.titleAlt[0] } </div>
                  <div> { data.titleAlt[1] } </div>
                </h1>
              </>
            )}
          </div>
        </div>

          {
          isMobile &&
          <div className="hamburger mobile-hamburger" onClick={toggleMenu}>
            <span />
            <span />
            <span />
          </div>
        }


        {!isMobile && (
          <div className="right-block desktop-nav">
            <nav className="main-nav" aria-label="Primary">
              {navLinks.map((link, idx) =>
                link.isDropdown ? (
                  <Dropdown key={idx} title={link.label} links={link.subItems} />
                ) : (
                  <a key={idx} href={link.href}>
                    {link.label}
                  </a>
                )
              )}
            </nav>
            <ContactCTA />
          </div>
        )}
      </header>

      {menuOpen && isMobile && (
        <div
          ref={overlayRef}
          id="mobileNavOverlay"
          className="mobile-nav-overlay is-open"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          onClick={onOverlayClick}
        >
          <div className="mobile-nav-content" role="document">
            <button onClick={closeMenu} className="close-btn" aria-label="Close menu">
              ×
            </button>
            <div className="mobile-nav-items">
              {navLinks.map((link, idx) =>
                link.isDropdown ? (
                  <div key={idx} className="mobile-submenu">
                    <span className="submenu-title">{link.label}</span>
                    {link.subItems?.map((sub, subIdx) => (
                      <a
                        key={subIdx}
                        href={sub.href}
                        className="submenu-link"
                        onClick={closeMenu}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                ) : (
                  <a key={idx} href={link.href} onClick={closeMenu}>
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
