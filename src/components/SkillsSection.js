'use client';
import React from "react";
import { motion } from "framer-motion";

const colors = {
  bg: "#111111",
  cardGradient: "linear-gradient(135deg, #1f1f1f, #222222)",
  accent: "#3B82F6",
  textPrimary: "#fff",
  textSecondary: "#aaa",
  border: "#333",
};

const skillsData = [
  { category: "Programming", skills: ["Python", "JavaScript (React, Node.js)", "HTML", "CSS"] },
  { category: "Blockchain", skills: ["Ethereum", "Solidity", "Web3.js"] },
  { category: "Security Tools", skills: ["Burp Suite","OWASP ZAP","Nmap","Metasploit","Wireshark","sqlmap","OpenVAS"] },
  { category: "Security Domains", skills: ["Web & API Testing","Source Code Review","SOC","Incident Response","OWASP Top 10"] },
  { category: "Networking", skills: ["TCP/IP","LAN/WAN","Cisco Routing & Switching"] },
  { category: "Database", skills: ["MySQL"] },
  { category: "Documentation", skills: ["Technical Reporting","Security Audit","Presentation Design"] },
];

export default function TechnicalSkills() {
  const styles = {
    section: { backgroundColor: colors.bg, padding: "5rem 2rem", color: colors.textPrimary, fontFamily: "'Segoe UI', sans-serif" },
    heading: { fontSize: "2.75rem", fontWeight: 800, textAlign: "center", marginBottom: "0.5rem" },
    subheading: { fontSize: "1rem", color: colors.textSecondary, textAlign: "center", marginBottom: "3rem" },
    grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem", maxWidth:1200, margin:"0 auto" },
    card: { background: colors.cardGradient, borderRadius:"16px", padding:"2rem 1.5rem", border:`1px solid ${colors.border}`, cursor:"pointer", minHeight:"200px", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", transition:"all 0.3s ease" },
    category: { fontSize:"1.5rem", fontWeight:800, marginBottom:"1rem", color:colors.accent, textAlign:"center" },
    skillList: { display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"0.5rem" },
    skillItem: { backgroundColor:"#2a2a2a", padding:"0.35rem 0.75rem", borderRadius:"999px", fontSize:"0.875rem", color:colors.textPrimary, whiteSpace:"nowrap" },
  };

  const cardVariants = {
    hidden: { opacity:0, y:20 },
    visible: { opacity:1, y:0 },
    hover: { scale:1.05, boxShadow:`0 15px 25px rgba(59,130,246,0.6)`, transition:{type:"spring", stiffness:250, damping:20} },
  };

  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.heading}>Technical Skills</h2>
      <p style={styles.subheading}>Tools, technologies, domains, and frameworks I work with.</p>
      <div style={styles.grid}>
        {skillsData.map((cat, idx)=>(
          <motion.div key={idx} style={styles.card} initial="hidden" whileInView="visible" whileHover="hover" variants={cardVariants} transition={{duration:0.4, delay:idx*0.1}}>
            <h3 style={styles.category}>{cat.category}</h3>
            <div style={styles.skillList}>
              {cat.skills.map((skill,sIdx)=><span key={sIdx} style={styles.skillItem}>{skill}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
