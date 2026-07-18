# Удам Бэхи Холбоо ТББ — Figma Design Scaffolding

Энэ баримт нь landing page-ийг Figma дээр 1:1 дахин бүтээхэд шаардлагатай бүх токен, grid, компонентын тодорхойлолтыг агуулна.

---

## 1. Frames (Хуудасны хэмжээ)

| Frame | Өргөн | Grid | Margin | Gutter |
|---|---|---|---|---|
| Desktop | 1440 px | 12 багана | 80 px | 24 px |
| Tablet | 768 px | 12 багана | 40 px | 24 px |
| Mobile | 375 px | 4 багана (12-ыг нугалсан) | 20 px | 16 px |

Container max-width: **1280 px** (Desktop дээр төвд байрлана).
Figma-д: Frame → Layout grid → *Columns, Count 12, Margin 80, Gutter 24, Stretch*.

---

## 2. Color Styles

| Нэр | Hex | Хэрэглээ |
|---|---|---|
| `bg/base` | `#FBFAFE` | Үндсэн дэвсгэр |
| `bg/surface` | `#FFFFFF` | Карт, stats хэсэг |
| `bg/lilac` | `#EFE9F9` | "Үйл ажиллагаа" хэсгийн дэвсгэр |
| `ink/900` | `#2A1440` | Гарчиг, "Онцлох" хэсгийн дэвсгэр |
| `ink/500` | `#5F5175` | Их бие текст (muted) |
| `brand/violet` | `#5B2D8E` | Градиентын эхлэл |
| `brand/magenta` | `#D6336C` | Eyebrow, focus ring, акцент |
| `brand/orange` | `#F0762B` | Градиентын төгсгөл |
| `brand/yellow` | `#F6C445` | Эндометриозын шар тууз, awareness band |
| `line/10` | `#2A1440 @ 10%` | Хайрцгийн хүрээ, хуваагч |

**Gradient style — `brand/gradient`:** Linear 100°, `#5B2D8E` → 52% `#D6336C` → `#F0762B`.

---

## 3. Text Styles

Фонтууд (хоёулаа кирилл дэмждэг, Google Fonts):
- **Unbounded** — display (гарчиг, тоо)
- **Golos Text** — body / UI

| Style | Font | Weight | Size / Line height | Tracking |
|---|---|---|---|---|
| `display/hero` | Unbounded | 700 | 74 / 82 (mobile 42/47) | -1% |
| `display/h2` | Unbounded | 600 | 42 / 47 (mobile 28/32) | -1% |
| `display/h3` | Unbounded | 600 | 20 / 26 | 0 |
| `display/stat` | Unbounded | 700 | 45 / 48 | 0 |
| `body/lead` | Golos Text | 400 | 19 / 30 | 0 |
| `body/base` | Golos Text | 400 | 17 / 28 | 0 |
| `body/small` | Golos Text | 400 | 15 / 22 | 0 |
| `ui/eyebrow` | Golos Text | 700 | 13 / 16, UPPERCASE | +14% |
| `ui/tag` | Golos Text | 700 | 12 / 15, UPPERCASE | +13% |
| `ui/button` | Golos Text | 600 | 16 / 20 | 0 |

---

## 4. Effects & Radii

| Токен | Утга |
|---|---|
| `radius/card` | 32 px |
| `radius/chip` | 16 px |
| `radius/pill` | 999 px (товч) |
| `shadow/card-hover` | 0 20 44 `#2A1440 @ 12%` |
| `shadow/chip` | 0 14 32 `#2A1440 @ 10%` |
| `shadow/btn` | 0 8 24 `#D6336C @ 28%` |
| `blur/nav` | Background blur 18 + fill `#FBFAFE @ 72%` |

---

## 5. Components (Auto Layout)

### `nav/bar`
- Height 76, sticky. Fill `#FBFAFE @ 72%` + Background blur 18, доод хүрээ `line/10` 1px.
- Auto layout horizontal, space-between: [лого 38×38 + нэр] · [4 линк, gap 26] · [btn/primary-sm].

