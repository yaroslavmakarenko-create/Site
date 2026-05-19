# CLAUDE.md

Цей файл надає інструкції Claude Code (claude.ai/code) для роботи з кодом у цьому репозиторії.

## Проєкт

Односторінковий сайт-лендінг для ювелірної майстерні **SKARLAT** (Київ, Україна). Авторські прикраси з натуральними діамантами. Мова: українська.

## Структура

Весь сайт — один файл `index.html`. Немає фреймворків, бандлерів, пакет-менеджерів і систем збірки. Редагуй безпосередньо `index.html`.

Локальні зображення: `img-sun.jpg`, `img-snowflake.jpg`, `img-earrings.jpg`, `img-cross.jpg`, `img-founder.jpg`.

## CSS-архітектура

CSS вбудований у `<style>` в `<head>`. Дизайн-токени оголошені у `:root`:

```css
:root {
  --black, --dark, --card   /* фони: #080808, #111111, #161616 */
  --gold, --gold-light, --gold-dim  /* золоті акценти: #c9a84c */
  --border                  /* rgba(201,168,76,0.18) */
  --white                   /* #f0ece4 */
  --serif                   /* 'Cormorant Garamond' */
  --sans                    /* 'Inter' */
}
```

Адаптивність: брейкпоінти `@media (max-width: 900px)` та `@media (max-width: 600px)`.

## JS-архітектура

Весь JavaScript у `<script>` в кінці `<body>`, розбитий на 11 пронумерованих секцій:

1. **PRELOADER** — анімований логотип при завантаженні (2.6 с)
2. **SPLIT-TEXT HERO** — посимвольна анімація заголовку після preloader
3. **SCROLL PROGRESS BAR** — золота лінія прогресу вгорі сторінки
4. **FADE-UP INTERSECTION OBSERVER** — клас `.in` на елементах `.fade-up` при вході у viewport
5. **DIGIT COUNTERS** — плавна анімація числових статистик (easeOut)
6. **PARALLAX** — `requestAnimationFrame`-паралакс для `.hero-gem`, `.founder-mono`, `#ctaMono`
7. **MAGNETIC BUTTONS** — кнопки `.btn` притягуються до курсору (лише на десктопі)
8. **PARTICLE SYSTEM** — `<canvas id="hero-canvas">`: 60 золотих частинок, відштовхуються від миші
9. **LIQUID CURSOR TRAIL** — DOM-елементи `.cursor-dot` за курсором (лише десктоп, `width > 768px`)
10. **HORIZONTAL SCROLL (COLLECTIONS)** — drag/touch/wheel горизонтальний скрол + індикатор прогресу
11. **SMOOTH SCROLL** — плавна прокрутка для посилань `href^="#"` (тривалість 900 мс, `easeInOutCubic`)

## Контакти у коді

- Телефон: `+380 67 381 74 42`
- Instagram: `@skarlatalex`
- Telegram: `@SkarlatAlex`
- Засновник: Олександр Скарлат

Ці значення зустрічаються у кількох місцях — при зміні оновлюй всі входження.
