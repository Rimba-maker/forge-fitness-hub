import { motion } from 'framer-motion';
import { sectionReveal, VIEWPORT } from '../../lib/motion';
import { schedule, days } from '../../data/classes';
import type { ClassType } from '../../data/classes';

const pillColors: Record<ClassType, { bg: string; color: string }> = {
  hiit:    { bg: 'rgba(255,85,0,0.18)',    color: 'var(--color-forge)' },
  yoga:    { bg: 'rgba(90,170,90,0.15)',   color: '#7dbd7d' },
  combat:  { bg: 'rgba(190,70,70,0.18)',   color: '#d98080' },
  default: { bg: 'var(--color-surface-el)', color: 'var(--color-body-str)' },
};

export default function Schedule() {
  return (
    <section
      id="schedule"
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
          <span className="label-upper">50+ class per minggu</span>
          <h2 className="section-title">Group Class<br />Schedule</h2>
          <p className="section-body">
            Semua included di membership. Pilih yang cocok, atau coba semuanya.
          </p>
        </motion.div>

        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{ overflowX: 'auto' }}
        >
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
              minWidth: 860,
            }}
          >
            <thead>
              <tr>
                <th style={thStyle('#FF5500')}>Waktu</th>
                {days.map((d) => <th key={d} style={thStyle('var(--color-muted)')}>{d}</th>)}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row) => (
                <tr key={row.time}>
                  <td style={{ ...tdStyle, fontWeight: 700, color: 'var(--color-body-str)', letterSpacing: '0.5px' }}>
                    {row.time}
                  </td>
                  {row.days.map((cell, i) => (
                    <td key={i} style={tdStyle}>
                      {cell ? (
                        <span
                          style={{
                            display: 'inline-block',
                            padding: '3px 9px',
                            fontSize: 12,
                            fontWeight: 500,
                            background: pillColors[cell.type].bg,
                            color: pillColors[cell.type].color,
                          }}
                        >
                          {cell.name}
                        </span>
                      ) : (
                        <span style={{ color: 'var(--color-muted)', fontSize: 13 }}>—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-end gap-4 mt-10">
          <a href="#booking" className="btn btn-ghost">Lihat Full Schedule</a>
          <a href="#booking" className="btn btn-primary">Book Class</a>
        </div>
      </div>
    </section>
  );
}

const thStyle = (color: string): React.CSSProperties => ({
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '1.8px',
  textTransform: 'uppercase',
  color,
  textAlign: 'left',
  padding: '16px 24px',
  borderBottom: '1px solid var(--color-hairline)',
});

const tdStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 400,
  color: 'var(--color-body-text)',
  padding: '14px 24px',
  borderBottom: '1px solid var(--color-hairline-str)',
};
