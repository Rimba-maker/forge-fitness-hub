import { motion } from 'framer-motion';
import { sectionReveal, staggerContainer, staggerItem, VIEWPORT } from '../../lib/motion';
import { trainers } from '../../data/trainers';

export default function Trainers() {
  return (
    <section
      id="trainers"
      style={{
        padding: '96px 40px',
        background: 'var(--color-surface-soft)',
        borderTop: '1px solid var(--color-hairline)',
      }}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{ marginBottom: 64 }}
        >
          <span className="label-upper">Bersertifikat internasional</span>
          <h2 className="section-title">Tim Personal Trainer</h2>
          <p className="section-body">
            Berpengalaman dan spesialis sesuai goalmu — dari weight loss sampai powerlifting.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="card-grid trainers-grid"
          style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
        >
          {trainers.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              style={{ background: 'var(--color-canvas)', overflow: 'hidden' }}
              className="trainer-card"
            >
              <div style={{ overflow: 'hidden' }}>
                <img
                  src={t.photo}
                  alt={t.name}
                  style={{
                    width: '100%',
                    aspectRatio: '3/4',
                    objectFit: 'cover',
                    filter: 'grayscale(25%)',
                    transition: 'filter 0.5s, transform 0.5s',
                    display: 'block',
                  }}
                  className="trainer-photo"
                />
              </div>
              <div
                style={{
                  padding: '20px 24px 28px',
                  background: 'var(--color-surface-card)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-family-display)',
                    fontSize: 26,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: '#fff',
                    marginBottom: 3,
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: 'var(--color-forge)',
                    letterSpacing: '0.3px',
                    marginBottom: 4,
                  }}
                >
                  {t.specialty}
                </div>
                <div style={{ fontSize: 12, fontWeight: 300, color: 'var(--color-muted)' }}>
                  {t.cert}
                </div>
                <div
                  style={{
                    marginTop: 12,
                    fontSize: 13,
                    fontWeight: 600,
                    color: 'var(--color-body-str)',
                  }}
                >
                  {t.price}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .trainer-card:hover .trainer-photo { filter: grayscale(0%) !important; transform: scale(1.04); }
        @media (max-width: 1200px) { .trainers-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media (max-width: 768px)  { .trainers-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px)  { .trainers-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
