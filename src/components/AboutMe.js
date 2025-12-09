'use client';
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// ✅ Constant text outside the component
const fullText = `Hi, I’m Mishal V S, a Computer Science & Engineering graduate from St. Joseph Engineering College, Mangalore. I’m an aspiring Cybersecurity Analyst with hands-on experience in vulnerability assessment, penetration testing, and SOC operations. I’ve completed internships at Digitdefence.com and EyeQDotNet Pvt Ltd, gaining exposure to ethical hacking, threat detection, and incident response. I’m skilled in Python, Solidity, Web3.js, and security tools like Burp Suite, Nmap, Metasploit, Wireshark, OWASP ZAP, and OpenVAS. I’m passionate about building secure systems and contributing to proactive defense initiatives in cybersecurity.`;

const TYPING_SPEED = 30;

const AboutMe = () => {
  const [typedText, setTypedText] = useState("");
  const fullTextRef = useRef(fullText);

  // ✅ Properly closed useEffect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullTextRef.current.slice(0, index + 1));
      index++;
      if (index === fullTextRef.current.length) clearInterval(interval);
    }, TYPING_SPEED);

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        {/* MONITOR — Left */}
        <motion.div
          initial={{ x: -120, rotateY: -15, opacity: 0 }}
          whileInView={{ x: 0, rotateY: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={styles.monitorWrapper}
        >
          <div style={styles.monitor}>
            <div style={styles.terminalHeader}>
              <span style={{ ...styles.circle, backgroundColor: "#f56565" }} />
              <span style={{ ...styles.circle, backgroundColor: "#ecc94b" }} />
              <span style={{ ...styles.circle, backgroundColor: "#48bb78" }} />
            </div>
            <div style={styles.terminalBody}>
              <p style={styles.terminalText}>
                {typedText}
                <span className="cursor">|</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* PHOTO — Right */}
        <motion.div
          initial={{ x: 120, rotateY: 15, opacity: 0 }}
          whileInView={{ x: 0, rotateY: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          style={styles.photoWrapper}
        >
          <div style={styles.photoFrame} />
          <img src="/photos/About_me.png" alt="About Me" style={styles.photo} />
        </motion.div>
      </div>

      {/* Cursor animation CSS */}
      <style>
        {`
          .cursor {
            display: inline-block;
            width: 1ch;
            background-color: #00ff9c;
            margin-left: 2px;
            animation: blink 1s step-start infinite;
          }
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
        `}
      </style>
    </section>
  );
};

const styles = {
  section: { background: "#111111ff", padding: "4rem 2rem" },
  container: {
    display: "flex",
    justifyContent: "space-between",
    gap: "2rem",
    maxWidth: "1100px",
    margin: "0 auto",
    flexWrap: "wrap",
    perspective: "1000px",
  },
  monitorWrapper: { flex: 1, minWidth: "300px" },
  monitor: {
    backgroundColor: "#1e1e1e",
    borderRadius: "12px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    height: "360px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  },
  terminalHeader: { display: "flex", gap: "0.5rem", padding: "0.5rem", backgroundColor: "#2d2d2d" },
  circle: { width: "12px", height: "12px", borderRadius: "50%" },
  terminalBody: { padding: "1rem", flex: 1, overflowY: "auto" },
  terminalText: { color: "#00ff9c", fontFamily: "monospace", fontSize: "0.95rem", whiteSpace: "pre-wrap", margin: 0, lineHeight: 1.5 },
  photoWrapper: { flexShrink: 0, width: "370px", height: "390px", position: "relative" },
  photoFrame: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "4px solid #3B82F6", borderRadius: "12px", zIndex: 1 },
  photo: { position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px", zIndex: 2 },
};

export default AboutMe;
