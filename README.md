# MOLLEN Haute Literie — Luxury Bedding & Home Textiles (Amaliy Ish 11)

Ushbu loyiha **Mollen Client** Figma maketi asosida yaratilgan zamonaviy, to'liq responsive, yuqori estetikaga ega premium elektron tijorat veb-saytidir. Sayt 100% tabiiy ipak (Mulberry Silk 22 Momme) va Misr mako-satini (600 TC) asosidagi hashamatli yotoq to'plamlari, kapsulalar, ipak kimonolar hamda interyer aromatlarini taqdim etadi.

---

## 🌟 Jonli Ko'rish va Havolalar

- 📦 **GitHub Repozitoriy:** [https://github.com/soxibs48-eng/amaliy11](https://github.com/soxibs48-eng/amaliy11)
- 🚀 **Vercel Deploy:** [Deploy on Vercel](https://vercel.com/new/import?s=https%3A%2F%2Fgithub.com%2Fsoxibs48-eng%2Famaliy11)

---

## 🎨 Dizayn Tizimi va Tipografika

1. **Tipografika**:
   - **Cormorant Garamond** (Google Fonts) — Yuqori moda va hashamatli jurnallar (Vogue, Harper's Bazaar) uslubidagi sarlavhalar va iqtiboslar.
   - **Plus Jakarta Sans** (Google Fonts) — Toza, qulay o'qiladigan geometrik sans-serif matn va interfeys elementlari.

2. **Ranglar Palitrasi**:
   - `Alabaster Cream` (`#FBF9F5`, `#F4EFE6`) — Yengil, sokin ipak fon.
   - `Onyx Noir` (`#181816`, `#252522`) — Qat'iy kontrast, matnlar va hashamatli tugmalar.
   - `Champagne Gold` (`#C5A880`, `#DFCCA8`) — Nozik oltin urg'ular, hoshiyalar va tugmalar.
   - `Sage Mist` (`#7A8574`) va `Rose Quartz` (`#C89B7B`) — Tabiiy o'simlik va ipak ohanglari.

3. **Vektorli Grafika (Custom SVG)**:
   - `logo.svg` — Mollen gerbi va nafis serif logotipi.
   - `hero-cover.svg` — Tonggi quyosh nurlari ostidagi sokin arxitekturaviy yotoqxona interyeri va to'lqinsimon ipak ko'rpa.
   - `product-silk-set.svg` — 22 Momme Mulberry ipak to'plami.
   - `product-satin-onyx.svg` — 600 TC Misr mako-satini to'plami.
   - `product-capsule-flora.svg` — "Ertaklar" kapsula to'plami (botanik toile naqshi).
   - `product-silk-robe.svg` — Zangori ipak kimono va obi-kamar.
   - `product-silk-pillowcase.svg` — Qimmatbaho Rose Quartz ipak yostiq jildi va uyqu niqobi.
   - `product-candle.svg` — Amber va kashmir yog'ochli interyer shami.
   - `lookbook-1.svg` va `lookbook-2.svg` — Lukbuk va ipak tolalari makro-teksturasi.
   - `material-silk.svg` va `material-cotton.svg` — Ipak va paxta tolasining badiiy ko'rinishi.

---

## ⚡ Asosiy Funksional Imkoniyatlar

1. **Ko'p Valyutali Tizim (Multi-Currency)**:
   - ₽ RUB, $ USD va € EUR o'rtasida bir zumda real vaqtda konvertatsiya qilish.
   - Barcha narxlar, kartochkalar, modal va savatchadagi summalar avtomatik ravishda yangilanadi.

2. **Interaktiv Savatcha (Slide-Over Mini-Cart)**:
   - Jonli hisob-kitob (Subtotal, chegirmalar, yetkazib berish, Grand Total).
   - Bepul yetkazib berish progress-bari (15 000 ₽ dan yuqori xaridlar uchun).
   - Mahsulot sonini boshqarish (+ / -) va o'chirish.
   - `MOLLEN10` promo-kodi orqali 10% chegirma olish imkoniyati.
   - Brauzer xotirasida (`localStorage`) saqlanish.

3. **Mahsulotni Tezkor Ko'rish va Moslashtirish (Quick View & Customizer Modal)**:
   - O'lcham tanlash (1.5-спальный, Двуспальный, Евро Maxi, King Size).
   - Rang palitralarini tanlash (Champagne, Rose Quartz, Forest, Onyx).
   - Oltin ipak bilan ism/familiya monogrammasini qo'shish opsiyasi (+2 500 ₽).
   - Jonli narx kalkulyatori va savatchaga qo'shish.

4. **Kategoriyalar bo'yicha Saralash va Jonli Qidiruv**:
   - Toifalar: Barcha mahsulotlar, Mulberry ipak, Mako-satin, Kapsulalar, Kimono, Aksessuarlar.
   - Qidiruv modali orqali bir zumda matn bo'yicha filtrlash.

5. **Konsyerj Xizmati va Maxsus Buyurtma (Bespoke Atelier)**:
   - Nostandart o'lchamli to'shaklar uchun krovatga kiygiziladigan choyshab va individual buyurtma formasi.
   - Namunalar bilan xonadonga bepul taklif qilish xizmati.

6. **Toast Bildirishnomalar va Buyurtmani Rasmiylashtirish**:
   - Har bir amal uchun chiroyli animatsiyali bildirishnomalar.
   - Buyurtma rasmiylashtirilganda generatsiya qilinadigan buyurtma raqami (#MLN-2026-XXXX).

---

## 📁 Loyiha Strukturasi

```
amaliy11/
├── index.html                  # Semantik HTML5 strukturasi, SEO va Accessibility
├── css/
│   └── style.css               # Dizayn tizimi, animatsiyalar, responsivlik
├── js/
│   └── main.js                 # Savatcha, valyuta, modallar, mahsulotlar bazasi
├── assets/
│   └── images/                 # Barcha vektorli SVG rasmlar va ikonalar
│       ├── logo.svg
│       ├── hero-cover.svg
│       ├── product-silk-set.svg
│       ├── product-satin-onyx.svg
│       ├── product-capsule-flora.svg
│       ├── product-silk-robe.svg
│       ├── product-silk-pillowcase.svg
│       ├── product-candle.svg
│       ├── lookbook-1.svg
│       ├── lookbook-2.svg
│       ├── material-silk.svg
│       └── material-cotton.svg
├── vercel.json                 # Vercel konfiguratsiyasi
├── .gitignore                  # Git tomonidan e'tiborga olinmaydigan fayllar
├── .vscode/
│   └── settings.json           # Live Server sozlamalari
└── README.md                   # Loyiha hujjatlari
```

---

## 🚀 Ishga Tushirish (Local Run)

1. Repozitoriyni klonlang:
   ```bash
   git clone https://github.com/soxibs48-eng/amaliy11.git
   cd amaliy11
   ```
2. VS Code dasturida oching:
   ```bash
   code .
   ```
3. `Live Server` kengaytmasini ishga tushiring yoki `index.html` faylini to'g'ridan-to'g'ri istalgan brauzerda oching.
