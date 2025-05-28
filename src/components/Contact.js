import React, { useState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";

const colors = {
  bg: "#f3f4f6",
  textPrimary: "#1f2937",
  violet: "#7c3aed",
  violetDark: "#6d28d9",
  textSecondary: "#4b5563",
  border: "#d1d5db",
  focusShadow: "rgba(124, 58, 237, 0.4)",
  focusShadowHover: "rgba(124, 58, 237, 0.7)",
};

const styles = {
  wrapper: {
    backgroundColor: colors.bg,
    paddingTop: "4rem",
    paddingBottom: "4rem",
    color: colors.textPrimary,
    textAlign: "center",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    minHeight: "400px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  waveButtonWrapper: {
    flex: "1 1 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  waveButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    backgroundColor: "transparent",
    border: "none",
    fontSize: "2rem",
    fontWeight: "700",
    cursor: "pointer",
    userSelect: "none",
    outline: "none",
    color: colors.violet,
    transition: "opacity 0.5s ease, transform 0.5s ease",
  },
  waveEmoji: {
    display: "inline-block",
    transformOrigin: "70% 70%",
    animation: "wave 2s infinite",
  },
  waveButtonHidden: {
    opacity: 0,
    transform: "translateY(-20px)",
    pointerEvents: "none",
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
    margin: "0 auto 2.5rem",
    fontSize: "1.1rem",
    lineHeight: 1.5,
  },
  form: {
    maxWidth: "32rem",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "1.2rem",
    opacity: 0,
    transform: "translateY(20px)",
    transition: "opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s",
    pointerEvents: "none",
  },
  formVisible: {
    opacity: 1,
    transform: "translateY(0)",
    pointerEvents: "auto",
  },
  inputBase: {
    borderRadius: "0.75rem",
    border: `1.5px solid ${colors.border}`,
    padding: "0.75rem 1rem",
    fontSize: "1rem",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.06)",
    outline: "none",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    color: colors.textPrimary,
    fontFamily: "inherit",
    width: "100%",
    boxSizing: "border-box",
  },
  textarea: {
    minHeight: "120px",
    resize: "vertical",
  },
  inputFocus: {
    borderColor: colors.violet,
    boxShadow: `0 0 8px 2px ${colors.focusShadow}`,
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    background: `linear-gradient(90deg, ${colors.violet}, ${colors.violetDark})`,
    color: "#fff",
    border: "none",
    padding: "0.85rem",
    borderRadius: "0.75rem",
    fontSize: "1.1rem",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: `0 4px 12px ${colors.focusShadow}`,
    transition: "background 0.3s ease, box-shadow 0.3s ease",
    fontFamily: "inherit",
    width: "100%",
  },
  buttonHover: {
    background: `linear-gradient(90deg, ${colors.violetDark}, ${colors.violet})`,
    boxShadow: `0 6px 20px ${colors.focusShadowHover}`,
  },
};

// keyframes for waving hand emoji
const waveKeyframes = `
@keyframes wave {
  0% { transform: rotate(0deg); }
  15% { transform: rotate(14deg); }
  30% { transform: rotate(-8deg); }
  40% { transform: rotate(14deg); }
  50% { transform: rotate(-4deg); }
  60% { transform: rotate(10deg); }
  70%, 100% { transform: rotate(0deg); }
}
`;

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [inputFocus, setInputFocus] = useState({ name: false, email: false, message: false });
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [showForm, setShowForm] = useState(false);

  // Reset showForm when user scrolls away from #contact section
  useEffect(() => {
    function onScroll() {
      const section = document.getElementById("contact");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (!inView && showForm) {
        setShowForm(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [showForm]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (e) => {
    setInputFocus((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const handleBlur = (e) => {
    setInputFocus((prev) => ({ ...prev, [e.target.name]: false }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
    setShowForm(false);
  };

  const getInputStyle = (field) => ({
    ...styles.inputBase,
    ...(field === "message" ? styles.textarea : {}),
    ...(inputFocus[field] ? styles.inputFocus : {}),
  });

  return (
    <>
      {/* Inject wave keyframes style */}
      <style>{waveKeyframes}</style>

      <section id="contact" style={styles.wrapper}>
        {/* Wave button wrapper for centering */}
        <div style={styles.waveButtonWrapper}>
          <button
            onClick={() => setShowForm(true)}
            style={{
              ...styles.waveButton,
              ...(showForm ? styles.waveButtonHidden : {}),
            }}
            aria-label="Say hello and open contact form"
          >
            <span role="img" aria-label="waving hand" style={styles.waveEmoji}>
              👋
            </span>{" "}
            Say Hello
          </button>
        </div>

        {/* Contact form */}
        <div style={{ ...styles.form, ...(showForm ? styles.formVisible : {}) }}>
          <p style={styles.sectionTitle}>Get in touch</p>
          <h2 style={styles.heading}>Contact Me</h2>
          <p style={styles.subText}>
            Have a question or want to Hire or Work Together? Fill out the form below and we’ll get back to you.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={getInputStyle("name")}
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={getInputStyle("email")}
              autoComplete="email"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              style={getInputStyle("message")}
            />
            <button
              type="submit"
              style={isButtonHovered ? { ...styles.button, ...styles.buttonHover } : styles.button}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
              aria-label="Send message"
            >
              <FaPaperPlane /> Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
