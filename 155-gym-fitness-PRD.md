# PRD: Forge Fitness Hub — Gym & Fitness Center

## 1. Brand Identity

**Nama Brand:** Forge Fitness Hub
**Alasan Naming:** "Forge" = menempa (logam panas dibentuk jadi kuat) — metafora powerful untuk transformasi tubuh & mental. "Hub" memberi positioning bukan sekadar gym, tapi komunitas. Edgy, masculine-leaning tapi tetap inklusif, international-friendly.

**Tagline:** *"Forge Your Strongest Self."*

**Target Audience:**
- Profesional muda usia 22-40 (urban worker, butuh balance)
- Weight loss seekers (paket personal training)
- Strength training enthusiast (powerlifting, bodybuilding)
- Fitness beginner (intimidated by typical gym)
- Athlete & sport-specific (Crossfit, HIIT, calisthenics)
- Group class lovers (yoga, pilates, dance)

**Brand Voice:**
- Tone: Energetic, motivating, inclusive (not bro-culture), goal-oriented
- Style copywriting: Action verbs, results-focused, supportive
- Avoid: Body-shaming, fear-based marketing, exclusive bro-talk

---

## 2. Tech Stack

- **Framework:** Astro 5 (SSG)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animation:** Framer Motion via React islands (dynamic, energetic)
- **Deploy:** Netlify (static)
- **Images:** Unsplash + Pexels (diverse, dynamic fitness imagery)

---

## 3. Section Breakdown

| # | Section | Type | Tujuan |
|---|---------|------|--------|
| 1 | Navbar | `.astro` static | Logo bold, nav, CTA "Trial Class" |
| 2 | Hero | React island `client:load` | Dynamic shot + bold statement |
| 3 | Free Trial CTA | React island `client:visible` | First class free signup |
| 4 | Programs | React island `client:visible` | Strength, HIIT, Yoga, PT, etc |
| 5 | Group Classes | React island `client:visible` | Schedule grid + class types |
| 6 | Facilities | React island `client:visible` | Equipment, area, locker, sauna |
| 7 | Personal Trainers | React island `client:visible` | Tim PT dengan specialty |
| 8 | Membership Plans | React island `client:visible` | 4 tier pricing |
| 9 | Transformation Stories | React island `client:visible` | Before/after member |
| 10 | Locations | `.astro` static | Cabang map + facility per branch |
| 11 | FAQ | React island `client:visible` | FAQ membership & beginner |
| 12 | Booking CTA | React island `client:idle` | Form free trial |
| 13 | Footer | `.astro` static | Kontak, sosmed, app download |

---

## 4. Copywriting (Bahasa Indonesia)

### Navbar
- Menu: Programs • Schedule • Trainers • Membership • Lokasi
- CTA: **Free Trial Class**

### Hero
- **Headline:** Mulai. Kuat. Konsisten.
- **Subheadline:** Gym & fitness hub dengan equipment lengkap, group class harian, dan personal trainer bersertifikat. Untuk siapa pun yang serius mau berubah.
- **CTA Primary:** Coba Gratis 7 Hari
- **CTA Secondary:** Lihat Program

Stat bar: "8.000+ Active Members • 50+ Group Classes/Week • 30+ Certified Trainers • Open 5AM - 11PM"

### Free Trial CTA
- **Heading:** 7 Hari Gratis. Tidak Ada Catch.
- **Body:** Coba semua fasilitas, ikut group class, konsultasi PT — semua gratis selama 7 hari. Cocok untuk yang baru mau mulai atau pindah gym.
- 3 quick benefits:
  - ✅ Full akses equipment
  - ✅ Ikut group class apapun
  - ✅ 1x sesi konsultasi PT gratis
- **CTA:** Claim Free Trial

### Programs
- **Heading:** Program Untuk Setiap Goal
- **Subheading:** Pilih sesuai goal — atau combine. Konsultasi gratis untuk tentukan yang cocok.

Grid 6 program cards:

**💪 Strength Training**
- Powerlifting basics
- Bodybuilding split
- Compound movement focus
- Free weight zone lengkap

**🔥 HIIT & Conditioning**
- Tabata, AMRAP, EMOM
- Crossfit-style WOD
- Cardio interval training
- 45-min high intensity

**🧘 Yoga & Mind-Body**
- Hatha, Vinyasa, Yin
- Pilates mat & reformer
- Meditation class
- Mobility & recovery

**🏃 Cardio & Endurance**
- Running club outdoor
- Cycling spin class
- Stairmaster challenge
- Rowing & swimming (cabang Kemang)

**🥊 Combat Sport**
- Muay Thai
- Brazilian Jiu-Jitsu
- Boxing
- Kickboxing

**🎯 Personal Training**
- 1-on-1 dengan PT bersertifikat
- Custom program (weight loss, gain, athletic)
- Nutrition consultation
- Progress tracking