### `btn/primary`
- Auto layout, padding 15×28, pill radius, fill `brand/gradient`, текст цагаан, сум icon 18.
- Hover variant: Y -2, shadow томорно, градиент баруун тийш шилжинэ (prototype: Smart animate 250ms Ease out).

### `btn/ghost`
- Ижил хэмжээс, fill none, inner stroke 2px `line/10`; hover — stroke `brand/violet`.

### `card/activity` (4 ш, span 3 col)
- Auto layout vertical, padding 32×26, gap 20, radius 32, fill `bg/surface`.
- Icon holder 52×52, radius 16, fill `brand/gradient`, дотор нь 26px цагаан stroke icon.

### `card/highlight` (span 4 col; feature хувилбар span 8)
- Fill `#FFFFFF @ 5%`, stroke `#FFFFFF @ 10%`, radius 32, padding 30×26.
- Бүтэц: tag (`ui/tag`, yellow) → h3 (цагаан) → text (`body/small`, `#F4EFFA @ 78%`) → meta.
- Variant `feature`: fill `brand/gradient`, stroke none.

### `chip/stat` (hero-гийн хөвөгч жижиг карт)
- Auto layout vertical, padding 12×16, radius 16, fill white, stroke `line/10`, shadow/chip.
- Том тоо `display/h3` хэмжээтэй Unbounded + доор нь `body/small` тайлбар.

### `stat/block`
- Тоо `display/stat` — fill-д `brand/gradient` (text fill), доор `body/small` muted тайлбар, max 24ch.

### `band/awareness`
- Fill `brand/yellow`, 3 багана: шар туузны icon (stroke 26, `ink/900 @ 90%`) · текст · `btn/dark` (fill `ink/900`, текст yellow).

---

## 6. Хуудасны бүтэц (section дараалал, 12-col дээрх байршил)

1. **Nav** — full width, sticky, blur.
2. **Hero** — контент col 1–7, visual col 8–12. Visual: morphing gradient blob (opacity 16%) + шар туузны SVG (stroke-draw анимаци) + 3 хөвөгч chip.
3. **Stats** — 4 блок, тус бүр span 3, дээр/доор 1px хуваагч, цагаан дэвсгэр.
4. **About** — гарчиг col 1–5, текст col 7–12 (асимметрик хос багана).
5. **Work** — lilac дэвсгэр, 4 карт × span 3.
6. **Highlights 2025** — `ink/900` бараан дэвсгэр; feature карт span 8 + 4 карт span 4 (masonry биш, энгийн grid).
7. **Awareness band** — шар, туузны бэлгэ тэмдэгтэй CTA.
8. **Footer** — brand col 1–4, 3 багана × span 3 (contact / цахим / нэгдэх), доор нь base мөр.

Mobile (375): бүх карт full-width, hero visual гарчгийн доор, nav линкүүд blur-тэй доош задардаг цэс болно.

---

## 7. Motion spec (prototype-д)

| Элемент | Анимаци | Хугацаа / Easing |
|---|---|---|
| Hero элементүүд | Fade + Y 26px, 90ms stagger | 700ms, cubic-bezier(.22,1,.36,1) |
| Шар тууз (SVG) | Stroke draw (dashoffset 1200 → 0) | 1.8s, delay 0.5s |
| Blob | Border-radius morph + 8° эргэлт | 14s, alternate infinite |
| Chips | Y ±10px float | 6s infinite, delay 0 / 1.6 / 3.1s |
| Тоо (stats) | 0 → утга count-up | 1.4s, ease-out cubic |
| Nav линк | Underline scaleX 0→1 | 250ms |
| Primary btn hover | Y -2 + gradient shift + сум X+4 | 250ms |
| Scroll reveal | Fade + Y 26px, section бүрт | 700ms |

Бүх анимаци `prefers-reduced-motion` үед унтарна.
