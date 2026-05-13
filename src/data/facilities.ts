export interface Facility {
  name: string;
  desc: string;
  tag: string;
  tagVariant?: 'default' | 'gold';
  photo: string;
}

export const facilities: Facility[] = [
  {
    name: 'Free Weight Zone',
    desc: 'Dumbbells 2–50kg, barbells, plates, racks. Semua yang dibutuhkan untuk strength training serius.',
    tag: 'Semua Tier',
    photo: 'https://images.unsplash.com/photo-1534438097545-a2c22c57f2ad?w=400&q=80',
  },
  {
    name: 'Strength Machines',
    desc: 'Hammer Strength dan Life Fitness premium line. 60+ unit cardio zone.',
    tag: 'Semua Tier',
    photo: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&q=80',
  },
  {
    name: 'Yoga & Pilates Studio',
    desc: 'Wooden floor, reformer pilates (cabang Kemang), ventilasi optimal.',
    tag: 'Plus ke atas',
    photo: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80',
  },
  {
    name: 'Combat Studio',
    desc: 'Ring boxing, heavy bag, mat BJJ. Studio dedicated untuk Muay Thai, Boxing, dan BJJ.',
    tag: 'Plus ke atas',
    photo: 'https://images.unsplash.com/photo-1547496502-affa22d38842?w=400&q=80',
  },
  {
    name: 'Sauna & Steam Room',
    desc: 'Infrared sauna dan steam room untuk pemulihan otot selepas workout.',
    tag: 'Gold ke atas',
    tagVariant: 'gold',
    photo: 'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=400&q=80',
  },
  {
    name: 'Locker & Shower Modern',
    desc: 'Towel service, hairdryer, dan amenities berkualitas hotel.',
    tag: 'Semua Tier',
    photo: 'https://images.unsplash.com/photo-1520877880798-5ee004e3f11e?w=400&q=80',
  },
  {
    name: 'Smoothie Bar & Café',
    desc: 'Protein shake, healthy snack, kopi specialty. Energi in, energi out.',
    tag: 'Semua Cabang',
    photo: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80',
  },
];
