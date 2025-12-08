'use client';
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    date: "Jul 2025 - Oct 2025",
    title: "Cyber Security Intern",
    company: "Digitdefence.com",
    companyUrl: "https://digitdefence.com",
    companyColor: "#3B82F6",
    description: "Worked on cybersecurity domains including vulnerability assessment, incident response, and ethical hacking",
  },
  {
    date: "Feb 2025 - June 2025",
    title: "Cyber Security Analyst Intern",
    company: "EyeQDot Net Pvt. Ltd",
    companyUrl: "https://eyeqdotnet.com",
    companyColor: "#3B82F6",
    description:
      "Identified and mitigated security threats, analyzed systems, and collaborated with teams to improve overall defense.",
  },
  {
    date: "Oct 2023 - Nov 2023",
    title: "Front-End Web Developer Intern",
    company: "Motion Cut Video Studio",
    companyUrl: "https://motioncut.in/",
    companyColor: "#3B82F6",
    description:
      "Built responsive web interfaces using HTML, CSS, and JavaScript. Ensured seamless UX and cross-browser compatibility.",
  },
];

// --- Particle Component ---
const Particle = ({ size = "8px", color = "#3B82F6", x = "0%", y = "0%", duration = 5, delay = 0 }) => (
  <motion.div
    style={{
      position: 'absolute',
      width: size,
      height: size,
      borderRadius: '50%',
      backgroundColor: color,
      top: y,
      left: x,
      zIndex: 0,
      pointerEvents: 'none',
    }}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, -10, 0],
      opacity: [0.5, 1, 0.5]
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    }}
  />
);

const Experience = () => {
  const particleConfigs = Array.from({ length: 12 }).map(() => ({
    size: `${Math.random() * 10 + 4}px`,
    color: ["#00c3ff", "#ff3d67", "#00ff7f", "#ffaa00", "#ffffff"][Math.floor(Math.random() * 5)],
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    duration: Math.random() * 6 + 3,
    delay: Math.random() * 3
  }));

  return (
    <section
      id="experience"
      style={{
        position: "relative",
        background: "#111111ff",
        color: "#fff",
        padding: "4rem 2rem",
        overflow: "hidden"
      }}
    >
      {particleConfigs.map((p, i) => <Particle key={i} {...p} />)}

      <motion.div
        style={{ maxWidth: "1000px", margin: "0 auto", zIndex: 1 }}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h4 style={{ color: "#3B82F6", fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "1px" }}>Experience</h4>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>What I've Worked On</h2>
        <p style={{ fontSize: "1rem", color: "#ccc", marginBottom: "2rem" }}>
          Real-world experience in both cybersecurity and front-end development, blending technical expertise with teamwork and problem-solving.
        </p>
      </motion.div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", maxWidth: "900px", margin: "0 auto", zIndex: 1 }}>
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50, rotateY: -5 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            whileHover={{ y: -5, scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.3)" }}
            style={{
              backgroundColor: "#1e1e1e",
              borderRadius: "12px",
              padding: "1.5rem",
              border: `1px solid #333`,
              boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.5 }}
              style={{
                height: "2px",
                backgroundColor: exp.companyColor,
                position: "absolute",
                bottom: 0,
                left: 0,
              }}
            />

            <p style={{ color: exp.companyColor, fontWeight: 600, fontSize: "0.9rem", marginBottom: "0.3rem" }}>{exp.date}</p>
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem" }}>{exp.title}</h3>
            <a
              href={exp.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "1rem", fontWeight: 500, marginBottom: "0.5rem", color: exp.companyColor, textDecoration: "underline" }}
            >
              {exp.company}
            </a>
            <p style={{ fontSize: "0.95rem", color: "#ccc", lineHeight: 1.6 }}>{exp.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
