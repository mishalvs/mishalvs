import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const [hoverDownload, setHoverDownload] = useState(false);
  const [showPdf, setShowPdf] = useState(false);

  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });

  const pdfUrl = "/Resume.pdf";

  return (
    <>
      <section id="about" style={{ background: "#fff", padding: "4rem 1rem" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50, borderRadius: "50% 20%" }}
          animate={inView ? { opacity: 1, y: 0, borderRadius: "10px" } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            margin: "0 auto",
            maxWidth: "1100px",
          }}
        >
          <div style={styles.container}>
            <div className="about-text" style={styles.textContainer}>
              <h2 style={styles.title}>About Me</h2>
              <div style={styles.underline} />
              <p style={styles.paragraph}>
                I'm <strong>Mishal V S</strong>, a graduate in Computer Science & Engineering from St. Joseph Engineering College, Mangalore. My passion
                lies in <strong>cybersecurity</strong> and building secure, efficient systems.
              </p>
              <p style={styles.paragraph}>
                I've completed internships in cybersecurity analysis and frontend development,
                and hold certifications like <strong>CompTIA Security+</strong> and{" "}
                <strong>Cisco’s Cybersecurity Path</strong>. I enjoy solving real-world
                security problems and creating tools that make a difference.
              </p>

              <div style={styles.buttonRow}>
                <button
                  onMouseEnter={() => setHoverDownload(true)}
                  onMouseLeave={() => setHoverDownload(false)}
                  onClick={() => setShowPdf(true)}
                  style={{
                    ...styles.button,
                    ...styles.download,
                    ...(hoverDownload ? styles.buttonHover : {}),
                  }}
                >
                  View CV
                </button>
              </div>

              {showPdf && (
                <div className="pdfViewerContainer">
                  <button
                    onClick={() => setShowPdf(false)}
                    style={styles.closeButton}
                    aria-label="Close PDF viewer"
                  >
                    ✕
                  </button>
                  <iframe
                    src={pdfUrl}
                    title="CV PDF"
                    className="pdfIframe"
                    frameBorder="0"
                  />
                </div>
              )}
            </div>

            <div className="about-image" style={styles.imageWrapper}>
              <div style={styles.blueFrame} />
              <img src="/photos/About_Me.jpg" alt="About" style={styles.image} />
            </div>
          </div>
        </motion.div>
      </section>

      <style>{`
        .pdfViewerContainer {
          margin-top: 2rem;
          position: relative;
          width: 100%;
          max-width: 900px;
          height: 70vh;
          border: 1px solid #ccc;
          border-radius: 12px;
          overflow: hidden;
          box-sizing: border-box;
        }
        .pdfIframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        @media (max-width: 768px) {
          .about-text {
            order: 2;
            width: 100%;
          }
          .about-image {
            order: 1;
            width: 100%;
            height: auto;
          }
          .about-image img {
            width: 100%;
            height: auto;
          }
          .pdfViewerContainer {
            height: 50vh;
          }
        }
      `}</style>
    </>
  );
};

const styles = {
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2rem",
  },
  imageWrapper: {
    position: "relative",
    width: "280px",
    height: "370px",
    flexShrink: 0,
  },
  blueFrame: {
    position: "absolute",
    top: "20px",
    left: "20px",
    width: "100%",
    height: "100%",
    border: "4px solid #3B82F6",
    borderRadius: "12px",
    zIndex: 1,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    zIndex: 2,
  },
  textContainer: {
    flex: 1,
    maxWidth: "600px",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#111827",
    marginBottom: "0.25rem",
  },
  underline: {
    width: "50px",
    height: "4px",
    backgroundColor: "#3B82F6",
    marginBottom: "1.2rem",
  },
  paragraph: {
    fontSize: "1rem",
    lineHeight: "1.7",
    color: "#374151",
    marginBottom: "1rem",
  },
  buttonRow: {
    marginTop: "1.5rem",
    display: "flex",
    gap: "1rem",
  },
  button: {
    padding: "0.6rem 1.8rem",
    fontSize: "1rem",
    fontWeight: "600",
    borderRadius: "9999px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#e5e7eb",
    color: "#111827",
    transition: "background-color 0.3s ease",
  },
  download: {
    backgroundColor: "#3B82F6",
    color: "#fff",
  },
  buttonHover: {
    backgroundColor: "#2563eb",
  },
  closeButton: {
    position: "absolute",
    top: "8px",
    right: "8px",
    background: "transparent",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: "#333",
    zIndex: 10,
  },
};

export default AboutMe;
