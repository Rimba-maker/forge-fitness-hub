export interface Plan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  popular?: boolean;
  ctaLabel: string;
  ctaVariant: 'primary' | 'ghost';
}

export const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: '550K',
    period: '/ bulan · 1 cabang',
    features: [
      'Akses gym + cardio area',
      'Group class fitness (HIIT, yoga)',
      'Modern locker & shower',
      'Buka 5AM–11PM',
    ],
    ctaLabel: 'Mulai Basic',
    ctaVariant: 'ghost',
  },
  {
    id: 'plus',
    name: 'Plus',
    price: '950K',
    period: '/ bulan · 3 cabang',
    features: [
      'Semua fitur Basic',
      'Combat studio access',
      'Yoga reformer access',
      'Free 1 PT session / bulan',
      'Freeze 30 hari / tahun gratis',
    ],
    popular: true,
    ctaLabel: 'Mulai Plus',
    ctaVariant: 'primary',
  },
  {
    id: 'gold',
    name: 'Gold',
    price: '1.5JT',
    period: '/ bulan · All cabang',
    features: [
      'Semua fitur Plus',
      'Sauna & steam room',
      '4 PT sessions / bulan',
      'Towel service & amenities',
      'Permanent locker',
    ],
    ctaLabel: 'Mulai Gold',
    ctaVariant: 'ghost',
  },
  {
    id: 'elite',
    name: 'Elite',
    price: '2.5JT',
    period: '/ bulan · All cabang',
    features: [
      'Semua fitur Gold',
      'Unlimited PT sessions',
      'Nutrition consultation',
      'Recovery (massage, cryo)',
      'Guest pass 2× / bulan',
    ],
    ctaLabel: 'Mulai Elite',
    ctaVariant: 'ghost',
  },
];
