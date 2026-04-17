// ─── Data ─────────────────────────────────────────────────────────────────────

const VENUE = [
  { id: 'event-hall',     name: 'Event hall',                         desc: '100 people · stunning Palm views and bar atmosphere',    price: 3000, perHour: true  },
  { id: 'stage-av',       name: 'Main Stage & AV Setup',              desc: 'LED screen, professional sound, stage lighting',         price: 0,    perHour: false, included: true },
  { id: 'networking',     name: 'Networking area',                    desc: '70 people · stylish lounge and bar setting',             price: 2000, perHour: true  },
  { id: 'conference',     name: 'Conference Room',                    desc: 'Up to 30 people · boardroom style',                     price: 1500, perHour: true  },
];

const VENUE_ROOMS = [
  { id: 'room-dune',      name: 'Meeting room Dune',                  desc: '20 people · workshops and focused discussions',          price: 300,  perHour: true  },
  { id: 'room-matrix',    name: 'Meeting room Matrix',                desc: '6 people · panoramic windows, skyline views',            price: 200,  perHour: true  },
  { id: 'room-herous',    name: 'Meeting room Herous',                desc: '6 people · private space for strategic discussions',     price: 200,  perHour: true  },
  { id: 'room-consensus', name: 'Meeting room Consensus',             desc: '6 people · floor-to-ceiling windows, Dubai skyline',    price: 200,  perHour: true  },
  { id: 'room-dao',       name: 'Meeting room Dao',                   desc: '4 people · intimate space for quick meetings',          price: 150,  perHour: true  },
];

const CATERING = [
  { id: 'basic',     name: 'Basic Sharing Platters', desc: 'Light, elegant bites · relaxed networking atmosphere',           perPerson: 11 },
  { id: 'classic',   name: 'Classic Canapés',        desc: '5 items per person · elegant assortment of cold canapés',        perPerson: 19 },
  { id: 'extended',  name: 'Extended Canapés',       desc: '6 items per person · warm and cold bites',                       perPerson: 37 },
  { id: 'signature', name: 'Signature Catering',     desc: '7–8 pieces per person · pass-around premium service · waitstaff included', perPerson: 75, waitstaffIncluded: true },
];

const BEVERAGES = [
  { id: 'coffee',    name: 'Unlimited Coffee & Tea by Barista', desc: 'Infused water (with berries), barista coffee (hot or iced), and 2 premium tea selections', perPerson: 13.5 },
  { id: 'lemonade',  name: 'Branded Colored Lemonades',         desc: 'House-made lemonades · 1 per guest · customisable flavours & colours',                     perPerson: 5   },
  { id: 'mocktails', name: 'Signature Mocktails',               desc: 'Alcohol-free cocktails · brand-customisable presentation',                                  perPerson: 9.5 },
];

const MEDIA = [
  { id: 'photo',     name: 'On-site photographer',              desc: 'High-quality visuals for marketing and social proof',        price: 300,  perHour: true  },
  { id: 'video',     name: 'On-site videographer',              desc: 'Cinematic video content for post-event promotion',          price: 350,  perHour: true  },
  { id: 'live',      name: 'Live Broadcast — Social Media',     desc: 'Professional live broadcast across major platforms',        price: 1290, perHour: false },
  { id: 'recording', name: 'Full event recording',              desc: 'High-quality recording for content and marketing reuse',    price: 590,  perHour: false },
];

const PROMO = [
  { id: 'luma',   name: 'Luma Event Page Setup & Promotion',      desc: 'Creation, optimization, and promotion on Luma',                             price: 490  },
  { id: 'email',  name: 'Selective Outreach — 15k Curated Database', desc: 'Targeted invitations sent to a highly curated contact database',         price: 1470 },
];

const BRANDING = [
  { id: 'identity', name: 'Custom Event Branding & Visual Identity', desc: 'Distinctive visual identity, graphics, promo materials',                  price: 990,  perHour: false },
  { id: 'lighting', name: 'Custom Lighting in Your Brand Colors',    desc: 'Lighting design tailored to your brand palette',                          price: 690,  perHour: false },
  { id: 'entrance', name: 'Entrance Branding',                       desc: 'Lift Hall Projection Visualisation · immersive environment',              price: 990,  perHour: false },
  { id: 'stage',    name: 'Stage & Screen Motion Branding',          desc: 'Custom animation content for main and side screens, creating a fully immersive environment', price: 970, perHour: false },
];

