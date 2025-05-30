import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const colors = {
  bg: "#f3f4f6",
  textPrimary: "#1f2937",
  violet: "#7c3aed",
  textSecondary: "#4b5563",
};

const styles = {
  wrapper: {
    backgroundColor: colors.bg,
    paddingTop: "4rem",
    paddingBottom: "4rem",
    color: colors.textPrimary,
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  sectionTitle: {
    color: colors.violet,
    marginBottom: "0.5rem",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "1.5px",
    fontSize: "0.9rem",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: 900,
    marginBottom: "1.5rem",
    lineHeight: 1.2,
  },
  subText: {
    color: colors.textSecondary,
    maxWidth: "32rem",
    margin: "0 auto 2rem",
    fontSize: "1.1rem",
    lineHeight: 1.5,
  },
  reachButton: {
    fontSize: "2rem",
    fontWeight: 700,
    background: "none",
    border: "none",
    color: colors.violet,
    cursor: "default",
    marginBottom: "2rem",
  },
  contactLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    fontSize: "1.8rem",
    marginTop: "1rem",
  },
  iconLink: {
    color: colors.textPrimary,
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
  iconLinkHover: {
    color: colors.violet,
  },
};

export default function ContactSection() {
  return (
    <section id="contact" style={styles.wrapper}>
      <p style={styles.sectionTitle}>Get in touch</p>
      <h2 style={styles.heading}>Contact Me</h2>
      <p style={styles.subText}>
        Want to connect or collaborate? Reach out to me via any of the platforms below.
      </p>

      <div style={styles.reachButton}>
        👋 Reach Me Out
      </div>

      <div style={styles.contactLinks}>
        <a href="mailto:mishalvs211003@gmail.com" style={styles.iconLink} aria-label="Email" target="_blank" rel="noopener noreferrer">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/mishalvs" style={styles.iconLink} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/mishalvs" style={styles.iconLink} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://instagram.com/_mishal_vs_" style={styles.iconLink} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}
