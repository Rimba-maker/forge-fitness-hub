export interface Location {
  id: string;
  name: string;
  size: string;
  features: string[];
  hours: string;
  flagship?: boolean;
}

export const locations: Location[] = [
  {
    id: 'scbd',
    name: 'Forge SCBD',
    size: '3.000 m² · 3 Floor',
    features: ['Full facility', 'Yoga, combat, pool', 'Basement parking'],
    hours: '5AM – 11PM',
    flagship: true,
  },
  {
    id: 'kemang',
    name: 'Forge Kemang',
    size: '1.800 m² · 2 Floor',
    features: ['Pool & reformer pilates', 'Sauna premium', 'Women-only zone'],
    hours: '5AM – 11PM',
  },
  {
    id: 'bsd',
    name: 'Forge BSD',
    size: '1.500 m²',
    features: ['Combat studio', 'Sauna & steam', 'Free parking'],
    hours: '5AM – 11PM',
  },
  {
    id: 'surabaya',
    name: 'Forge Surabaya',
    size: '2.000 m²',
    features: ['Full facility', 'Sauna & recovery', 'Valet parking'],
    hours: '5AM – 11PM',
  },
  {
    id: 'bandung',
    name: 'Forge Bandung',
    size: '1.500 m²',
    features: ['Outdoor terrace', 'Mountain view', 'Free parking'],
    hours: '5AM – 11PM',
  },
];

export const faqItems = [
  {
    q: 'Saya beginner, takut intimidated. Cocok ga?',
    a: 'Sangat cocok. Tim PT kami terlatih khusus untuk beginner. Free trial 7 hari dilengkapi dengan PT consultation gratis — jadi kamu mulai dengan guidance yang tepat, bukan langsung sendirian di gym.',
  },
  {
    q: 'Apakah ada lock-in contract?',
    a: 'Membership bulanan: tidak ada kontrak, bisa cancel kapan saja. Annual: 12 bulan commitment dengan harga 9 bulan (hemat 25%). Tidak ada hidden fee atau biaya cancellation.',
  },
  {
    q: 'Bisa freeze membership?',
    a: 'Bisa. Plus ke atas: max 30 hari/tahun gratis. Basic: berbayar Rp 100k untuk freeze. Proses mudah via app atau langsung ke reception cabang manapun.',
  },
  {
    q: 'Bisa join class kalau tidak member?',
    a: 'Bisa. Day pass Rp 150k untuk akses gym seharian, atau class drop-in Rp 175k untuk satu group class. Tidak perlu daftar membership dulu.',
  },
  {
    q: 'Apakah ada women-only zone?',
    a: 'Ada di cabang Kemang. Semua cabang wheelchair-accessible, dan kami punya PT terlatih untuk berbagai kebutuhan spesifik termasuk pre/postnatal dan rehabilitation.',
  },
  {
    q: 'Apakah ada parkir?',
    a: 'Semua cabang ada parking. SCBD: basement. Kemang: ground parking. BSD & Bandung: free parking. Surabaya: valet parking tersedia.',
  },
  {
    q: 'Apa yang beda Forge dari gym biasa?',
    a: 'Forge bukan sekadar gym — ini fitness hub. 50+ group class per minggu, 30+ PT bersertifikat, combat studio, yoga & pilates studio, sauna, smoothie bar, dan komunitas aktif. Semuanya di satu tempat, satu membership.',
  },
];
