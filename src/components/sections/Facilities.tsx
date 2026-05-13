import { motion } from 'framer-motion';
import { sectionReveal, staggerContainer, staggerItem, VIEWPORT } from '../../lib/motion';
import { facilities } from '../../data/facilities';

export default function Facilities() {
  return (
    <section id="facilities" style={{ padding: '96px 40px', background: 'var(--color-canvas)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{ marginBottom: 64 }}
        >
          <span className="label-upper">Tidak setengah-setengah</span>
          <h2 className="section-title">Fasilitas Lengkap</h2>
          <p className="section-body">
            Equipment premium, ruang yang thoughtfully designed, setiap detail ada untuk performa terbaikmu.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="card-grid facilities-grid"
          style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
        >
          {facilities.map((f) => (
            <motion.div
              key={f.name}
              variants={staggerItem}
              style={{ background: 'var(--color-surface-card)', overflow: 'hidden' }}
            >
              <img
                src={f.photo}
                alt={f.name}
                style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }}
              />
              <div style={{ padding: '24px 24px 28px' }}>
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: 6,
                    letterSpacing: '0.3px',
                  }}
                >
                  {f.name}
                </div>
                <div style={{ fontSize: 13, fontWeight: 300, color: 'var(--color-body-text)', lineHeight: 1.65 }}>
                  {f.desc}
                </div>
                <div
                  style={{
                    display: 'inline-block',
                    marginTop: 14,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '1.8px',
                    textTransform: 'uppercase',
                    color: f.tagVariant === 'gold' ? '#c8a02a' : 'var(--color-muted)',
                  }}
                >
                  {f.tag}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Hours card */}
          <motion.div
            variants={staggerItem}
            style={{
              background: 'var(--color-surface-el)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 24px',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: 56,
                letterSpacing: 2,
                color: 'var(--color-forge)',
                lineHeight: 1,
              }}
            >
              5AM
            </div>
            <div
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: 28,
                letterSpacing: 2,
                color: '#fff',
              }}
            >
              — 11PM
            </div>
            <div
              style={{
                marginTop: 16,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 2,
                textTransform: 'uppercase',
                color: 'var(--color-muted)',
              }}
            >
              Setiap Hari · 365 Hari
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1200px) { .facilities-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px)  { .facilities-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
