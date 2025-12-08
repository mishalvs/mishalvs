import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio",
    description:
      "A personal portfolio website built with React, showcasing my projects, skills, and experience with smooth animations and a modern UI.",
    link: "https://github.com/mishalvs/Portfolio",
  },
  {
    title: "CrowdMint",
    description:
      "A decentralized crowdfunding platform built using Solidity, Web3, and Next.js.",
    link: "https://github.com/mishalvs/CrowdMint",
  },
  {
    title: "LAN Intrusion Detection System",
    description:
      "A network security tool that monitors and flags unauthorized or suspicious LAN activity.",
    link: "https://github.com/mishalvs/LAN-Intrusion_Alert",
  },
  {
    title: "Fake Instagram Profile Detection",
    description:
      "Machine learning model that detects fake Instagram profiles based on activity metrics.",
    link: "https://github.com/NaveenShaji742/InstagramFakeProfileDetection",
  },
  {
    title: "Business Frontend Website",
    description:
      "A responsive, animated business landing page developed using React and Tailwind CSS.",
    link: "https://github.com/mishalvs/My-Internship-Project/tree/main/Business%20Website",
  },
  {
    title: "E-Commerce Frontend",
    description:
      "Modern e-commerce UI developed in React with product filtering, cart, and animations.",
    link: "https://github.com/mishalvs/My-Internship-Project/tree/main/E-Commerce%20Website",
  },
  {
    title: "Implementing MAC Changer",
    description:
      "A tool to change the MAC address of your network adapter for privacy and security testing.",
    link: "https://github.com/mishalvs/Implementing-MAC-Changer",
  },
  {
    title: "OpenVAS / GVM Vulnerability Assessment",
    description:
      "Performed vulnerability scanning and assessment using OpenVAS / Greenbone Vulnerability Management (GVM).",
    link: "https://github.com/mishalvs/Open-Vulnerability-Assessment-System-Open-VAS-Assessment",
  },
];

const colors = {
  bg: "#111111",
  card: "#1e1e1e",
  accent: "#3B82F6",
  text: "#fff",
  overlay: "rgba(59,130,246,0.9)",
};

export default function Projects() {
  const styles = {
    section: {
      backgroundColor: colors.bg,
      padding: "4rem 2rem",
      color: colors.text,
      overflow: "hidden",
    },
    container: {
      maxWidth: 1200,
      margin: "0 auto",
    },
    headerText: {
      color: colors.accent,
      textAlign: "center",
      textTransform: "uppercase",
      marginBottom: "0.5rem",
      fontWeight: 600,
      letterSpacing: 1,
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: 700,
      textAlign: "center",
      marginBottom: "1rem",
    },
    subtitle: {
      color: "#ccc",
      textAlign: "center",
      marginBottom: "3rem",
      fontSize: "1rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "1.5rem",
    },
    card: {
      position: "relative",
      backgroundColor: colors.card,
      borderRadius: "12px",
      overflow: "hidden",
      padding: "2rem 1rem",
      cursor: "pointer",
      height: "180px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: colors.overlay,
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "1rem",
      borderRadius: "12px",
      opacity: 0,
      flexDirection: "column",
      textAlign: "center",
    },
    projectTitle: {
      fontSize: "1.25rem",
      fontWeight: 700,
      color: "#fff",
    },
    link: {
      marginTop: "0.5rem",
      color: "#fff",
      fontWeight: 600,
      textDecoration: "underline",
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.05, boxShadow: "0 12px 25px rgba(0,0,0,0.5)" },
  };

  return (
    <section style={styles.section} id="projects">
      <div style={styles.container}>
        <p style={styles.headerText}>Projects</p>
        <h2 style={styles.title}>What I've Built</h2>
        <p style={styles.subtitle}>
          Explore a few of my hands-on software and cybersecurity projects.
        </p>

        <div style={styles.grid}>
          {projects.map((proj, idx) => (
            <motion.div
              key={idx}
              style={styles.card}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
              whileHover="hover"
            >
              <h3 style={styles.projectTitle}>{proj.title}</h3>

              {/* Overlay handled on parent hover */}
              <motion.div
                style={styles.overlay}
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                <p>{proj.description}</p>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.link}
                >
                  View project
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
