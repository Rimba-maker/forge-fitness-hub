import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { sectionReveal, faqAnswer, VIEWPORT } from '../../lib/motion';
import { faqItems } from '../../data/locations';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      style={{
        padding: '96px 40px',
        background: 'var(--color-surface-soft)',
        borderTop: '1px solid var(--color-hairline)',
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: 64,
        }}
        className="faq-inner"
      >
        {/* Left sticky header */}
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{ position: 'sticky', top: 80, alignSelf: 'start' }}
          className="faq-left"
        >
          <span className="label-upper">Ada pertanyaan?</span>
          <h2 className="section-title">FAQ</h2>
          <p
            className="section-body"
            style={{ marginBottom: 32, marginTop: 4 }}
          >
            Tidak menemukan jawabannya? Chat langsung — team kami response dalam 5 menit.
          </p>
          <a href="https://wa.me/628001234567" className="btn btn-primary">
            Chat WhatsApp
          </a>
        </motion.div>

        {/* Accordion list */}
        <motion.div
          variants={sectionReveal}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
        >
          {faqItems.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                style={{ borderBottom: '1px solid var(--color-hairline)' }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    background: 'none',
                    border: 'none',
                    padding: '28px 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: 32,
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{
                      fontSize: 16,
                      fontWeight: 500,
                      color: '#fff',
                      lineHeight: 1.5,
                      fontFamily: 'var(--font-family-body)',
                    }}
                  >
                    {item.q}
                  </span>

                  {/* +/× icon */}
                  <span
                    aria-hidden="true"
                    style={{
                      width: 18,
                      height: 18,
                      flexShrink: 0,
                      position: 'relative',
                      display: 'block',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        width: 18,
                        height: 1,
                        background: '#fff',
                        top: '50%',
                        left: 0,
                        transform: 'translateY(-50%)',
                      }}
                    />
                    <motion.span
                      animate={{ scaleY: isOpen ? 0 : 1 }}
                      transition={{ duration: 0.25 }}
                      style={{
                        position: 'absolute',
                        width: 1,
                        height: 18,
                        background: '#fff',
                        left: '50%',
                        top: 0,
                        transform: 'translateX(-50%)',
                        transformOrigin: 'center',
                      }}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      variants={faqAnswer}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        style={{
                          fontSize: 15,
                          fontWeight: 300,
                          color: 'var(--color-body-text)',
                          lineHeight: 1.75,
                          paddingBottom: 28,
                        }}
                      >
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .faq-inner { grid-template-columns: 1fr !important; }
          .faq-left  { position: static !important; }
        }
        @media (max-width: 640px) {
          section#faq { padding: 60px 20px !important; }
        }
      `}</style>
    </section>
  );
}