### Group Classes
- **Heading:** Group Class Schedule
- **Subheading:** 50+ class per minggu, semua included di membership.

Schedule table (mock weekly schedule):

| Waktu | Senin | Selasa | Rabu | Kamis | Jumat | Sabtu | Minggu |
|-------|-------|--------|------|-------|-------|-------|--------|
| 06:00 | HIIT | Yoga Flow | HIIT | Pilates | HIIT | Bootcamp | Yin Yoga |
| 07:30 | Spin | Strength | Spin | Strength | Spin | Strength | Spin |
| 12:00 | Pilates | HIIT | Yoga | HIIT | Pilates | Open Gym | Mobility |
| 18:00 | Muay Thai | BJJ | Muay Thai | BJJ | Boxing | BJJ Open | - |
| 19:30 | Bootcamp | Pilates | Bootcamp | Pilates | Vinyasa | Vinyasa | - |
| 20:30 | Yoga Flow | Strength | Yoga Flow | Strength | - | - | - |

CTA: **Lihat Full Schedule** / **Book Class**

### Facilities
- **Heading:** Fasilitas Lengkap, Tidak Setengah-Setengah
- 8 facility cards:
  - 🏋️ **Free Weight Zone** — Dumbbells 2-50kg, barbells, plates, racks
  - 💪 **Strength Machines** — Hammer Strength, Life Fitness premium line
  - 🏃 **Cardio Zone** — Treadmill, bike, rower, stairmaster (60+ unit)
  - 🥊 **Combat Studio** — Ring boxing, heavy bag, mat BJJ
  - 🧘 **Yoga & Pilates Studio** — Wooden floor, reformer (cabang Kemang)
  - 💧 **Sauna & Steam** — Recovery selepas workout (tier Gold ke atas)
  - 🚿 **Modern Locker & Shower** — Towel service, hairdryer, amenities
  - 🥗 **Smoothie Bar & Cafe** — Protein shake, healthy snack, kopi

### Personal Trainers
- **Heading:** Tim Personal Trainer
- **Subheading:** Bersertifikat internasional, berpengalaman, dan sesuai untuk goal-mu.

Grid 8 PT cards:
- **Coach Andre** — Strength & Powerlifting (NASM, 10+ yrs)
- **Coach Sasha** — Weight Loss & Female Fitness (ACE, NSCA)
- **Coach Reza** — HIIT & Athletic Conditioning (NSCA-CSCS)
- **Coach Maya** — Yoga & Mobility (RYT-500)
- **Coach Bram** — Muay Thai & Boxing (Pro fighter)
- **Coach Lia** — Pilates Reformer (Polestar certified)
- **Coach Daniel** — Bodybuilding (IFBB Pro)
- **Coach Nina** — Pre/Postnatal Fitness (specialized cert)

Per card: foto, name, specialty, certifications, pricing PT session (Rp 350k - 600k / sesi)

### Membership Plans
- **Heading:** Pilih Paket Membership
- **Subheading:** Bisa upgrade kapan saja. Annual hemat 25%.

4 tier cards:

**🟦 Basic — Rp 550k / bulan**
- Akses gym + cardio area
- Group class fitness (HIIT, yoga)
- 1 cabang
- Buka 5AM - 11PM

**🟩 Plus — Rp 950k / bulan** ⭐ Most Popular
- Semua Basic +
- Combat studio access
- Yoga reformer access
- 3 cabang
- Free 1 PT session/bulan

**🟨 Gold — Rp 1.5 jt / bulan**
- Semua Plus +
- All cabang access
- Sauna & steam
- 4 PT sessions/bulan
- Towel & amenities

**💎 Elite — Rp 2.5 jt / bulan**
- Semua Gold +
- Unlimited PT sessions
- Nutrition consultation
- Recovery program (massage, cryo)
- Guest pass 2x/bulan

Annual membership: Discount 25% (bayar 12 bulan untuk 9 bulan)

Pay-as-you-go:
- Day pass: Rp 150k
- Group class drop-in: Rp 175k
- PT session standalone: Rp 350k - 600k

### Transformation Stories
- **Heading:** Real Members, Real Transformations
- 4-5 transformation cards dengan before/after:

**Reza, 32 — Weight Loss Journey**
- Before: 105kg, sedentary office worker
- After 8 bulan: 78kg, lifting 1.5x body weight
- Program: PT 3x/week + HIIT class + nutrition plan

**Sari, 28 — Strength Building**
- Before: Beginner, never lifted weights
- After 1 tahun: Squat 100kg, deadlift 120kg
- Program: Powerlifting group + PT bi-weekly

**Bayu, 45 — Health Reversal**
- Before: Pre-diabetes, high cholesterol
- After 6 bulan: Health metrics normal, lost 18kg
- Program: Cardio + strength + nutrition consultation

