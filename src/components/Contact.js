import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

// Defined for a personal portfolio
const personalDetails = {
    email: "mishalvs211003@gmail.com", 
    // Using your provided social links
    socials: [
        { icon: <FaTwitter />, link: "https://twitter.com/your_handle" }, // Placeholder Twitter (add your actual link)
        { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/mishalvs" },
        { icon: <FaGithub />, link: "https://github.com/mishalvs" },
        { icon: <FaInstagram />, link: "https://instagram.com/_mishal_vs_" },
    ],
};

const colors = {
    bgPrimary: "#111111ff", 
    textPrimary: "#ffffff",
    accent: "#ffffff", 
    textSecondary: "#aaaaaa",
};

export default function ContactSection() {
    const styles = {
        wrapper: {
            backgroundColor: colors.bgPrimary,
            padding: "8rem 2rem 1rem", 
            color: colors.textPrimary,
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            position: "relative",
            minHeight: "80vh", // Adjusted height since we removed location blocks
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
        },
        // --- Main Content Area ---
        mainContent: {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center", // Center vertically in the main area
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            paddingBottom: "4rem", 
        },
        // --- Left Column (Call to Action) ---
        ctaColumn: {
            flex: "1 1 50%",
            minWidth: "300px",
            textAlign: "left",
            marginBottom: "3rem",
        },
        ctaHeading: {
            fontSize: "3rem", 
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: "1.5rem",
        },
        emailLinkStyle: {
            display: "inline-block",
            textDecoration: "none",
            color: colors.textPrimary,
            border: `1px solid ${colors.textPrimary}`,
            borderRadius: "50px", 
            padding: "0.75rem 1.5rem",
            fontSize: "1rem",
        },
        // --- Right Column (Personal Message/Links) ---
        detailsColumn: {
            flex: "1 1 50%",
            minWidth: "300px",
            textAlign: "left",
            paddingLeft: "2rem",
        },
        detailsSubHeading: {
            fontSize: "3rem",
            fontWeight: 700,
            lineHeight: 1.1,
            color: colors.textPrimary,
            marginBottom: "1rem",
        },
        detailText: {
            fontSize: "1.1rem",
            color: colors.textSecondary,
            lineHeight: 1.6,
        },
        // --- Footer Section ---
        footer: {
            borderTop: `1px solid ${colors.textSecondary}`,
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            paddingBottom: "1rem",
        },
        footerLeft: {
            display: "flex",
            alignItems: "center",
            fontSize: "0.85rem",
        },
        footerLink: {
            color: colors.textSecondary,
            textDecoration: "none",
            margin: "0 10px",
            transition: "color 0.3s",
        },
        dotSeparator: {
            width: "5px",
            height: "5px",
            backgroundColor: colors.textSecondary,
            borderRadius: "50%",
            margin: "0 5px",
        },
        socialLinks: {
            display: "flex",
            gap: "1rem",
            fontSize: "1.2rem",
        },
        socialIcon: {
            color: colors.textPrimary,
        },
        // Media query for stacking columns on mobile
        '@media (maxWidth: 768px)': {
            mainContent: { flexDirection: 'column' },
            ctaColumn: { textAlign: 'center', marginBottom: '2rem' },
            detailsColumn: { textAlign: 'center', paddingLeft: '0' },
            footer: { flexDirection: 'column', gap: '1rem' },
        }
    };

    return (
        <section style={styles.wrapper} id="contact">
            {/* Main Content Area */}
            <div style={styles.mainContent}>
                
                {/* Left Column - Call to Action (Mishal's Contact) */}
                <div style={styles.ctaColumn}>
                    <motion.h2
                        style={styles.ctaHeading}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Ready to <br /> Connect ?
                    </motion.h2>
                    
                    <motion.a
                        href={`mailto:${personalDetails.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={styles.emailLinkStyle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ 
                            backgroundColor: colors.textPrimary, 
                            color: colors.bgPrimary,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <FaEnvelope style={{ marginRight: '8px' }} /> {personalDetails.email}
                    </motion.a>
                </div>

                {/* Right Column - Personal Message/CTA */}
                <div style={styles.detailsColumn}>
                    <motion.h2
                        style={styles.detailsSubHeading}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Let's build <br /> something great
                    </motion.h2>
                    
                    <motion.p
                        style={styles.detailText}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        As a fresher, I'm eager to discuss new project ideas, job opportunities, 
                        or even just technologies. Reach out—I respond quickly!
                    </motion.p>
                </div>
            </div>

            {/* Footer Section (Includes Socials) */}
            <div style={styles.footer}>
                <div style={styles.footerLeft}>
                    {/* Using your desired footer links */}
                    <a href="#projects" style={styles.footerLink}>PROJECTS</a>
                    <div style={styles.dotSeparator}></div>
                    <a href="#about" style={styles.footerLink}>ABOUT ME</a>
                </div>

                <div style={styles.socialLinks}>
                    {personalDetails.socials.map((social, idx) => (
                        <motion.a
                            key={idx}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.socialIcon}
                            whileHover={{ scale: 1.2, color: colors.textSecondary }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );