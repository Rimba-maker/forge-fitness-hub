export interface Trainer {
  name: string;
  specialty: string;
  cert: string;
  price: string;
  photo: string;
}

export const trainers: Trainer[] = [
  {
    name: 'Coach Andre',
    specialty: 'Strength & Powerlifting',
    cert: 'NASM · 10+ years',
    price: 'Rp 450k / sesi',
    photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
  },
  {
    name: 'Coach Sasha',
    specialty: 'Weight Loss & Female Fitness',
    cert: 'ACE · NSCA',
    price: 'Rp 400k / sesi',
    photo: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80',
  },
  {
    name: 'Coach Reza',
    specialty: 'HIIT & Athletic Conditioning',
    cert: 'NSCA-CSCS',
    price: 'Rp 450k / sesi',
    photo: 'https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?w=400&q=80',
  },
  {
    name: 'Coach Maya',
    specialty: 'Yoga & Mobility',
    cert: 'RYT-500',
    price: 'Rp 350k / sesi',
    photo: 'https://images.unsplash.com/photo-1570691079236-4bca6c45d440?w=400&q=80',
  },
  {
    name: 'Coach Bram',
    specialty: 'Muay Thai & Boxing',
    cert: 'Pro Fighter · 8 yrs',
    price: 'Rp 500k / sesi',
    photo: 'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?w=400&q=80',
  },
  {
    name: 'Coach Lia',
    specialty: 'Pilates Reformer',
    cert: 'Polestar Certified',
    price: 'Rp 400k / sesi',
    photo: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80',
  },
  {
    name: 'Coach Daniel',
    specialty: 'Bodybuilding',
    cert: 'IFBB Pro',
    price: 'Rp 600k / sesi',
    photo: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80',
  },
  {
    name: 'Coach Nina',
    specialty: 'Pre / Postnatal Fitness',
    cert: 'Specialized Cert',
    price: 'Rp 400k / sesi',
    photo: 'https://images.unsplash.com/photo-1607962837359-5e7e89f86776?w=400&q=80',
  },
];
