import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const colors = {
  primaryBg: "#f9fafb",
  textPrimary: "#111827",
  textSecondary: "#6b5563",
  primaryAccent: "#3b82f6",
  borderColor: "#d1d5db",
};

const skills = [
  { title: "Cybersecurity", icon: "/svg/security.svg" },
  { title: "VAPT", icon: "/svg/vapt.svg" },
  { title: "Nmap", icon: "/svg/nmap.svg" },
  { title: "BurpSuite", icon: "/svg/burp.svg" },
  { title: "Linux", icon: "/svg/linux.svg" },
  { title: "Networking", icon: "/svg/network.svg" },
  { title: "Cisco", icon: "/svg/cisco.svg" },
  { title: "MySQL", icon: "/svg/database.svg" },
  { title: "Python", icon: "/svg/python.svg" },
  { title: "JavaScript", icon: "/svg/javascript.svg" },
  { title: "React", icon: "/svg/react.svg" },
  { title: "Web3.js", icon: "/svg/web3.png" },
  { title: "Solidity", icon: "/svg/solidity.svg" },
  { title: "Blockchain", icon: "/svg/blockchain.svg" },
  { title: "Ethereum", icon: "/svg/ethereum.svg" },
];

export default function SkillsSection() {
  const [windowWidth, setWindowWidth] = useState(() => window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getGridColumns = () => {
    if (windowWidth >= 1024) return 5;
    if (windowWidth >= 640) return 3;
    return 2;
  };

  const gridColumns = getGridColumns();

  const styles = {
    section: {
      backgroundColor: colors.primaryBg,
      padding: "3rem 1rem",
      textAlign: "center",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      userSelect: "none",
    },
    title: {
      fontSize: "1rem",
      fontWeight: 700,
      color: colors.primaryAccent,
      marginBottom: "0.5rem",
      letterSpacing: 2,
      textTransform: "uppercase",
    },
    heading: {
      fontSize: windowWidth >= 640 ? "2.25rem" : "1.75rem",
      fontWeight: 800,
      color: colors.textPrimary,
      marginBottom: "0.75rem",
      lineHeight: 1.2,
    },
    subheading: {
      fontSize: "1rem",
      color: colors.textSecondary,
      marginBottom: "2rem",
      maxWidth: 500,
      marginLeft: "auto",
      marginRight: "auto",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
      gap: "1rem",
      maxWidth: 900,
      margin: "0 auto",
    },
    iconWrapper: {
      backgroundColor: "#f0f4f8",
      borderRadius: "50%",
      width: 60,
      height: 60,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "0.5rem",
      flexShrink: 0,
      boxShadow: "0 2px 8px rgba(59,130,246,0.1)",
    },
    icon: {
      width: 32,
      height: 32,
      objectFit: "contain",
    },
    skillTitle: {
      fontSize: "0.875rem",
      fontWeight: 600,
      color: colors.textPrimary,
      margin: 0,
    },

    categoryTitle: {
      fontSize: "1.25rem",
      fontWeight: 700,
      marginBottom: "1rem",
      color: colors.textPrimary,
      textAlign: "center",
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
    hoverFocus: {
      scale: 1.07,
      boxShadow: "0 10px 20px rgba(59,130,246,0.4)",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <section style={styles.section}>
      <p style={styles.title}>My Skills</p>
      <h2 style={styles.heading}>
        Hands-on experience in <br />
        <span style={{ color: colors.primaryAccent }}>
          Cybersecurity & Development
        </span>
      </h2>
      <p style={styles.subheading}>
        Tools, platforms, and languages I use to build secure and scalable
        systems.
      </p>

      <div style={styles.grid}>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            style={{
              backgroundColor: "#fff",
              borderRadius: "1rem",
              padding: "1rem 0.5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              cursor: "default",
              userSelect: "none",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            whileHover="hoverFocus"
            whileFocus="hoverFocus"
            tabIndex={0}
            aria-label={skill.title}
          >
            <div style={styles.iconWrapper}>
              <img
                src={skill.icon}
                alt={skill.title}
                style={styles.icon}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
            <h3 style={styles.skillTitle}>{skill.title}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
