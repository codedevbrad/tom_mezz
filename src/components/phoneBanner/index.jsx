import { useEffect, useState } from "react"
import { data } from "../../data"

export default function MobileCallBanner() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return (
    <>
      <div className={`call-banner ${isMobile ? "mobile" : ""}`}>
        {!isMobile && (
          <span className="quote">
            { data.slogan}
          </span>
        )}

        <a href={`tel:${data.number}`} className="call-link">
          📞 <span>{data.number}</span>
        </a>

        <a href="/quote" className="quote-btn">
          Get a Quote
        </a>
      </div>

      <style jsx>{`
        .call-banner {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
          inset-inline: 0;
          color: #fff;
          padding: 10px;
          font-size: 20px;
          font-weight: 600;
          box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
          z-index: 9999;
          text-align: center;
        }

        .call-link {
          padding: 6px 12px;
          border-radius: 4px;
          color: #fff;
          text-decoration: none;
          font-weight: 600;
          white-space: nowrap;
          background: var(--color-4);
        }

        .call-link span {
          margin-left: 4px;
          text-decoration: underline;
        }


        /* 🔥 Mobile overrides */
        .call-banner.mobile {
          flex-direction: row;   /* keep inline */
          justify-content: center;
          gap: 16px;
          font-size: 22px;
          padding: 14px;
        }

        .call-banner.mobile .call-link {
          font-size: 22px;
          font-weight: 700;
          padding: 8px 12px;
        }

        .call-banner.mobile .quote-btn {
          font-size: 22px;
          padding: 8px 14px;
        }

        /* Hide tagline on mobile */
        .call-banner.mobile .quote {
          display: none;
        }
      `}</style>
    </>
  )
}
