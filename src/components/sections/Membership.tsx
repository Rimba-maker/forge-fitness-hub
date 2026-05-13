import { motion } from 'framer-motion';
import { sectionReveal, cardReveal, VIEWPORT } from '../../lib/motion';
import { plans } from '../../data/membership';

export default function Membership() {
  return (
    <section id="membership" style={{ padding: '96px 40px', background: 'var(--color-canvas)' }}>
      <div style={{ maxWidth: 1440, margin: '0 auto' }}>
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{ marginBottom: 64 }}
        >
          <span className="label-upper">Bisa upgrade kapan saja</span>
          <h2 className="section-title">Pilih Paket<br />Membership</h2>
          <p className="section-body">
            Tidak ada hidden fee, tidak ada kontrak paksa. Annual hemat 25%.
          </p>
        </motion.div>

        <div
          className="card-grid membership-grid"
          style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              variants={cardReveal}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              style={{
                background: 'var(--color-surface-card)',
                padding: 40,
                borderTop: `3px solid ${plan.popular ? 'var(--color-forge)' : 'var(--color-hairline)'}`,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {plan.popular && (
                <span
                  style={{
                    alignSelf: 'flex-start',
                    background: 'var(--color-forge)',
                    padding: '3px 10px',
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: '1.8px',
                    textTransform: 'uppercase',
                    color: '#fff',
                    marginBottom: 20,
                  }}
                >
                  Paling Populer
                </span>
              )}

              <div
                style={{
                  fontFamily: 'var(--font-family-display)',
                  fontSize: 36,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  color: '#fff',
                  marginBottom: 4,
                }}
              >
                {plan.name}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-family-display)',
                  fontSize: 52,
                  letterSpacing: 1,
                  color: plan.popular ? 'var(--color-forge)' : '#fff',
                  lineHeight: 1,
                  marginBottom: 3,
                }}
              >
                {plan.price}
              </div>

              <div
                style={{
                  fontSize: 12,
                  fontWeight: 300,
                  color: 'var(--color-muted)',
                  letterSpacing: '0.5px',
                  marginBottom: 32,
                }}
              >
                {plan.period}
              </div>

              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  flex: 1,
                  marginBottom: 32,
                }}
              >
                {plan.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      fontSize: 14,
                      fontWeight: 300,
                      color: 'var(--color-body-text)',
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        background: 'var(--color-forge)',
                        flexShrink: 0,
                        marginTop: 8,
                      }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#booking"
                className={`btn btn-${plan.ctaVariant}`}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {plan.ctaLabel}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Annual deal note */}
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{
            marginTop: 20,
            padding: '20px 24px',
            background: 'var(--color-surface-card)',
            borderLeft: '3px solid var(--color-forge)',
            display: 'flex',
            alignItems: 'center',
            gap: 24,
            flexWrap: 'wrap',
          }}
        >
          <span className="label-upper" style={{ whiteSpace: 'nowrap' }}>Annual Deal</span>
          <p style={{ fontSize: 14, fontWeight: 300, color: 'var(--color-body-text)' }}>
            Bayar 9 bulan untuk 12 bulan. Hemat 25% langsung — tanpa kode promo, tanpa syarat tersembunyi.
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .membership-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px)  { .membership-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
