import { motion } from 'framer-motion';
import { sectionReveal, staggerContainer, staggerItem, VIEWPORT } from '../../lib/motion';

const benefits = [
  'Full akses equipment & cardio zone',
  'Ikut group class apapun selama 7 hari',
  '1× sesi konsultasi personal trainer gratis',
  'Tanpa kartu kredit, tanpa komitmen',
];

export default function FreeTrial() {
  return (
    <section
      id="trial"
      style={{
        background: 'var(--color-surface-soft)',
        padding: '96px 40px',
        borderTop: '3px solid var(--color-forge)',
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'center',
        }}
        className="trial-inner"
      >
        {/* Left: Copy */}
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <span className="label-upper">Mulai tanpa risiko</span>
          <h2 className="section-title">7 Hari Gratis.<br />Tidak Ada Catch.</h2>
          <p className="section-body">
            Coba semua fasilitas, ikut group class, konsultasi PT — semua gratis selama 7 hari.
            Cocok untuk yang baru mau mulai atau pindah gym.
          </p>

          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            style={{
              listStyle: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              margin: '32px 0',
            }}
          >
            {benefits.map((b) => (
              <motion.li
                key={b}
                variants={staggerItem}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  fontSize: 15,
                  fontWeight: 400,
                  color: 'var(--color-body-str)',
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    background: 'var(--color-forge)',
                    flexShrink: 0,
                  }}
                />
                {b}
              </motion.li>
            ))}
          </motion.ul>

          <a href="#booking" className="btn btn-primary">Claim Free Trial</a>
        </motion.div>

        {/* Right: Photo */}
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{ position: 'relative' }}
        >
          <img
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
            alt="Gym trial beginner"
            style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 24,
              left: 24,
              background: 'var(--color-forge)',
              padding: '12px 24px',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-family-display)',
                fontSize: 32,
                color: '#fff',
                letterSpacing: 2,
                lineHeight: 1,
              }}
            >
              FREE<br />7 DAYS
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .trial-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
