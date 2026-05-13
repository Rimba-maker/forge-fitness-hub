import { motion } from 'framer-motion';
import { sectionReveal, staggerContainer, staggerItem, VIEWPORT } from '../../lib/motion';
import { transformations } from '../../data/transformations';

export default function Transformations() {
  return (
    <section
      id="transformations"
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
          <span className="label-upper">Bukan janji — ini hasil nyata</span>
          <h2 className="section-title">Real Members,<br />Real Transformations</h2>
          <p className="section-body">Member dari berbagai latar belakang. Goal berbeda, hasil nyata.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="card-grid transforms-grid"
          style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}
        >
          {transformations.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              style={{
                background: 'var(--color-surface-card)',
                padding: 48,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 32,
                alignItems: 'start',
              }}
              className="transform-card"
            >
              {/* Before / After photos */}
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
                  {[
                    { src: t.photoBefore, label: 'Sebelum', isBefore: true },
                    { src: t.photoAfter,  label: 'Setelah', isBefore: false },
                  ].map(({ src, label, isBefore }) => (
                    <div key={label}>
                      <img
                        src={src}
                        alt={label}
                        style={{
                          width: '100%',
                          aspectRatio: '3/4',
                          objectFit: 'cover',
                          filter: isBefore ? 'grayscale(70%)' : 'none',
                          opacity: isBefore ? 0.65 : 1,
                        }}
                      />
                      <div
                        style={{
                          textAlign: 'center',
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: 2,
                          textTransform: 'uppercase',
                          padding: '6px 0',
                          color: isBefore ? 'var(--color-muted)' : 'var(--color-forge)',
                        }}
                      >
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Info */}
              <div style={{ paddingTop: 4 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-family-display)',
                    fontSize: 30,
                    letterSpacing: 1,
                    textTransform: 'uppercase',
                    color: '#fff',
                    marginBottom: 3,
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: 'var(--color-forge)',
                    marginBottom: 20,
                  }}
                >
                  {t.program}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-family-display)',
                    fontSize: 52,
                    letterSpacing: 1,
                    color: '#fff',
                    lineHeight: 1,
                    marginBottom: 2,
                  }}
                >
                  {t.result}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 300,
                    color: 'var(--color-muted)',
                    marginBottom: 20,
                  }}
                >
                  {t.resultLabel}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 300,
                    color: 'var(--color-body-text)',
                    lineHeight: 1.75,
                  }}
                >
                  {t.story}
                </p>
                <span
                  style={{
                    display: 'inline-block',
                    marginTop: 16,
                    padding: '3px 10px',
                    background: 'var(--color-surface-el)',
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: 'var(--color-body-str)',
                  }}
                >
                  {t.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .transforms-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px)  { .transform-card { grid-template-columns: 1fr !important; padding: 28px !important; } }
      `}</style>
    </section>
  );
}
