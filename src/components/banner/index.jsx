import React, { useState } from "react"

const SiteBanner = ({
  message = "This website is still in Development.",
  background = "#222",
  textColor = "#fff",
  highlightColor = "#facc15", // Tailwind yellow-400
}) => {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <div style={{ ...styles.banner, backgroundColor: background, color: textColor }}>
      <p style={styles.message}>
        <span style={{ color: highlightColor }}>Important:</span> {message}
      </p>
      <button onClick={() => setVisible(false)} style={styles.closeBtn} aria-label="Dismiss banner">
        ✕
      </button>
    </div>
  )
}

const styles = {
  banner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.75rem 1.5rem",
    fontSize: "1.1rem",
    fontWeight: 500,
    position: "relative",
    zIndex: 50,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    flexWrap: "wrap",
  },
  message: {
    margin: 0,
    flex: 1,
    minWidth: 0,
  },
  closeBtn: {
    background: "transparent",
    border: "none",
    color: "#fff",
    fontSize: "1.2rem",
    cursor: "pointer",
    marginLeft: "1rem",
    transition: "opacity 0.2s",
  },
}

export default SiteBanner
