import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaLaptopCode, FaShieldAlt } from 'react-icons/fa';

const roadmap = [
  {
    year: '2019',
    title: 'High School',
    subtitle: 'St Norbert CBSE School, Chikmagaluru',
    icon: <FaGraduationCap />,
    reports: '',
    color: '#3b82f6',
  },
  {
    year: '2019 - 2021',
    title: 'Higher Secondary',
    subtitle: 'St Norbert PU College, Chikmagaluru',
    icon: <FaGraduationCap />,
    reports: '',
    color: '#06b6d4',
  },
  {
    year: '2021 - 2025',
    title: 'BE Computer Science and Engineering',
    subtitle: 'St Joseph Engineering College, Mangalore',
    icon: <FaLaptopCode />,
    reports: '',
    color: '#8b5cf6',
  },
  {
    year: '2024 - Present',
    title: 'Cyber Security Technician',
    subtitle: 'EC Council Certification',
    icon: <FaShieldAlt />,
    reports: '',
    color: '#ef4444',
  },
];

// Child component for each timeline item
const TimelineItem = ({ item, styles }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      style={styles.item}
      initial={{ opacity: 0, x: -50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div style={styles.iconCircle(item.color)}>{item.icon}</div>

      <motion.div
        style={styles.textBox}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {item.reports && <div style={styles.reports}>Reports {item.reports}</div>}
        <div style={styles.label}>{item.title}</div>
        <div style={styles.year}>{item.year}</div>
        <div style={styles.subtitleText}>{item.subtitle}</div>
      </motion.div>
    </motion.div>
  );
};

const Education = () => {
  const styles = {
    section: {
      padding: '4rem 1rem',
      background: '#f9fafb',
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
    },
    title: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    subtitle: {
      fontSize: '1rem',
      color: '#6b7280',
    },
    roadmapContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      gap: '2.5rem',
      maxWidth: '600px',
      margin: '0 auto',
    },
    line: {
      position: 'absolute',
      top: 0,
      left: '30px',
      width: '4px',
      height: '100%',
      background: 'linear-gradient(to bottom, #3b82f6, #06b6d4, #8b5cf6, #ef4444)',
      zIndex: 0,
      borderRadius: '4px',
    },
    item: {
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-start',
      textAlign: 'left',
      zIndex: 1,
      paddingLeft: '70px',
      minHeight: '100px',
      width: '100%',
    },
    iconCircle: (color) => ({
      position: 'absolute',
      left: 0,
      top: '10px',
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: color,
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '24px',
      zIndex: 2,
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    }),
    textBox: {
      backgroundColor: '#fff',
      padding: '1rem',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
      width: '100%',
    },
    reports: {
      color: '#6b7280',
      fontSize: '0.9rem',
      marginBottom: '0.5rem',
    },
    label: {
      fontWeight: 600,
      marginBottom: '0.2rem',
      fontSize: '1.2rem',
      color: '#111827',
    },
    year: {
      fontSize: '0.9rem',
      color: '#9ca3af',
      marginBottom: '0.5rem',
    },
    subtitleText: {
      fontSize: '1rem',
      color: '#6b7280',
    },
    subTitle: {
      color: '#3B82F6',
      fontSize: '1rem',
      fontWeight: '600',
      marginBottom: '0.5rem',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
  };

  return (
    <section id="education" style={styles.section}>
      <div style={styles.header}>
        <h4 style={styles.subTitle}>Education</h4>
        <h2 style={styles.title}>📈 Academic Growth Journey</h2>
        <p style={styles.subtitle}>My education visualized over time</p>
      </div>

      <div style={styles.roadmapContainer}>
        <div style={styles.line} />
        {roadmap.map((item, index) => (
          <TimelineItem key={index} item={item} styles={styles} />
        ))}
      </div>
    </section>
  );
};

export default Education;