const PRINTED = [
  { id: 'photowall', name: 'Photo wall — Design & Printing',   desc: 'Visual centerpiece for social sharing',              price: 370 },
  { id: 'rollup',    name: 'Roll up — Design & Printing',      desc: 'Professional banners for venue visibility',          price: 160 },
  { id: 'badge',     name: 'Custom Badge — Design & Printing', desc: 'Branded badges for easy networking',                 perUnit: 9.5  },
  { id: 'lanyards',  name: 'Lanyards — Design & Printing',     desc: 'Subtle branding tool for every attendee',            perUnit: 9.5  },
  { id: 'notebooks', name: 'Notebooks & pens',                 desc: 'Branded materials guests keep after the event',      perUnit: 18.5 },
];

const OPS = [
  { id: 'manager',     name: 'Dedicated Event Manager',        desc: 'Full preparation and execution oversight',                              price: 0,   perHour: false, included: true },
  { id: 'coordinator', name: 'On-site Event Coordinator',      desc: 'Logistics, timing, and guest flow management',                          price: 0,   perHour: false, included: true },
  { id: 'tech',        name: 'On-site Technical Specialist',   desc: 'AV systems, lighting, and technical support throughout the event',      price: 0,   perHour: false, included: true },
  { id: 'hostess',     name: 'Hostesses for Guest Check-in',   desc: 'Professional welcome and registration management',                      price: 0,   perHour: false, included: true },
  { id: 'hostess-add', name: 'Additional Hostesses',           desc: 'Extra hostess support for larger events or multiple check-in points',   price: 80,  perHour: true  },
  { id: 'bartender',   name: 'Bartender for Bar Activations',  desc: 'Professional drink service and bar atmosphere',                         price: 100, perHour: true  },
  { id: 'waiters',     name: 'Waiters (Catering Service)',     desc: 'Smooth food and beverage service',                                      price: 80,  perHour: true  },
  { id: 'dj',          name: 'DJ Performance',                 desc: 'Live DJ for vibrant atmosphere and networking energy',                  price: 300, perHour: true  },
];

// ─── Preview images ───────────────────────────────────────────────────────────

const PREVIEW_IMAGES = {
  default:   'images/background.png',
  details:   'images/background.png',
  guests:    'images/background.png',
  venue:     'images/background.png',
  catering:  'images/background.png',
  beverages: 'images/background.png',
  media:     'images/background.png',
  promo:     'images/background.png',
  branding:  'images/background.png',
  printed:   'images/background.png',
  ops:       'images/background.png',
  checkout:  'images/background.png',
};

// ─── Left panel label ────────────────────────────────────────────────────────

function setLeftLabel(text) {
  const el = document.getElementById('split-label');
  if (!el) return;
  el.style.opacity = '0';
  setTimeout(() => { el.textContent = text; el.style.opacity = '1'; }, 150);
}

// ─── State ────────────────────────────────────────────────────────────────────
// Multi-select perHour → value = hours (number)
// Multi-select fixed   → value = true
// Single-select        → id string or null

