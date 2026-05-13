export interface Transformation {
  name: string;
  program: string;
  result: string;
  resultLabel: string;
  story: string;
  duration: string;
  photoBefore: string;
  photoAfter: string;
}

export const transformations: Transformation[] = [
  {
    name: 'Reza, 32',
    program: 'Weight Loss Journey · PT 3×/week',
    result: '−27 kg',
    resultLabel: 'dalam 8 bulan',
    story: 'Dari 105kg ke 78kg. Office worker yang dulu sedentary, sekarang lifting 1.5× body weight. Program: PT 3×/week + HIIT class + nutrition plan.',
    duration: '8 Bulan',
    photoBefore: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&q=80',
    photoAfter: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=300&q=80',
  },
  {
    name: 'Sari, 28',
    program: 'Strength Building · Powerlifting Group',
    result: 'Squat 100kg',
    resultLabel: 'dari nol dalam 1 tahun',
    story: 'Beginner yang belum pernah angkat beban, sekarang squat 100kg dan deadlift 120kg. Program: Powerlifting group + PT bi-weekly.',
    duration: '1 Tahun',
    photoBefore: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=300&q=80',
    photoAfter: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=300&q=80',
  },
  {
    name: 'Bayu, 45',
    program: 'Health Reversal · Cardio + Nutrition',
    result: '−18 kg',
    resultLabel: 'gula & kolesterol normal',
    story: 'Pre-diabetes, kolesterol tinggi. 6 bulan kemudian semua health metrics normal. Program: Cardio + strength + nutrition consultation.',
    duration: '6 Bulan',
    photoBefore: 'https://images.unsplash.com/photo-1542466500-f7e87878de8f?w=300&q=80',
    photoAfter: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=300&q=80',
  },
  {
    name: 'Mira, 35',
    program: 'Postpartum Recovery · Pilates + PT',
    result: 'Stronger',
    resultLabel: 'dari sebelum hamil',
    story: 'Postpartum 6 bulan, kehilangan kepercayaan diri. 5 bulan kemudian: recovered dan lebih kuat dari sebelum hamil.',
    duration: '5 Bulan',
    photoBefore: 'https://images.unsplash.com/photo-1518644961665-ed172691aaa1?w=300&q=80',
    photoAfter: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=300&q=80',
  },
];
