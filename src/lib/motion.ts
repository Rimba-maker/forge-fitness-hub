import type { Variants } from 'framer-motion';

/* ── Shared animation ease ─────────────────────────────────────────── */
export const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

/* ── Hero: bold energetic reveal ───────────────────────────────────── */
export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const heroWord: Variants = {
  hidden: { opacity: 0, y: 60, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.75, ease: EASE_EXPO },
  },
};

export const heroFade: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_EXPO } },
};

export const heroStat: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_EXPO, delay: i * 0.08 },
  }),
};

/* ── Section scroll reveal (reusable) ─────────────────────────────── */
export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE_EXPO },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: EASE_EXPO },
  },
};

/* ── Membership card ───────────────────────────────────────────────── */
export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_EXPO, delay: i * 0.1 },
  }),
};

/* ── FAQ accordion ─────────────────────────────────────────────────── */
export const faqAnswer: Variants = {
  closed: { height: 0, opacity: 0 },
  open: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.38, ease: EASE_EXPO },
  },
};

/* ── Transformation card ───────────────────────────────────────────── */
export const transformReveal: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE_EXPO },
  },
};

/* ── viewport config (shared) ──────────────────────────────────────── */
export const VIEWPORT = { once: true, amount: 0.15 } as const;
