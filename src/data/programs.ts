export interface Program {
  id: string;
  title: string;
  items: string[];
  photo: string;
  photoAlt: string;
}

export const programs: Program[] = [
  {
    id: 'strength',
    title: 'Strength Training',
    items: ['Powerlifting basics & bodybuilding split', 'Compound movement focus', 'Free weight zone lengkap'],
    photo: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=80',
    photoAlt: 'Strength training',
  },
  {
    id: 'hiit',
    title: 'HIIT & Conditioning',
    items: ['Tabata, AMRAP, EMOM', 'Crossfit-style WOD', '45-min high intensity sessions'],
    photo: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=600&q=80',
    photoAlt: 'HIIT workout',
  },
  {
    id: 'yoga',
    title: 'Yoga & Mind-Body',
    items: ['Hatha, Vinyasa, Yin Yoga', 'Pilates mat & reformer', 'Mobility & recovery class'],
    photo: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80',
    photoAlt: 'Yoga class',
  },
  {
    id: 'cardio',
    title: 'Cardio & Endurance',
    items: ['Running club & cycling spin', 'Stairmaster challenge', 'Rowing & swimming (Kemang)'],
    photo: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=600&q=80',
    photoAlt: 'Cardio zone',
  },
  {
    id: 'combat',
    title: 'Combat Sport',
    items: ['Muay Thai & Boxing', 'Brazilian Jiu-Jitsu', 'Kickboxing'],
    photo: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80',
    photoAlt: 'Muay Thai combat',
  },
  {
    id: 'pt',
    title: 'Personal Training',
    items: ['1-on-1 dengan PT bersertifikat', 'Custom program sesuai goal', 'Nutrition consultation'],
    photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    photoAlt: 'Personal trainer',
  },
];
