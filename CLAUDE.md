# Event Configurator — Daos Event Lab

Одностраничный конфигуратор и калькулятор корпоративных ивентов. B2B-инструмент: клиент собирает пакет услуг, видит итоговую сумму и отправляет заявку.

**Production:** https://event-configurator-oleg-daos-hubs-projects.vercel.app

## Стек
Vanilla HTML/CSS/JS — никаких фреймворков, никакого build-шага. Открывается прямо в браузере. Шрифт — Roobert PRO (woff-файлы в `fonts/`).

## Структура файлов
- `index.html` — вёрстка (страница 1: конфигуратор, страница 2: checkout)
- `styles.css` — все стили; `@font-face` для Roobert PRO вверху
- `script.js` — все данные (константы), состояние (`S`), рендер и логика
- `fonts/` — RoobertPRO-Light/Regular/Medium/Bold.woff
- `images/` — фоновые изображения для левой панели
- `vercel.json` — cleanUrls, no trailing slash

## Источник данных
Эталон услуг и цен: `/Users/Oleg/Documents/Obsidian Vault/Projects/Daos/Event Offers/Build Your Event — DAOS Hub.md`. Данные в `script.js` должны ему соответствовать.

## Архитектура script.js

### Данные — 8 массивов констант
- `VENUE` — пространства (11 позиций); большинство `perHour: true`
- `CATERING` — 4 тира, `price: { 50: X, 100: Y }` (зависят от `guests`)
- `BEVERAGES` — 3 тира, аналогично
- `MEDIA` — медиапокрытие (5 позиций), photo/video/podcast почасовые
- `PROMO` — промо-услуги (3 позиции), фиксированная цена
- `BRANDING` — брендинг и развлечения (5 позиций), DJ `perHour: true`
- `PRINTED` — печатные материалы (5 позиций), фиксированная цена
- `OPS` — персонал (5 позиций); Event Manager и Coordinator `included: true` (всегда включены)

### Состояние — объект `S`
```js
{ guests, date, time, venue: {}, catering, beverages, media: {}, promo: {}, branding: {}, printed: {}, ops: {} }
```
- Multi-select perHour: `{ id: hours }` — value = кол-во часов
- Multi-select fixed: `{ id: true }`
- Single-select: строка id или null

### Ключевые функции
- `renderItemList(container, items, stateObj, section)` — рендер мультивыбора
- `renderCateringBev(containerId, items, selectedId, subId)` — single-select с ценами по guests
- `toggleItem(section, id)` — переключить выбор
- `changeHrs(section, id, delta)` — изменить часы без перерендера
- `calcTotal()` — суммировать всё выбранное
- `scrollToForm()` — скролл к форме заявки (кнопка "Leave a request")
- `submitEnquiry()` — отправка формы

## UX-поток

Одна страница (`#page-1`). Никакого page-2 нет.

1. Event details: дата + время (кастомный date/time picker) + кол-во гостей (50 / 100)
2. Venue Spaces — мультивыбор, почасовые позиции имеют stepper `−/+`
3. Catering — single-select, цены видны только после выбора guests
4. Beverages — single-select, аналогично
5. Media Coverage — мультивыбор
6. Event Promo Services — мультивыбор
7. Branding & Entertainment — мультивыбор
8. Printed Materials — мультивыбор
9. Operations & Hospitality — Event Manager + Coordinator always included
10. Total bar — sticky внизу, кнопка "Leave a request" → скролл к форме
11. `#enquiry-section` — форма в конце той же страницы: name, email, company, phone (с dial select), telegram, notes → submit → success screen

## CSS-компоненты
- `.item-card` + `.item-chk` — toggle-карточка мультивыбора
- `.hrs-row` + `.hrs-btn` — stepper часов внутри выбранной карточки
- `.pkg-card` — single-select карточка (catering/beverages)
- `.size-card` — выбор кол-ва гостей
- `#enquiry-section` — форма заявки в конце страницы (was page-2, теперь inline)
- `.split-layout` / `.split-left` / `.split-right` — двухколоночный лейаут (левая панель sticky)

## Принципы
- Не добавлять зависимости без явной просьбы
- Не усложнять — минимум кода для задачи
- Цены менять только в константах в начале script.js
- Деплой через Vercel (push в main = автодеплой)
