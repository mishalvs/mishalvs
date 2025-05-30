import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const experiences = [
    {
      date: "Feb 2025 - June 2025",
      title: "Cyber Security Analyst Intern",
      company: "EyeQDot Net Pvt. Ltd",
      companyColor: "#3B82F6",
      description:
        "Identified and mitigated security threats, analyzed systems, and collaborated with teams to improve overall defense.",
    },
    {
      date: "Oct 2023 - Nov 2023",
      title: "Front-End Web Developer Intern",
      company: "Motion Cut Video Studio",
      companyColor: "#3B82F6",
      description:
        "Built responsive web interfaces using HTML, CSS, and JavaScript. Ensured seamless UX and cross-browser compatibility.",
    },
  ];

  // Declare a separate hook for each experience manually
  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.2 });

  const refs = [ref1, ref2];
  const inViews = [inView1, inView2];

  const styles = {
    section: {
      display: "flex",
      flexWrap: "wrap",
      backgroundColor: "#f9fafb",
      color: "#111827",
      padding: "4rem 2rem",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: isMobile ? "column" : "row",
      maxWidth: "100%",
      margin: "0 auto",
    },
    left: {
      flex: 1,
      minWidth: isMobile ? "100%" : "60%",
      paddingRight: isMobile ? 0 : "2rem",
      textAlign: "left",
    },
    right: {
      flex: 1,
      minWidth: isMobile ? "100%" : "35%",
      marginTop: isMobile ? "2rem" : 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      maxWidth: "100%",
      borderRadius: "1rem",
      marginTop: "160px",
      height: "auto",
      boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    },
    subTitle: {
      color: "#3B82F6",
      fontSize: "1rem",
      fontWeight: "600",
      marginBottom: "0.5rem",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    title: {
      fontSize: "2rem",
      fontWeight: "700",
      marginBottom: "1rem",
      color: "#111827",
    },
    description: {
      fontSize: "1rem",
      color: "#374151",
      marginBottom: "2rem",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "1rem",
      padding: "1.2rem 1.5rem",
      marginBottom: "1.5rem",
      border: "1px solid #e5e7eb",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    },
    date: {
      color: "#3B82F6",
      fontWeight: "600",
      fontSize: "0.9rem",
      marginBottom: "0.3rem",
    },
    cardTitle: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      margin: "0.3rem 0",
      color: "#111827",
    },
    company: {
      fontSize: "1rem",
      fontWeight: "500",
      marginBottom: "0.5rem",
    },
    cardDescription: {
      fontSize: "0.95rem",
      color: "#374151",
    },
  };

  return (
    <section id="experience">
      <div style={styles.section}>
        <div style={styles.left}>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 style={styles.subTitle}>Experience</h4>
            <h2 style={styles.title}>What I've Worked On</h2>
            <p style={styles.description}>
              Real-world experience in both cybersecurity and front-end development,
              blending technical expertise with teamwork and problem-solving.
            </p>
          </motion.div>

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              ref={refs[idx]}
              initial={{ opacity: 0, y: 40 }}
              animate={inViews[idx] ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{
                y: -4,
                boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
              }}
              style={styles.card}
            >
              <p style={styles.date}>{exp.date}</p>
              <h3 style={styles.cardTitle}>{exp.title}</h3>
              <p style={{ ...styles.company, color: exp.companyColor }}>{exp.company}</p>
              <p style={styles.cardDescription}>{exp.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          style={styles.right}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/photos/Work.png"
            alt="Experience Illustration"
            style={styles.image}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
