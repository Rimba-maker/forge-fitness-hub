export type ClassType = 'hiit' | 'yoga' | 'combat' | 'default';

export interface ClassEntry {
  name: string;
  type: ClassType;
}

export interface ScheduleRow {
  time: string;
  days: (ClassEntry | null)[];
}

export const schedule: ScheduleRow[] = [
  {
    time: '06:00',
    days: [
      { name: 'HIIT', type: 'hiit' },
      { name: 'Yoga Flow', type: 'yoga' },
      { name: 'HIIT', type: 'hiit' },
      { name: 'Pilates', type: 'yoga' },
      { name: 'HIIT', type: 'hiit' },
      { name: 'Bootcamp', type: 'default' },
      { name: 'Yin Yoga', type: 'yoga' },
    ],
  },
  {
    time: '07:30',
    days: [
      { name: 'Spin', type: 'default' },
      { name: 'Strength', type: 'default' },
      { name: 'Spin', type: 'default' },
      { name: 'Strength', type: 'default' },
      { name: 'Spin', type: 'default' },
      { name: 'Strength', type: 'default' },
      { name: 'Spin', type: 'default' },
    ],
  },
  {
    time: '12:00',
    days: [
      { name: 'Pilates', type: 'yoga' },
      { name: 'HIIT', type: 'hiit' },
      { name: 'Yoga', type: 'yoga' },
      { name: 'HIIT', type: 'hiit' },
      { name: 'Pilates', type: 'yoga' },
      { name: 'Open Gym', type: 'default' },
      { name: 'Mobility', type: 'default' },
    ],
  },
  {
    time: '18:00',
    days: [
      { name: 'Muay Thai', type: 'combat' },
      { name: 'BJJ', type: 'combat' },
      { name: 'Muay Thai', type: 'combat' },
      { name: 'BJJ', type: 'combat' },
      { name: 'Boxing', type: 'combat' },
      { name: 'BJJ Open', type: 'combat' },
      null,
    ],
  },
  {
    time: '19:30',
    days: [
      { name: 'Bootcamp', type: 'default' },
      { name: 'Pilates', type: 'yoga' },
      { name: 'Bootcamp', type: 'default' },
      { name: 'Pilates', type: 'yoga' },
      { name: 'Vinyasa', type: 'yoga' },
      { name: 'Vinyasa', type: 'yoga' },
      null,
    ],
  },
  {
    time: '20:30',
    days: [
      { name: 'Yoga Flow', type: 'yoga' },
      { name: 'Strength', type: 'default' },
      { name: 'Yoga Flow', type: 'yoga' },
      { name: 'Strength', type: 'default' },
      null,
      null,
      null,
    ],
  },
];

export const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];
