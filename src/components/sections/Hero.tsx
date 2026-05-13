import { motion, useInView, useMotionValue, animate } from 'framer-motion';
import { useRef, useEffect } from 'react';
import {
  heroContainer,
  heroWord,
  heroFade,
  heroStat,
  EASE_EXPO,
} from '../../lib/motion';

interface StatProps {
  value: string;
  label: string;
  index: number;
  isInView: boolean;
}

function Stat({ value, label, index, isInView }: StatProps) {
  const numMatch = value.match(/^[\d.,]+/);
  const suffix = numMatch ? value.slice(numMatch[0].length) : '';
  const num = numMatch ? parseFloat(numMatch[0].replace(/[.,]/g, '')) : null;

  const displayRef = useRef<HTMLDivElement>(null);
  const motionVal = useMotionValue(0);

  useEffect(() => {
    if (!isInView || num === null) return;
    const ctrl = animate(motionVal, num, {
      duration: 1.8,
      ease: 'easeOut',
      delay: index * 0.12,
    });
    const unsub = motionVal.on('change', (v) => {
      if (displayRef.current) {
        const rounded = Math.round(v);
        displayRef.current.textContent =
          rounded >= 1000
            ? rounded.toLocaleString('id-ID') + suffix
            : rounded + suffix;
      }
    });
    return () => { ctrl.stop(); unsub(); };
  }, [isInView, num, suffix, index, motionVal]);

  return (
    <motion.div
      variants={heroStat}
      custom={index}
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <div
        ref={displayRef}
        style={{
          fontFamily: 'var(--font-family-display)',
          fontSize: 'clamp(28px, 3.5vw, 42px)',
          letterSpacing: '1px',
          color: '#fff',
          lineHeight: 1,
        }}
      >
        {num === null ? value : '0' + suffix}
      </div>
      <div
        style={{
          fontSize: '11px',
          fontWeight: 500,
          letterSpacing: '1.5px',
          color: 'var(--color-muted)',
          marginTop: '6px',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });

  const stats = [
    { value: '8000+', label: 'Active Members' },
    { value: '50+',   label: 'Group Class / Week' },
    { value: '30+',   label: 'Certified Trainers' },
    { value: '5AM–11PM', label: 'Open Every Day' },
  ];

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {/* Background photo */}
      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.18) 100%)',
        }}
      />

      {/* Content */}
      <motion.div
        variants={heroContainer}
        initial="hidden"
        animate="visible"
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 1440,
          margin: '0 auto',
          padding: '96px 40px 96px',
          width: '100%',
        }}
      >
        <motion.span variants={heroFade} className="label-upper">
          Jakarta · Surabaya · Bandung — 5 Cabang
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={heroContainer}
          style={{
            fontFamily: 'var(--font-family-display)',
            fontSize: 'clamp(80px, 14vw, 180px)',
            lineHeight: 0.88,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#fff',
            margin: '16px 0 32px',
            perspective: 1000,
          }}
        >
          {['Mulai.', 'Kuat.', 'Konsisten.'].map((word, i) => (
            <motion.span
              key={word}
              variants={heroWord}
              style={{
                display: 'block',
                color: i === 1 ? 'var(--color-forge)' : '#fff',
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          variants={heroFade}
          style={{
            fontSize: 18,
            fontWeight: 300,
            color: 'var(--color-body-str)',
            maxWidth: 540,
            lineHeight: 1.7,
            marginBottom: 40,
          }}
        >
          Gym & fitness hub dengan equipment lengkap, group class harian, dan personal
          trainer bersertifikat. Untuk siapa pun yang serius mau berubah.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={heroFade}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 64 }}
        >
          <a href="#booking" className="btn btn-primary">Coba Gratis 7 Hari</a>
          <a href="#programs" className="btn btn-outline">Lihat Program</a>
        </motion.div>

        {/* Stats */}
        <motion.div
          ref={statsRef}
          variants={heroContainer}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, auto)',
            justifyContent: 'start',
            gap: '0 64px',
            paddingTop: 40,
            borderTop: '1px solid var(--color-hairline)',
          }}
        >
          {stats.map((s, i) => (
            <Stat key={s.label} value={s.value} label={s.label} index={i} isInView={statsInView} />
          ))}
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .hero-stats { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