**Mira, 35 — Postpartum Recovery**
- Before: Postpartum 6 bulan, lost confidence
- After 5 bulan: Recovered + stronger than pre-pregnancy
- Program: Pre/postnatal PT + pilates + yoga

### Locations
- **Heading:** 5 Cabang Strategis
- 5 cabang dengan facility highlight:

**🏢 Forge SCBD** (Flagship)
- 3.000 m², 3 floor
- Full facility (yoga, combat, pool)
- Buka 5AM - 11PM

**🏢 Forge Kemang**
- 1.800 m², 2 floor
- Pool, reformer, sauna
- Buka 5AM - 11PM

**🏢 Forge BSD**
- 1.500 m²
- Combat studio, sauna
- Buka 5AM - 11PM

**🏢 Forge Surabaya West**
- 2.000 m²
- Full facility
- Buka 5AM - 11PM

**🏢 Forge Bandung**
- 1.500 m²
- Outdoor terrace
- Buka 5AM - 11PM

Map embed + branch detail.

### FAQ
- **Heading:** FAQ
Accordion:
1. Saya beginner, takut intimidated. Cocok ga? → Sangat cocok! Tim PT kami terlatih untuk beginner. Free trial 7 hari dengan PT consultation.
2. Apakah ada lock-in contract? → Bulanan no contract. Annual: lock 12 bulan tapi hemat 25%.
3. Bisa freeze membership? → Bisa, max 30 hari/tahun (Plus ke atas), gratis. Basic: berbayar Rp 100k.
4. Apakah ada locker permanent? → Day-use untuk Basic & Plus. Permanent locker untuk Gold & Elite.
5. Bisa join class kalau tidak member? → Bisa pakai day pass Rp 150k atau class drop-in Rp 175k.
6. Apakah ada parkir? → Semua cabang ada parking. SCBD basement, Kemang ground.
7. Saya minoritas (hijab, kursi roda, dll), inklusif ga? → Sangat! Kami ada women-only zone (cabang Kemang), wheelchair-accessible, dan PT yang sesuai.

### Booking CTA
- **Heading:** Mulai Free Trial 7 Hari
- **Body:** No credit card needed. Datang ke cabang terdekat dengan kode trial yang kami kirim ke WA.
- Form: Nama, WhatsApp, Email, Cabang Preferensi, Goal (dropdown: Weight loss, Muscle gain, General fitness, Stress relief, Sport-specific)
- **CTA:** Claim Trial Saya

### Footer
- Tagline: *"Built by those who refuse average."*
- Cabang: 5 lokasi (Jakarta, Surabaya, Bandung)
- App download: iOS & Android (booking class, progress tracking)
- Sosmed: IG (@forge.fitness), TikTok (workout tips), YouTube (full workout)
- Community: Run club Sabtu pagi, monthly fitness challenge

---

## 5. Image References

| Section | Source | URL / Search Term | Alt Text | Dimensi |
|---------|--------|-------------------|----------|---------|
| Hero | Unsplash | https://unsplash.com/s/photos/gym-workout-dynamic | "Workout dynamic gym" | 1920x1080 |
| Hero alt | Pexels | https://www.pexels.com/search/fitness%20training%20strong/ | "Training strong" | 1920x1080 |
| Free Trial | Unsplash | https://unsplash.com/s/photos/gym-trial-beginner | "Beginner gym trial" | 1200x800 |
| Program - Strength | Unsplash | https://unsplash.com/s/photos/strength-training-barbell | "Strength training" | 800x600 |
| Program - HIIT | Pexels | https://www.pexels.com/search/HIIT%20workout%20intense/ | "HIIT workout" | 800x600 |
| Program - Yoga | Unsplash | https://unsplash.com/s/photos/yoga-studio-class | "Yoga class" | 800x600 |
| Program - Cardio | Pexels | https://www.pexels.com/search/cardio%20gym%20running/ | "Cardio zone" | 800x600 |
| Program - Combat | Unsplash | https://unsplash.com/s/photos/muay-thai-boxing | "Muay Thai combat" | 800x600 |
| Program - PT | Pexels | https://www.pexels.com/search/personal%20trainer%20gym/ | "Personal trainer" | 800x600 |
| Group Class - Studio | Unsplash | https://unsplash.com/s/photos/group-fitness-class | "Group class studio" | 1200x800 |
| Facility - Free Weight | Unsplash | https://unsplash.com/s/photos/dumbbells-rack-gym | "Free weight zone" | 800x600 |
| Facility - Strength Machine | Pexels | https://www.pexels.com/search/gym%20strength%20machine/ | "Strength machines" | 800x600 |
| Facility - Cardio | Unsplash | https://unsplash.com/s/photos/treadmill-row-gym | "Cardio zone" | 800x600 |
| Facility - Combat | Pexels | https://www.pexels.com/search/boxing%20ring%20gym/ | "Combat studio ring" | 800x600 |
| Facility - Yoga | Unsplash | https://unsplash.com/s/photos/yoga-studio-wooden-floor | "Yoga studio" | 800x600 |
| Facility - Sauna | Pexels | https://www.pexels.com/search/gym%20sauna%20wooden/ | "Sauna recovery" | 800x600 |
| Facility - Locker | Unsplash | https://unsplash.com/s/photos/gym-locker-room-modern | "Modern locker room" | 800x600 |
| Facility - Smoothie Bar | Pexels | https://www.pexels.com/search/smoothie%20bar%20gym/ | "Smoothie bar" | 800x600 |
| Trainer portraits | Pexels | https://www.pexels.com/search/asian%20fitness%20trainer/ | "Personal trainer portrait" | 600x800 |
| Transformation - Weight loss | Unsplash | https://unsplash.com/s/photos/fitness-transformation-before-after | "Weight loss journey" | 1200x800 |
| Transformation - Strength | Pexels | https://www.pexels.com/search/strong%20woman%20deadlift/ | "Strength transformation" | 1200x800 |
| Transformation - Postpartum | Unsplash | https://unsplash.com/s/photos/postpartum-fitness-mom | "Postpartum recovery" | 1200x800 |
| Locations exterior | Pexels | https://www.pexels.com/search/modern%20gym%20building/ | "Gym branch" | 1200x800 |

