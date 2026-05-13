import { motion } from 'framer-motion';
import { sectionReveal, VIEWPORT } from '../../lib/motion';

const branches = ['Forge SCBD','Forge Kemang','Forge BSD','Forge Surabaya West','Forge Bandung'];
const goals    = ['Weight Loss','Muscle Gain','General Fitness','Stress Relief','Sport-Specific Training'];

export default function BookingCTA() {
  return (
    <section
      id="booking"
      style={{ position: 'relative', padding: '96px 40px', overflow: 'hidden' }}
    >
      {/* Background photo */}
      <img
        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&q=80"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
      <div
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.82)' }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 1440,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 64,
          alignItems: 'center',
        }}
        className="booking-inner"
      >
        {/* Left copy */}
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          <span className="label-upper">Tidak ada alasan untuk menunda</span>
          <h2
            style={{
              fontFamily: 'var(--font-family-display)',
              fontSize: 'clamp(52px, 7vw, 88px)',
              letterSpacing: 2,
              textTransform: 'uppercase',
              color: '#fff',
              lineHeight: 0.92,
              margin: '16px 0 20px',
            }}
          >
            Mulai<br />Free Trial<br />
            <span style={{ color: 'var(--color-forge)' }}>7 Hari</span>
          </h2>
          <p
            style={{
              fontSize: 16,
              fontWeight: 300,
              color: 'var(--color-body-text)',
              lineHeight: 1.75,
            }}
          >
            Tanpa kartu kredit. Datang ke cabang terdekat dengan kode trial yang kami kirim ke
            WhatsApp-mu.
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{
            background: 'var(--color-surface-card)',
            padding: 48,
            borderTop: '3px solid var(--color-forge)',
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <div>
              <label style={labelStyle} htmlFor="f-nama">Nama Lengkap</label>
              <input style={inputStyle} type="text" id="f-nama" placeholder="Nama kamu" />
            </div>
            <div>
              <label style={labelStyle} htmlFor="f-wa">Nomor WhatsApp</label>
              <input style={inputStyle} type="tel" id="f-wa" placeholder="08xx xxxx xxxx" />
            </div>
          </div>

          <div style={{ marginTop: 16 }}>
            <label style={labelStyle} htmlFor="f-email">Email</label>
            <input style={inputStyle} type="email" id="f-email" placeholder="email@kamu.com" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
            <div>
              <label style={labelStyle} htmlFor="f-cabang">Cabang Preferensi</label>
              <select style={inputStyle} id="f-cabang">
                <option value="">Pilih cabang</option>
                {branches.map((b) => <option key={b}>{b}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle} htmlFor="f-goal">Goal Utama</label>
              <select style={inputStyle} id="f-goal">
                <option value="">Pilih goalmu</option>
                {goals.map((g) => <option key={g}>{g}</option>)}
              </select>
            </div>
          </div>

          <button
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', marginTop: 20, height: 52 }}
            type="submit"
          >
            Claim Trial Saya →
          </button>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .booking-inner { grid-template-columns: 1fr !important; } }
        @media (max-width: 640px) {
          section#booking { padding: 60px 20px !important; }
          .booking-inner > div:last-child { padding: 28px !important; }
          .booking-inner > div:last-child > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '1.8px',
  textTransform: 'uppercase',
  color: 'var(--color-muted)',
  marginBottom: 6,
  fontFamily: 'var(--font-family-body)',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  background: 'var(--color-surface-el)',
  border: '1px solid var(--color-hairline)',
  color: '#fff',
  fontFamily: 'var(--font-family-body)',
  fontSize: 15,
  fontWeight: 300,
  padding: '0 16px',
  height: 48,
  borderRadius: 0,
  appearance: 'none',
  WebkitAppearance: 'none',
  outline: 'none',
};