const S = {
  guests:      50,
  date:        '',
  time:        '',
  venue:       {},
  catering:    null,
  cateringQty: 50,
  beverages:   {},
  media:       {},
  promo:       {},
  branding:    {},
  printed:     {},
  ops:         {},
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const $ = id => document.getElementById(id);
const fmtMoney = n => '$' + Math.round(n).toLocaleString();

// Linear interpolation/extrapolation between the 50 and 100 guest price tiers
function guestPrice(priceObj, guests) {
  const p50 = priceObj[50], p100 = priceObj[100];
  return p50 + (guests - 50) * (p100 - p50) / 50;
}

function itemPrice(item, val) {
  if (item.included) return 0;
  if (item.perHour) return item.price * (typeof val === 'number' ? val : 1);
  return item.price;
}

function calcTotal() {
  let total = 0;
  const addMulti = (items, stateObj) => {
    for (const [id, val] of Object.entries(stateObj)) {
      const item = items.find(i => i.id === id);
      if (item) total += itemPrice(item, val);
    }
  };
  addMulti(VENUE, S.venue);
  addMulti(VENUE_ROOMS, S.venue);
  addMulti(MEDIA, S.media);
  addMulti(PROMO, S.promo);
  addMulti(BRANDING, S.branding);
  addMulti(OPS, S.ops);
  if (S.catering) {
    const c = CATERING.find(i => i.id === S.catering);
    if (c) total += c.perPerson * S.cateringQty;
  }
  for (const [id, qty] of Object.entries(S.beverages)) {
    const b = BEVERAGES.find(i => i.id === id);
    if (b) total += b.perPerson * qty;
  }
  for (const [id, val] of Object.entries(S.printed)) {
    const item = PRINTED.find(i => i.id === id);
    if (!item) continue;
    total += item.perUnit !== undefined ? item.perUnit * val : item.price;
  }
  return total;
}

// ─── Render ───────────────────────────────────────────────────────────────────

function renderItemList(container, items, stateObj, section) {
  container.innerHTML = '';
  container.innerHTML = items.map(item => {
    if (item.included) {
      return `<div class="item-card selected included" style="cursor:default">
        <div class="item-main">
          <div class="item-chk" style="background:#333;border-color:#333"><i data-lucide="check" class="item-chk-tick" style="opacity:1"></i></div>
          <div class="item-info">
            <div class="item-name">${item.name}</div>
            <div class="item-desc">${item.desc}</div>
          </div>
          <div class="item-price"><span class="item-included">Included</span></div>
        </div>
      </div>`;
    }

    const sel = item.id in stateObj;
    const val = stateObj[item.id];
    const hours = typeof val === 'number' ? val : 1;

    const priceHtml = item.priceIncluded
      ? `<div class="item-price"><span class="item-included">Included</span></div>`
      : item.perHour
        ? `<div class="item-price">${fmtMoney(item.price)}<div class="item-price-hint">/hour</div></div>`
        : item.perUnit !== undefined
          ? `<div class="item-price">$${item.perUnit}<div class="item-price-hint">/pc</div></div>`
          : `<div class="item-price">${fmtMoney(item.price)}</div>`;

    const qty = typeof val === 'number' ? val : S.guests;
    const hrsHtml = (sel && item.perHour) ? `
      <div class="hrs-row" onclick="event.stopPropagation()">
        <span class="hrs-label">Hours:</span>
        <div class="hrs-stepper">
          <button class="hrs-btn" onclick="changeHrs('${section}','${item.id}',-1)"><i data-lucide="minus"></i></button>
          <input type="number" class="hrs-input" id="hrs-${item.id}" value="${hours}" min="1" oninput="setHrs('${section}','${item.id}',+this.value)" onclick="event.stopPropagation()">
          <button class="hrs-btn" onclick="changeHrs('${section}','${item.id}',+1)"><i data-lucide="plus"></i></button>
        </div>
        <span class="hrs-total" id="hrs-total-${item.id}">${fmtMoney(item.price * hours)}</span>
      </div>`
      : (sel && item.perUnit !== undefined) ? `
      <div class="hrs-row" onclick="event.stopPropagation()">
        <span class="hrs-label">Qty:</span>
        <div class="hrs-stepper">
          <button class="hrs-btn" onclick="changePrintedQty('${item.id}',-1)"><i data-lucide="minus"></i></button>
          <input type="number" class="hrs-input" id="qty-${item.id}" value="${qty}" min="1" oninput="setPrintedQty('${item.id}',+this.value)" onclick="event.stopPropagation()">
          <button class="hrs-btn" onclick="changePrintedQty('${item.id}',+1)"><i data-lucide="plus"></i></button>
        </div>
        <span class="hrs-total" id="qty-total-${item.id}">${fmtMoney(item.perUnit * qty)}</span>
      </div>` : '';

    return `<div class="item-card${sel ? ' selected' : ''}" onclick="toggleItem('${section}','${item.id}')">
      <div class="item-main">
        <div class="item-chk"><i data-lucide="check" class="item-chk-tick"></i></div>
        <div class="item-info">
          <div class="item-name">${item.name}</div>
          <div class="item-desc">${item.desc}</div>
        </div>
        ${priceHtml}
      </div>
      ${hrsHtml}
    </div>`;
  }).join('');
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function renderCateringBev(containerId, items, selectedId, subId) {
  const sub = S.guests ? `Prices for ${S.guests} people` : 'Select guest count to see prices';
  $(subId).textContent = sub;
  const section = containerId === 'catering-grid' ? 'catering' : 'beverages';
  const label = section === 'catering' ? 'Portions:' : 'Servings:';
  $(containerId).innerHTML = items.map(item => {
    const sel = section === 'beverages' ? item.id in selectedId : selectedId === item.id;
    const qty = section === 'beverages'
      ? (typeof selectedId[item.id] === 'number' ? selectedId[item.id] : S.guests)
      : S.cateringQty;
    const counterHtml = sel ? `
      <div class="hrs-row" onclick="event.stopPropagation()">
        <span class="hrs-label">${label}</span>
        <div class="hrs-stepper">
          <button class="hrs-btn" onclick="changePkgQty('${section}','${item.id}',-1)"><i data-lucide="minus"></i></button>
          <input type="number" class="hrs-input" id="pkg-qty-${item.id}" value="${qty}" min="1" oninput="setPkgQty('${section}','${item.id}',+this.value)" onclick="event.stopPropagation()">
          <button class="hrs-btn" onclick="changePkgQty('${section}','${item.id}',+1)"><i data-lucide="plus"></i></button>
        </div>
        <span class="hrs-total" id="pkg-total-${item.id}">${fmtMoney(item.perPerson * qty)}</span>
      </div>` : '';
    return `<div class="item-card${sel ? ' selected' : ''}" onclick="selectSingle('${section}','${item.id}')">
      <div class="item-main">
        <div class="item-chk"><i data-lucide="check" class="item-chk-tick"></i></div>
        <div class="item-info">
          <div class="item-name">${item.name}</div>
          <div class="item-desc">${item.desc}</div>
        </div>
        <div class="item-price">$${item.perPerson}<div class="item-price-hint">/person</div></div>
      </div>
      ${counterHtml}
    </div>`;
  }).join('');
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function renderAll() {
  renderItemList($('venue-list'),    VENUE,       S.venue,    'venue');
  renderItemList($('venue-rooms-list'), VENUE_ROOMS, S.venue,    'venue');
  renderItemList($('media-list'),    MEDIA,    S.media,    'media');
  renderItemList($('promo-list'),    PROMO,    S.promo,    'promo');
  renderItemList($('branding-list'), BRANDING, S.branding, 'branding');
  renderItemList($('printed-list'),  PRINTED,  S.printed,  'printed');
  renderItemList($('ops-list'),      OPS,      S.ops,      'ops');
  renderCateringBev('catering-grid',  CATERING, S.catering,  'catering-sub');
  renderCateringBev('beverages-grid', BEVERAGES, S.beverages, 'beverages-sub');
  updateTotal();
}

// ─── Handlers ─────────────────────────────────────────────────────────────────

function updateSliderDots(n) {
  const dots = document.querySelectorAll('.guest-slider-ticks span');
  const idx = (n - 50) / 10;
  dots.forEach((d, i) => d.classList.toggle('active', i === idx));
}

function selectGuests(n) {
  S.guests = n;
  updateSliderDots(n);
  S.cateringQty = n;
  for (const id in S.beverages) S.beverages[id] = n;
  for (const id in S.printed) {
    if (PRINTED.find(i => i.id === id)?.perUnit !== undefined) S.printed[id] = n;
  }
  const lbl = $('guest-slider-val');
  if (lbl) lbl.textContent = n + ' guests';
  renderCateringBev('catering-grid',  CATERING,  S.catering,  'catering-sub');
  renderCateringBev('beverages-grid', BEVERAGES, S.beverages, 'beverages-sub');
  renderItemList($('printed-list'), PRINTED, S.printed, 'printed');
  updateTotal();
}

function toggleItem(section, id) {
  const ALL_VENUE = [...VENUE, ...VENUE_ROOMS];
  const MAP = { venue: ALL_VENUE, media: MEDIA, promo: PROMO, branding: BRANDING, printed: PRINTED, ops: OPS };
  const items = MAP[section];
  const item = items.find(i => i.id === id);
  if (item.included) return;
  const obj = S[section];
  if (id in obj) { delete obj[id]; } else { obj[id] = item.perHour ? 1 : item.perUnit !== undefined ? S.guests : true; setLeftLabel(item.name); }
  if (section === 'venue') {
    renderItemList($('venue-list'), VENUE, obj, section);
    renderItemList($('venue-rooms-list'), VENUE_ROOMS, obj, section);
  } else {
    renderItemList($(`${section}-list`), items, obj, section);
  }
  updateTotal();
}

function changeHrs(section, id, delta) {
  const MAP = { venue: [...VENUE, ...VENUE_ROOMS], media: MEDIA, branding: BRANDING, ops: OPS };
  const item = MAP[section].find(i => i.id === id);
  const obj = S[section];
  const cur = typeof obj[id] === 'number' ? obj[id] : 1;
  const next = Math.max(1, cur + delta);
  obj[id] = next;
  $(`hrs-${id}`).value = next;
  $(`hrs-total-${id}`).textContent = fmtMoney(item.price * next);
  updateTotal();
}

function selectSingle(section, id) {
  if (section === 'beverages') {
    const item = BEVERAGES.find(i => i.id === id);
    if (id in S.beverages) { delete S.beverages[id]; } else { S.beverages[id] = S.guests; if (item) setLeftLabel(item.name); }
    renderCateringBev('beverages-grid', BEVERAGES, S.beverages, 'beverages-sub');
  } else {
    const item = CATERING.find(i => i.id === id);
    const selecting = S.catering !== id;
    S.catering = selecting ? id : null;
    if (selecting) S.cateringQty = S.guests;
    if (selecting && item) setLeftLabel(item.name);
    renderCateringBev('catering-grid', CATERING, S.catering, 'catering-sub');
  }
  updateTotal();
}

function changePkgQty(section, id, delta) {
  if (section === 'catering') {
    S.cateringQty = Math.max(1, S.cateringQty + delta);
    const item = CATERING.find(i => i.id === id);
    $(`pkg-qty-${id}`).value = S.cateringQty;
    $(`pkg-total-${id}`).textContent = fmtMoney(item.perPerson * S.cateringQty);
  } else {
    const cur = typeof S.beverages[id] === 'number' ? S.beverages[id] : S.guests;
    S.beverages[id] = Math.max(1, cur + delta);
    const item = BEVERAGES.find(i => i.id === id);
    $(`pkg-qty-${id}`).value = S.beverages[id];
    $(`pkg-total-${id}`).textContent = fmtMoney(item.perPerson * S.beverages[id]);
  }
  updateTotal();
}

function setHrs(section, id, v) {
  const MAP = { venue: [...VENUE, ...VENUE_ROOMS], media: MEDIA, branding: BRANDING, ops: OPS };
  const item = MAP[section].find(i => i.id === id);
  const next = Math.max(1, parseInt(v) || 1);
  S[section][id] = next;
  const el = $(`hrs-${id}`);
  if (el && +el.value !== next) el.value = next;
  $(`hrs-total-${id}`).textContent = fmtMoney(item.price * next);
  updateTotal();
}

function setPkgQty(section, id, v) {
  const next = Math.max(1, parseInt(v) || 1);
  if (section === 'catering') {
    S.cateringQty = next;
    const item = CATERING.find(i => i.id === id);
    $(`pkg-total-${id}`).textContent = fmtMoney(item.perPerson * next);
  } else {
    S.beverages[id] = next;
    const item = BEVERAGES.find(i => i.id === id);
    $(`pkg-total-${id}`).textContent = fmtMoney(item.perPerson * next);
  }
  updateTotal();
}

function setPrintedQty(id, v) {
  const item = PRINTED.find(i => i.id === id);
  const next = Math.max(1, parseInt(v) || 1);
  S.printed[id] = next;
  $(`qty-total-${id}`).textContent = fmtMoney(item.perUnit * next);
  updateTotal();
}

function changePrintedQty(id, delta) {
  const item = PRINTED.find(i => i.id === id);
  const cur = typeof S.printed[id] === 'number' ? S.printed[id] : S.guests;
  S.printed[id] = Math.max(1, cur + delta);
  $(`qty-${id}`).value = S.printed[id];
  $(`qty-total-${id}`).textContent = fmtMoney(item.perUnit * S.printed[id]);
  updateTotal();
}

// ─── Total & dots ─────────────────────────────────────────────────────────────

function updateTotal() {
  const total = calcTotal();
  $('p1-total').textContent = total > 0 ? fmtMoney(total) : 'No options selected';
  $('p1-total').style.color = total > 0 ? '' : '#969CA6';
  $('p1-total').style.fontSize = total > 0 ? '' : '14px';
  const bar = document.querySelector('.total-bar');
  const shouldShow = total > 0 && !formInView;
  if (shouldShow) {
    bar.classList.remove('hiding');
    bar.classList.add('visible');
  } else if (bar.classList.contains('visible') && !bar.classList.contains('hiding')) {
    bar.classList.add('hiding');
    bar.addEventListener('animationend', () => { bar.classList.remove('visible', 'hiding'); }, { once: true });
  }
  $('enquiry-section').classList.toggle('locked', total === 0);

  $('tbl-guests').textContent = S.guests ? `${S.guests} guests` : '';
  const dtParts = [];
  if (S.date) { const [y,m,d] = S.date.split('-'); dtParts.push(`${parseInt(d)} ${DP_MONTHS[parseInt(m)-1]} ${y}`); }
  if (S.time) dtParts.push(S.time);
  $('tbl-datetime').textContent = dtParts.join(', ');

  const btn = $('btn-continue');
  const canContinue = !!(S.guests && S.date && S.time);
  btn.style.opacity       = canContinue ? '1' : '0.5';
  btn.style.pointerEvents = canContinue ? ''  : 'none';

  const dateTimeReady = !!(S.date && S.time);
  document.querySelector('.guest-slider-wrap').classList.toggle('locked', !dateTimeReady);
  $('rest').classList.toggle('locked', !dateTimeReady);
}

// ─── Page navigation ──────────────────────────────────────────────────────────

function buildSummary() {
  const lines = [];

  if (S.date)   { const [y,m,d] = S.date.split('-'); lines.push(['Date', `${parseInt(d)} ${DP_MONTHS[parseInt(m)-1]} ${y}`]); }
  if (S.time)   lines.push(['Time',   S.time]);
  if (S.guests) lines.push(['Guests', S.guests + ' people']);

  const addSection = (title, items, stateObj) => {
    const sel = items.filter(i => i.included || i.id in stateObj);
    if (!sel.length) return;
    lines.push({ header: title });
    sel.forEach(item => {
      const val = stateObj[item.id];
      if (item.included || item.priceIncluded) { lines.push([item.name, 'Included']); return; }
      const hrs = (item.perHour && typeof val === 'number') ? val : null;
      const qty = (item.perUnit !== undefined && typeof val === 'number') ? val : null;
      if (hrs) lines.push([item.name, `${hrs}h · ${fmtMoney(item.price * hrs)}`]);
      else if (qty) lines.push([item.name, `${qty} pc · ${fmtMoney(item.perUnit * qty)}`]);
      else lines.push([item.name, fmtMoney(item.price)]);
    });
  };

  addSection('Venue',       [...VENUE, ...VENUE_ROOMS], S.venue);
  if (S.catering) {
    const c = CATERING.find(i => i.id === S.catering);
    if (c) { lines.push({ header: 'Catering' }); lines.push([c.name, `${S.cateringQty} portions · ${fmtMoney(c.perPerson * S.cateringQty)}`]); }
  }
  if (Object.keys(S.beverages).length) {
    lines.push({ header: 'Beverages' });
    BEVERAGES.filter(b => b.id in S.beverages).forEach(b => {
      const qty = S.beverages[b.id];
      lines.push([b.name, `${qty} servings · ${fmtMoney(b.perPerson * qty)}`]);
    });
  }
  addSection('Media',       MEDIA,    S.media);
  addSection('Promo',       PROMO,    S.promo);
  addSection('Branding',    BRANDING, S.branding);
  addSection('Printed',     PRINTED,  S.printed);
  addSection('Operations',  OPS,      S.ops);

  return lines;
}

let formInView = false;

function scrollToForm() {
  const section = $('enquiry-section');
  if (!section) return;
  const panel = document.querySelector('.split-right');
  if (panel) {
    panel.scrollTo({ top: section.offsetTop - 16, behavior: 'smooth' });
  } else {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function initFormObserver() {
  const section = $('enquiry-section');
  if (!section) return;
  const root = document.querySelector('.split-right') || null;
  const observer = new IntersectionObserver(entries => {
    formInView = entries[0].isIntersecting;
    updateTotal();
  }, { root, threshold: 0.05 });
  observer.observe(section);
}

// ─── Form validation ──────────────────────────────────────────────────────────

function clearFieldErrors() {
  document.querySelectorAll('#enquiry-form .fg.error').forEach(el => {
    el.classList.remove('error');
    const err = el.querySelector('.field-error');
    if (err) err.remove();
  });
}

function setFieldError(inputId, msg) {
  const input = $(inputId);
  const fg = input.closest('.fg');
  fg.classList.add('error');
  const err = document.createElement('span');
  err.className = 'field-error';
  err.textContent = msg;
  fg.appendChild(err);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function isValidPhone(phone) {
  return /^[\+\d][\d\s\-\(\)]{5,}$/.test(phone);
}

// ─── Form submit ──────────────────────────────────────────────────────────────

function submitEnquiry() {
  clearFieldErrors();

  const name     = $('f-name').value.trim();
  const email    = $('f-email').value.trim();
  const dialCode = $('f-dial') ? $('f-dial').value : '';
  const phone    = $('f-phone').value.trim() ? dialCode + ' ' + $('f-phone').value.trim() : '';
  const telegram = $('f-telegram').value.trim();
  const company  = $('f-company').value.trim();

  let valid = true;

  if (!name) {
    setFieldError('f-name', 'Please enter your name.');
    valid = false;
  }

  if (!email) {
    setFieldError('f-email', 'Please enter your email.');
    valid = false;
  } else if (!isValidEmail(email)) {
    setFieldError('f-email', 'Please enter a valid email address (e.g. your@email.com).');
    valid = false;
  }

  if (!company) {
    setFieldError('f-company', 'Please enter your company name.');
    valid = false;
  }

  if (!$('f-phone').value.trim()) {
    setFieldError('f-phone', 'Please enter your phone number.');
    valid = false;
  } else if (phone && !isValidPhone(phone)) {
    setFieldError('f-phone', 'Please enter a valid phone number (e.g. +1 000 000 0000).');
    valid = false;
  }

  if (!valid) return;

  const btn = document.querySelector('#enquiry-form .btn-submit');
  btn.disabled = true;
  btn.textContent = 'Sending…';
  $('submit-error').style.display = 'none';

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);

  fetch('/api/enquiry', {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({
      name,
      email,
      phone:    phone,
      telegram: telegram,
      company:  company,
      notes:    $('f-notes').value.trim(),
      honeypot: $('f-hp').value,
      total:    fmtMoney(calcTotal()),
      summary:  buildSummary(),
    }),
    signal: controller.signal,
  })
    .then(res => {
      clearTimeout(timeout);
      if (!res.ok) throw new Error('server_error');
      $('enquiry-form').style.display = 'none';
      $('success-view').style.display = 'block';
    })
    .catch(err => {
      clearTimeout(timeout);
      const msg = err.name === 'AbortError'
        ? 'Request timed out — please try again.'
        : 'Something went wrong — please try again.';
      $('submit-error').innerHTML = msg + ' Or email us at <a href="mailto:oleg.k@daoshub.xyz">oleg.k@daoshub.xyz</a>';
      $('submit-error').style.display = 'block';
      btn.disabled = false;
      btn.textContent = 'Submit enquiry';
    });
}

// ─── Date picker ──────────────────────────────────────────────────────────────

const DP_MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DP_DAYS   = ['Mo','Tu','We','Th','Fr','Sa','Su'];
let dpMonth = new Date(); dpMonth.setDate(1);
let timeFormat = '24';

function fmt(t) {
  if (timeFormat === '24') return t;
  const [h, m] = t.split(':').map(Number);
  const period = h >= 12 ? 'PM' : 'AM';
  const h12 = h % 12 || 12;
  return `${h12}:${String(m).padStart(2,'0')} ${period}`;
}

function toggleTimeFormat(f) {
  timeFormat = f;
  renderSlotsHeader();
  renderTimeSlots();
}

function renderMobileTimeHeader() {
  const el = $('time-mobile-header');
  if (!el) return;
  if (S.date) {
    const [y, m, d] = S.date.split('-');
    const dow = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][new Date(+y, +m-1, +d).getDay()];
    el.innerHTML = `<span class="dt-slots-day"><span class="ts-dow">${dow}</span> <span class="ts-date">${parseInt(d)}</span></span>`;
  } else {
    el.innerHTML = '';
  }
  const input = $('s-time-m');
  if (input && S.time) input.value = S.time;
}

function renderSlotsHeader() {
  const toggle = '';
  let dayHtml = '';
  if (S.date) {
    const [y, m, d] = S.date.split('-');
    const dow = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][new Date(+y, +m-1, +d).getDay()];
    dayHtml = `<span class="dt-slots-day"><span class="ts-dow">${dow}</span> <span class="ts-date">${parseInt(d)}</span></span>`;
  }
  $('dt-slots-header').innerHTML = dayHtml + toggle;
}


function renderDatePicker() {
  const year = dpMonth.getFullYear(), month = dpMonth.getMonth();
  const firstDow = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date(); today.setHours(0,0,0,0);
  const selIso = S.date;

  // Render calendar header (above the box)
  $('dt-cal-header').innerHTML = `
    <span class="dt-cal-label"><span class="dt-month">${DP_MONTHS[month]}</span> <span class="dt-year">${year}</span></span>
    <div class="dt-cal-header-nav">
      <button class="dp-nav" onclick="dpNav(-1)"><i data-lucide="chevron-left"></i></button>
      <button class="dp-nav" onclick="dpNav(1)"><i data-lucide="chevron-right"></i></button>
    </div>`;

  renderSlotsHeader();
  renderMobileTimeHeader();

  let cells = '';
  for (let i = 0; i < firstDow; i++) cells += `<div class="dp-day dp-empty"></div>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const iso = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const date = new Date(year, month, d);
    let cls = 'dp-day';
    if (iso === selIso)                          cls += ' dp-selected';
    else if (date.getTime() === today.getTime()) cls += ' dp-today';
    if (date < today)                            cls += ' dp-past';
    const click = date >= today ? `onclick="pickDate('${iso}')"` : '';
    cells += `<div class="${cls}" ${click}>${d}</div>`;
  }

  $('date-picker').innerHTML = `
    <div class="dp-grid">
      ${DP_DAYS.map(d => `<div class="dp-dow">${d}</div>`).join('')}
      ${cells}
    </div>`;
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function dpNav(dir) {
  dpMonth.setMonth(dpMonth.getMonth() + dir);
  renderDatePicker();
}

function pickDate(iso) {
  S.date = iso;
  S.time = '';
  renderDatePicker(); // also updates dt-slots-header
  renderTimeSlots();
  updateTotal();
}

function renderTimeSlots() {
  const slots = [];
  for (let h = 9; h <= 22; h++) {
    slots.push(`${String(h).padStart(2,'0')}:00`);
    if (h < 22) slots.push(`${String(h).padStart(2,'0')}:30`);
  }
  $('time-slots').innerHTML = slots.map(t =>
    `<div class="time-slot${S.time === t ? ' selected' : ''}" onclick="selectTime('${t}')">${fmt(t)}</div>`
  ).join('');
}

function selectTime(t) {
  S.time = t;
  renderTimeSlots();
  renderMobileTimeHeader();
  updateTotal();
}

// ─── Preview ──────────────────────────────────────────────────────────────────

let _currentPreview = 'default';

function setPreview(key) {
  if (_currentPreview === key) return;
  _currentPreview = key;
  const img = $('split-img');
  if (!img) return;
  const src = PREVIEW_IMAGES[key] || PREVIEW_IMAGES.default;
  if (img.src.endsWith(src)) return;
  img.classList.add('fading');
  setTimeout(() => { img.src = src; img.classList.remove('fading'); }, 200);
}

function initPreviewObserver() {
  if (window.innerWidth < 850) return;
  const sectionMap = [
    { el: document.querySelector('.datetime-block'), key: 'details'   },
    { el: document.querySelector('.guest-slider-wrap'), key: 'guests'  },
    { el: $('venue-list'),                           key: 'venue'     },
    { el: $('catering-grid'),                        key: 'catering'  },
    { el: $('beverages-grid'),                       key: 'beverages' },
    { el: $('media-list'),                           key: 'media'     },
    { el: $('promo-list'),                           key: 'promo'     },
    { el: $('branding-list'),                        key: 'branding'  },
    { el: $('printed-list'),                         key: 'printed'   },
    { el: $('ops-list'),                             key: 'ops'       },
  ];
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const found = sectionMap.find(s => s.el === e.target);
        if (found) setPreview(found.key);
      }
    });
  }, { root: document.querySelector('.split-right'), rootMargin: '0px 0px -50% 0px', threshold: 0 });
  sectionMap.forEach(s => { if (s.el) observer.observe(s.el); });
}

// ─── Init ─────────────────────────────────────────────────────────────────────

const _today = new Date();
S.date = `${_today.getFullYear()}-${String(_today.getMonth()+1).padStart(2,'0')}-${String(_today.getDate()).padStart(2,'0')}`;

renderAll();
updateSliderDots(S.guests);
renderDatePicker();
renderSlotsHeader();
renderTimeSlots();
initPreviewObserver();
initFormObserver();

// Clear field error as soon as the user starts correcting the field
['f-name', 'f-email', 'f-company', 'f-phone'].forEach(id => {
  $(id).addEventListener('input', () => {
    const fg = $(id).closest('.fg');
    if (fg.classList.contains('error')) {
      fg.classList.remove('error');
      const err = fg.querySelector('.field-error');
      if (err) err.remove();
    }
  });
});
