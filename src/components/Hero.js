'use client';
import React, { useState, useEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

// --- Timing Constants ---
const TIMING = {
  GREETING_DURATION: 1000,
  NAME_START_DELAY: 500,
  NAME_DECRYPT_DURATION: 3000,
  SUBHEADING_DECRYPT_DURATION: 800,
  SUBHEADING_CYCLE_INTERVAL: 3000,
};

// --- DecryptText Component ---
const DecryptText = ({ text, duration = TIMING.NAME_DECRYPT_DURATION, onFinish }) => {
  const [display, setDisplay] = useState('');
  const hasAnimated = useRef(false);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{};':\"|,./<>?";

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    let frame = 0;
    const totalFrames = 60 * (duration / 1000);
    const len = text.length;
    let animationFrameId;

    const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

    const animate = () => {
      frame++;
      const progress = frame / totalFrames;
      if (progress >= 1) {
        setDisplay(text);
        if (onFinish) onFinish();
        cancelAnimationFrame(animationFrameId);
        return;
      }
      const scrambled = text.split('').map((c, i) => (i < progress * len ? c : randomChar())).join('');
      setDisplay(scrambled);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [text, duration, onFinish]);

  return <span>{display || text.replace(/./g, ' ')}</span>;
};

// --- Subheading Cycler ---
const SubheadingCycler = ({ scrollYProgress }) => {
  const roles = [
    "Cyber Security Enthusiast",
    "Cyber Security Analyst",
    "Cyber Security Intern",
    "Security Engineer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex(prev => (prev + 1) % roles.length), TIMING.SUBHEADING_CYCLE_INTERVAL);
    return () => clearInterval(timer);
  }, [roles.length]);

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <motion.h2
      key={roles[index]}
      style={{
        fontSize: "min(5vw, 2rem)",
        fontWeight: 600,
        color: "#00c3ff",
        margin: "0.3rem 0 0 0",
        minHeight: "2.5rem",
        opacity,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1 }}
    >
      <DecryptText text={roles[index]} duration={TIMING.SUBHEADING_DECRYPT_DURATION} />
    </motion.h2>
  );
};

// --- Particle Component ---
const Particle = ({ size = "10px", color = "#00c3ff", x = "0%", y = "0%", duration = 5, delay = 0 }) => (
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
      opacity: [0.5, 1, 0.5],
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

// --- Hero Component ---
const Hero = () => {
  const [showName, setShowName] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const { scrollYProgress } = useViewportScroll();

  const handleNameFinish = () => setShowSub(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowName(true), TIMING.NAME_START_DELAY);
    return () => clearTimeout(timer);
  }, []);

  const particleConfigs = Array.from({ length: 15 }).map(() => ({
    size: `${Math.random() * 10 + 4}px`,
    color: ["#00c3ff", "#ff3d67", "#00ff7f", "#ffaa00", "#ffffff"][Math.floor(Math.random() * 5)],
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    duration: Math.random() * 6 + 3,
    delay: Math.random() * 3,
  }));

  const linkStyle = {
    color: "#00c3ff",
    margin: "0 0.8rem",
    fontWeight: 500,
    fontSize: "1.05rem",
    textDecoration: "none",
    transition: "color 0.3s",
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "100vh",
        padding: "4rem 5%",
        background: "#111111ff",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {particleConfigs.map((p, i) => <Particle key={i} {...p} />)}

      <motion.h1
        style={{ fontSize: "min(4vw, 2rem)", fontWeight: 400, margin: 0, zIndex: 1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: TIMING.GREETING_DURATION / 1000 }}
      >
        Hi, I'm
      </motion.h1>

      <h1 style={{
        fontSize: "min(10vw, 8rem)",
        fontWeight: 500,
        margin: "0.1rem 0",
        lineHeight: 1.05,
        minHeight: "3rem",
        zIndex: 1,
      }}>
        {showName && <DecryptText text="Mishal V S" duration={TIMING.NAME_DECRYPT_DURATION} onFinish={handleNameFinish} />}
      </h1>

      {showSub && <SubheadingCycler scrollYProgress={scrollYProgress} />}

      {/* Links */}
      {showSub && (
        <motion.div
          style={{ display: "flex", marginTop: "1.5rem", zIndex: 1 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="https://www.linkedin.com/in/mishalvs"
            style={linkStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mishalvs"
            style={linkStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