---

## 6. Animation Spec (Framer Motion)

**Note:** Energetic brand — animasi bisa lebih dynamic & punchy. Tapi tetap purposeful, jangan over-animate.

### Hero (React island, `client:load`)
```tsx
// Hero: bold reveal with energy
const energeticReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.12 }
  }
}

// Headline: punchy entry per word
const punchyWord = {
  hidden: { opacity: 0, y: 50, rotateX: -20 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 150 } }
}

// Stats counter: animate 0 → target
// "8.000+ Active Members" pakai useMotionValue + animate()
```

### Free Trial CTA (React island, `client:visible`)
- Card scale-in dramatic
- Benefits list: stagger reveal dengan checkmark draw
- CTA button: subtle pulse + slight wiggle untuk attention

### Programs Grid (React island, `client:visible`)
- 6 cards reveal stagger
- Hover: card lift `y: -10`, image scale, overlay slide-up
- Card image: dynamic angle (slightly tilted 2-3deg untuk energetic feel)

### Group Class Schedule (React island, `client:visible`)
- Schedule table fade-in
- Hover row: highlight class
- Click cell: open class detail modal
- "Now happening" badge pulse (if applicable)

### Facilities (React island, `client:visible`)
- 8 cards reveal stagger
- Icon: scale pop with slight rotate
- Hover: card lift + icon glow

### Personal Trainers (React island, `client:visible`)
- 8 trainer cards stagger reveal
- Hover: image color → vivid + specialty tags reveal
- Certification badges stagger

### Membership Plans (React island, `client:visible`)
- 4 cards reveal stagger
- "Most Popular" emphasized + glow border animated
- Hover: card lift + checkmark items pulse
- Annual toggle: smooth price update

### Transformation Stories (React island, `client:visible`)
- Cards reveal with parallax
- Before/after slider draggable
- Stats reveal counter animation
- "Real member" badge emphasis

### Locations (`.astro` + small island)
- Branch cards reveal stagger
- Map pin drop-in animation
- Hover branch: tooltip with detail

### FAQ Accordion (React island, `client:visible`)
- Height animation via `layout`
- Chevron rotate
- Highlight on hover

### Booking Form
- Multi-step with progress bar
- Form field: focus accent
- Goal dropdown: animated chip selection
- Submit: button morph + success animation

### Scroll Reveal Pattern (reusable)
```tsx
const dynamicFade = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  }
}
```

### Cursor Effect (optional, desktop)
- Custom cursor: bold expanding circle on hover atas program/PT cards

### Hydration Strategy
- `client:load` → Hero
- `client:visible` → Trial, Programs, Schedule, Facilities, Trainers, Plans, Transformations, FAQ
- `client:idle` → Booking form
- Sisanya: static

---

## 7. SEO Meta

- **Title:** Forge Fitness Hub — Premium Gym & Fitness Center Jakarta, Surabaya
- **Description:** Gym & fitness hub dengan 50+ group class/minggu, 30+ personal trainer bersertifikat, sauna, combat studio. 5 cabang. Coba gratis 7 hari.
- **Keywords:** gym jakarta, fitness center, personal trainer jakarta, group class fitness, gym SCBD, muay thai jakarta, yoga reformer jakarta, gym kemang
- **OG Image:** Dynamic workout shot dengan logo (1200x630)
- **Schema:** `SportsActivityLocation` + `HealthClub` + `Service` schema
