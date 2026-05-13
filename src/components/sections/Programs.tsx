import { motion } from 'framer-motion';
import { sectionReveal, staggerContainer, staggerItem, VIEWPORT } from '../../lib/motion';
import { programs } from '../../data/programs';

export default function Programs() {
  return (
    <section id="programs" style={{ padding: '96px 40px', background: 'var(--color-canvas)' }}>
      <motion.div
        variants={sectionReveal}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        style={{ maxWidth: 1440, margin: '0 auto 64px' }}
      >
        <span className="label-upper">Sesuaikan dengan goalmu</span>
        <h2 className="section-title">Program Untuk<br />Setiap Goal</h2>
        <p className="section-body">
          Pilih sesuai goal — atau combine. Konsultasi gratis untuk tentukan yang cocok.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT}
        className="card-grid programs-grid"
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          gridTemplateColumns: 'repeat(3, 1fr)',
        }}
      >
        {programs.map((p) => (
          <motion.div
            key={p.id}
            variants={staggerItem}
            style={{
              position: 'relative',
              overflow: 'hidden',
              aspectRatio: '4/3',
              background: 'var(--color-surface-card)',
            }}
            className="program-card"
          >
            <img
              src={p.photo}
              alt={p.photoAlt}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.7s ease',
              }}
              className="program-card__photo"
            />
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.08) 60%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '0 32px 32px',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-family-display)',
                  fontSize: 34,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: '#fff',
                  marginBottom: 6,
                  lineHeight: 1,
                }}
              >
                {p.title}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 3 }}>
                {p.items.map((item) => (
                  <li key={item} style={{ fontSize: 13, fontWeight: 300, color: 'var(--color-body-text)' }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style>{`
        .program-card:hover .program-card__photo { transform: scale(1.06); }
        @media (max-width: 1024px) { .programs-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px)  { .programs-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
