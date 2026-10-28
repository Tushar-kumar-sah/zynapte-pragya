import React, { useState, useEffect, useRef } from 'react';
import { School, CheckCircle2, TrendingUp, Clock, ShieldCheck, Award } from 'lucide-react';

function AnimatedCounter({ endValue, duration = 1600, suffix = '', prefix = '', decimals = 0 }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease-out cubic formula
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = easeOutProgress * endValue;
            
            setCount(currentVal);

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              setCount(endValue);
            }
          };

          window.requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [endValue, duration]);

  const formatted = decimals > 0 
    ? count.toFixed(decimals) 
    : Math.floor(count).toLocaleString('en-IN');

  return (
    <span ref={counterRef} className="counter-digit">
      {prefix}{formatted}{suffix}
    </span>
  );
}

export default function StatsBanner() {
  const stats = [
    {
      icon: <School size={26} className="stat-icon" />,
      target: 1250,
      suffix: "+",
      decimals: 0,
      label: "Schools & Campuses",
      sublabel: "Active across India",
      color: "#145EFF",
      gradient: "linear-gradient(135deg, #145EFF 0%, #3B82F6 100%)",
      cardBg: "linear-gradient(150deg, #FFFFFF 20%, #EFF6FF 100%)",
      borderColor: "rgba(20, 94, 255, 0.28)",
      shadowColor: "rgba(20, 94, 255, 0.2)",
      metric: "+24% YoY Growth"
    },
    {
      icon: <CheckCircle2 size={26} className="stat-icon" />,
      target: 100,
      suffix: "%",
      decimals: 0,
      label: "APAAR & UDISE+ Standard",
      sublabel: "Pre-validation before upload",
      color: "#0891B2",
      gradient: "linear-gradient(135deg, #00CDE5 0%, #0891B2 100%)",
      cardBg: "linear-gradient(150deg, #FFFFFF 20%, #ECFEFF 100%)",
      borderColor: "rgba(0, 205, 229, 0.32)",
      shadowColor: "rgba(0, 205, 229, 0.2)",
      metric: "Zero Format Rejections"
    },
    {
      icon: <Clock size={26} className="stat-icon" />,
      target: 85,
      suffix: "%",
      decimals: 0,
      label: "Faster Fee Queues",
      sublabel: "Counter POS & 3-second receipts",
      color: "#059669",
      gradient: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
      cardBg: "linear-gradient(150deg, #FFFFFF 20%, #ECFDF5 100%)",
      borderColor: "rgba(5, 150, 105, 0.28)",
      shadowColor: "rgba(5, 150, 105, 0.2)",
      metric: "Save 12 hrs/week"
    },
    {
      icon: <ShieldCheck size={26} className="stat-icon" />,
      target: 99.9,
      suffix: "%",
      decimals: 1,
      label: "Uptime & Data Sovereignty",
      sublabel: "School-controlled server hosting",
      color: "#742DDA",
      gradient: "linear-gradient(135deg, #742DDA 0%, #9333EA 100%)",
      cardBg: "linear-gradient(150deg, #FFFFFF 20%, #F5F3FF 100%)",
      borderColor: "rgba(116, 45, 218, 0.28)",
      shadowColor: "rgba(116, 45, 218, 0.2)",
      metric: "Nightly Encrypted Backups"
    }
  ];

  return (
    <section className="stats-banner-section reveal-on-scroll" aria-label="Key Performance Statistics">
      <div className="container">
        <div className="stats-header-micro">
          <div className="stats-badge animate-pulse-badge">
            <Award size={14} />
            <span>PROVEN BY THE NUMBERS • BUILT FOR INDIAN SCHOOL OPERATIONS</span>
          </div>
          <h2 className="stats-section-title">Measurable Impact from Day One</h2>
        </div>

        <div className="stats-grid">
          {stats.map((s, idx) => (
            <div 
              key={idx} 
              className="stat-box-card group-hover-lift"
              style={{
                background: s.cardBg,
                border: `1.5px solid ${s.borderColor}`,
                boxShadow: `0 6px 18px -4px ${s.shadowColor}`
              }}
            >
              <div className="iconic-top-accent" style={{ background: s.gradient }} />
              <div className="stat-box-top">
                <div 
                  className="stat-icon-wrapper" 
                  style={{ 
                    background: s.gradient,
                    color: '#FFFFFF',
                    boxShadow: `0 6px 16px -2px ${s.color}50`
                  }}
                >
                  {s.icon}
                </div>
                <span 
                  className="stat-metric-pill" 
                  style={{ 
                    color: s.color, 
                    backgroundColor: `${s.color}14`,
                    borderColor: `${s.color}35`,
                    borderWidth: '1px',
                    borderStyle: 'solid'
                  }}
                >
                  <TrendingUp size={12} />
                  {s.metric}
                </span>
              </div>
              <div className="stat-box-number" style={{ color: s.color }}>
                <AnimatedCounter 
                  endValue={s.target} 
                  suffix={s.suffix} 
                  decimals={s.decimals}
                />
              </div>
              <div className="stat-box-label">{s.label}</div>
              <div className="stat-box-sublabel">{s.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
