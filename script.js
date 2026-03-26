// ─── Data ─────────────────────────────────────────────────────────────────────

const VENUE = [
  { id: 'event-hall',     name: 'Event hall',                         desc: '100 people · stunning Palm views and bar atmosphere',    price: 5000, perHour: true  },
  { id: 'stage-av',       name: 'Main Stage & AV Setup + Technician', desc: 'LED screen, professional sound, stage lighting',         price: 1000, perHour: false },
  { id: 'networking',     name: 'Networking area',                    desc: '70 people · stylish lounge and bar setting',             price: 3000, perHour: true  },
  { id: 'room-dune',      name: 'Meeting room Dune',                  desc: '20 people · workshops and focused discussions',          price: 300,  perHour: true  },
  { id: 'room-matrix',    name: 'Meeting room Matrix',                desc: '6 people · panoramic windows, skyline views',            price: 200,  perHour: true  },
  { id: 'room-herous',    name: 'Meeting room Herous',                desc: '6 people · private space for strategic discussions',     price: 200,  perHour: true  },
  { id: 'room-consensus', name: 'Meeting room Consensus',             desc: '6 people · floor-to-ceiling windows, Dubai skyline',    price: 200,  perHour: true  },
  { id: 'room-dao',       name: 'Meeting room Dao',                   desc: '4 people · intimate space for quick meetings',          price: 150,  perHour: true  },
  { id: 'storage',        name: 'Storage',                            desc: 'Secure space for materials, merchandise, equipment',    price: 100,  perHour: true  },
  { id: 'private-office', name: 'Private Office',                     desc: '2/4/6 people · desk setup, screens',                    price: 500,  perHour: true  },
  { id: 'conference',     name: 'Conference hall',                    desc: 'Up to 30 people · boardroom style',                     price: 1500, perHour: true  },
];

const CATERING = [
  { id: 'basic',     name: 'Basic Sharing Platters',     desc: 'Light, elegant bites · relaxed networking atmosphere',           price: { 50: 500,  100: 950  } },
  { id: 'classic',   name: 'Classic Canapés',  desc: '5 items per person · elegant assortment of cold canapés',        price: { 50: 1120, 100: 2150 } },
  { id: 'extended',  name: 'Extended Canapés', desc: '6 items per person · warm and cold bites',                       price: { 50: 2000, 100: 3950 } },
  { id: 'signature', name: 'Signature Catering',         desc: '7–8 pieces per person · pass around premium service',            price: { 50: 3900, 100: 7500 } },
];

const BEVERAGES = [
  { id: 'coffee',    name: 'Tea & Coffee Experience', desc: 'Water, barista coffee (hot or iced), premium teas',               price: { 50: 630,  100: 1075 } },
  { id: 'lemonade',  name: 'Crafted Lemonades',       desc: 'House-made lemonades · customisable flavours and colours',        price: { 50: 670,  100: 1150 } },
  { id: 'mocktails', name: 'Signature Mocktails',     desc: 'Alcohol-free cocktails · brand-customisable presentation',        price: { 50: 770,  100: 1100 } },
];

const MEDIA = [
  { id: 'photo',     name: 'On-site photographer',              desc: 'High-quality visuals for marketing and social proof',        price: 300,  perHour: true  },
  { id: 'video',     name: 'On-site videographer',              desc: 'Cinematic video content for post-event promotion',          price: 350,  perHour: true  },
  { id: 'live',      name: 'Live Broadcast — Social Media',     desc: 'Professional live broadcast across major platforms',        price: 1990, perHour: false },
  { id: 'recording', name: 'Full event recording',              desc: 'High-quality recording for content and marketing reuse',    price: 600,  perHour: false },
  { id: 'podcast',   name: 'Podcast room',                      desc: '2/4/6 people · studio-quality recording environment',      price: 300,  perHour: true  },
];

const PROMO = [
  { id: 'luma',   name: 'Luma Event Page Setup & Promotion',        desc: 'Creation, optimization, and promotion on Luma',           price: 400  },
  { id: 'email',  name: 'Targeted Email Campaign — 15k Database',   desc: 'Outreach to 15,000+ curated contact database',           price: 1500 },
  { id: 'social', name: 'Social Media Campaign & Promo Management', desc: 'Planning and execution of social media promotion',        price: 1000 },
];

const BRANDING = [
  { id: 'identity', name: 'Custom Event Branding & Visual Identity', desc: 'Distinctive visual identity, graphics, promo materials', price: 500,  perHour: false },
  { id: 'lighting', name: 'Custom Lighting in Your Brand Colors',    desc: 'Lighting design tailored to your brand palette',         price: 400,  perHour: false },
  { id: 'entrance', name: 'Entrance Branding',                       desc: 'Lift Hall Projection Visualisation · immersive environment', price: 1500, perHour: false },
  { id: 'stage',    name: 'Stage & Backdrop Branding',               desc: 'Branded content for digital screens',                   price: 1000, perHour: false },
  { id: 'dj',       name: 'DJ Performance',                          desc: 'Live DJ for vibrant atmosphere and networking energy',   price: 300,  perHour: true  },
];

const PRINTED = [
  { id: 'photowall', name: 'Photo wall — Design & Printing',   desc: 'Visual centerpiece for social sharing',              price: 400 },
  { id: 'rollup',    name: 'Roll up — Design & Printing',      desc: 'Professional banners for venue visibility',          price: 150 },
  { id: 'badge',     name: 'Custom Badge — Design & Printing', desc: 'Branded badges for easy networking',                 price: 100 },
  { id: 'lanyards',  name: 'Lanyards — Design & Printing',     desc: 'Subtle branding tool for every attendee',            price: 100 },
  { id: 'notebooks', name: 'Notebooks & pens',                 desc: 'Branded materials guests keep after the event',      price: 250 },
];

const OPS = [
  { id: 'manager',     name: 'Dedicated Event Manager',       desc: 'Full preparation and execution oversight',             price: 0,   perHour: false, included: true },
  { id: 'coordinator', name: 'On-site Event Coordinator',     desc: 'Logistics, timing, and guest flow management',         price: 0,   perHour: false, included: true },
  { id: 'hostess',     name: 'Hostesses for Guest Check-in',  desc: 'Professional welcome and registration management',     price: 80,  perHour: true  },
  { id: 'bartender',   name: 'Bartender for Bar Activations', desc: 'Professional drink service and bar atmosphere',        price: 100, perHour: true  },
  { id: 'waiters',     name: 'Waiters (Catering Service)',    desc: 'Smooth food and beverage service',                    price: 80,  perHour: true  },
];

// ─── State ────────────────────────────────────────────────────────────────────
// Multi-select perHour → value = hours (number)
// Multi-select fixed   → value = true
// Single-select        → id string or null

const S = {
  guests:    null,
  date:      '',
  time:      '',
  venue:     {},
  catering:  null,
  beverages: {},
  media:     {},
  promo:     {},
  branding:  {},
  printed:   {},
  ops:       {},
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const $ = id => document.getElementById(id);
const fmtMoney = n => '$' + n.toLocaleString();

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
  addMulti(MEDIA, S.media);
  addMulti(PROMO, S.promo);
  addMulti(BRANDING, S.branding);
  addMulti(PRINTED, S.printed);
  addMulti(OPS, S.ops);
  if (S.catering && S.guests) {
    const c = CATERING.find(i => i.id === S.catering);
    if (c) total += c.price[S.guests];
  }
  if (S.guests) {
    BEVERAGES.forEach(b => { if (b.id in S.beverages) total += b.price[S.guests]; });
  }
  return total;
}

// ─── Render ───────────────────────────────────────────────────────────────────

function renderItemList(container, items, stateObj, section) {
  container.innerHTML = '';
  container.innerHTML = items.map(item => {
    if (item.included) {
      return `<div class="item-card selected" style="cursor:default">
        <div class="item-main">
          <div class="item-chk" style="background:#111;border-color:#111"><i data-lucide="check" class="item-chk-tick" style="opacity:1"></i></div>
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

    const priceHtml = item.perHour
      ? `<div class="item-price">${fmtMoney(item.price)}<div class="item-price-hint">per hour</div></div>`
      : `<div class="item-price">${fmtMoney(item.price)}</div>`;

    const hrsHtml = (sel && item.perHour) ? `
      <div class="hrs-row" onclick="event.stopPropagation()">
        <span class="hrs-label">Hours:</span>
        <button class="hrs-btn" onclick="changeHrs('${section}','${item.id}',-1)"><i data-lucide="minus"></i></button>
        <span class="hrs-val" id="hrs-${item.id}">${hours}</span>
        <button class="hrs-btn" onclick="changeHrs('${section}','${item.id}',+1)"><i data-lucide="plus"></i></button>
        <span class="hrs-total" id="hrs-total-${item.id}">${fmtMoney(item.price * hours)}</span>
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
  $(containerId).innerHTML = items.map(item => {
    const sel = section === 'beverages' ? item.id in selectedId : selectedId === item.id;
    const price = S.guests ? fmtMoney(item.price[S.guests]) : '—';
    return `<div class="pkg-card${sel ? ' selected' : ''}" onclick="selectSingle('${section}','${item.id}')">
      <div class="pkg-price">${price}</div>
      <div class="pkg-name">${item.name}</div>
      <div class="pkg-includes">${item.desc}</div>
    </div>`;
  }).join('');
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function renderAll() {
  renderItemList($('venue-list'),    VENUE,    S.venue,    'venue');
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

function selectGuests(n) {
  S.guests = n;
  document.querySelectorAll('.size-card').forEach(c => c.classList.remove('selected'));
  $('sz' + n).classList.add('selected');
  renderCateringBev('catering-grid',  CATERING,  S.catering,  'catering-sub');
  renderCateringBev('beverages-grid', BEVERAGES, S.beverages, 'beverages-sub');
  updateTotal();
}

function toggleItem(section, id) {
  const MAP = { venue: VENUE, media: MEDIA, promo: PROMO, branding: BRANDING, printed: PRINTED, ops: OPS };
  const items = MAP[section];
  const item = items.find(i => i.id === id);
  if (item.included) return;
  const obj = S[section];
  if (id in obj) { delete obj[id]; } else { obj[id] = item.perHour ? 1 : true; }
  renderItemList($(`${section}-list`), items, obj, section);
  updateTotal();
}

function changeHrs(section, id, delta) {
  const MAP = { venue: VENUE, media: MEDIA, branding: BRANDING, ops: OPS };
  const item = MAP[section].find(i => i.id === id);
  const obj = S[section];
  const cur = typeof obj[id] === 'number' ? obj[id] : 1;
  const next = Math.max(1, cur + delta);
  obj[id] = next;
  $(`hrs-${id}`).textContent = next;
  $(`hrs-total-${id}`).textContent = fmtMoney(item.price * next);
  updateTotal();
}

function selectSingle(section, id) {
  if (section === 'beverages') {
    if (id in S.beverages) { delete S.beverages[id]; } else { S.beverages[id] = true; }
    renderCateringBev('beverages-grid', BEVERAGES, S.beverages, 'beverages-sub');
  } else {
    S.catering = S.catering === id ? null : id;
    renderCateringBev('catering-grid', CATERING, S.catering, 'catering-sub');
  }
  updateTotal();
}

// ─── Total & dots ─────────────────────────────────────────────────────────────

function updateTotal() {
  const total = calcTotal();
  $('p1-total').textContent = total > 0 ? fmtMoney(total) : 'No options selected';
  $('p1-total').style.color = total > 0 ? '' : '#969CA6';
  $('p1-total').style.fontSize = total > 0 ? '' : '14px';
  document.querySelector('.total-bar').classList.toggle('visible', total > 0);

  $('tbl-guests').textContent = S.guests ? `${S.guests} guests` : '';
  const dtParts = [];
  if (S.date) { const [y,m,d] = S.date.split('-'); dtParts.push(`${parseInt(d)} ${DP_MONTHS[parseInt(m)-1]} ${y}`); }
  if (S.time) dtParts.push(S.time);
  $('tbl-datetime').textContent = dtParts.join(', ');

  const btn = $('btn-continue');
  btn.style.opacity       = S.guests ? '1' : '0.35';
  btn.style.pointerEvents = S.guests ? ''  : 'none';

  $('rest').classList.toggle('locked', !S.guests);
  $('dot-guests').classList.toggle('done', !!S.guests);
  $('dot-venue').classList.toggle('done',    Object.keys(S.venue).length    > 0);
  $('dot-catering').classList.toggle('done', !!S.catering);
  $('dot-beverages').classList.toggle('done', Object.keys(S.beverages).length > 0);
  $('dot-media').classList.toggle('done',    Object.keys(S.media).length    > 0);
  $('dot-promo').classList.toggle('done',    Object.keys(S.promo).length    > 0);
  $('dot-branding').classList.toggle('done', Object.keys(S.branding).length > 0);
  $('dot-printed').classList.toggle('done',  Object.keys(S.printed).length  > 0);
  $('dot-ops').classList.toggle('done',      Object.keys(S.ops).length      > 0);
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
      if (item.included) { lines.push([item.name, 'Included']); return; }
      const hrs = typeof val === 'number' ? val : null;
      lines.push([item.name, hrs ? `${hrs}h · ${fmtMoney(item.price * hrs)}` : fmtMoney(item.price)]);
    });
  };

  const addSingle = (title, items, id) => {
    if (!id || !S.guests) return;
    const item = items.find(i => i.id === id);
    if (!item) return;
    lines.push({ header: title });
    lines.push([item.name, fmtMoney(item.price[S.guests])]);
  };

  addSection('Venue',       VENUE,    S.venue);
  addSingle('Catering',     CATERING, S.catering);
  if (Object.keys(S.beverages).length && S.guests) {
    lines.push({ header: 'Beverages' });
    BEVERAGES.filter(b => b.id in S.beverages).forEach(b => {
      lines.push([b.name, fmtMoney(b.price[S.guests])]);
    });
  }
  addSection('Media',       MEDIA,    S.media);
  addSection('Promo',       PROMO,    S.promo);
  addSection('Branding',    BRANDING, S.branding);
  addSection('Printed',     PRINTED,  S.printed);
  addSection('Operations',  OPS,      S.ops);

  return lines;
}

function goToPage2() {
  const total = calcTotal();
  const lines = buildSummary();

  $('co-summary').innerHTML = lines.map(line => {
    if (line.header) return `<div class="co-section-header">${line.header}</div>`;
    return `<div class="checkout-row"><span class="lbl">${line[0]}</span><span class="val">${line[1]}</span></div>`;
  }).join('');

  $('co-total').textContent = total > 0 ? fmtMoney(total) : '—';

  $('page-1').style.display = 'none';
  $('page-2').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToPage1() {
  $('page-2').style.display = 'none';
  $('page-1').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
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

  const name  = $('f-name').value.trim();
  const email = $('f-email').value.trim();
  const phone = $('f-phone').value.trim();

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

  if (phone && !isValidPhone(phone)) {
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
      phone:    $('f-phone').value.trim(),
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

function toggleDatePicker(e) {
  e.stopPropagation();
  const dp = $('date-picker');
  if (dp.style.display === 'block') { dp.style.display = 'none'; return; }
  renderDatePicker();
  dp.style.display = 'block';
}

function renderDatePicker() {
  const year = dpMonth.getFullYear(), month = dpMonth.getMonth();
  const firstDow = (new Date(year, month, 1).getDay() + 6) % 7; // Mon=0
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date(); today.setHours(0,0,0,0);
  const selIso = S.date;

  let cells = '';
  for (let i = 0; i < firstDow; i++) cells += `<div class="dp-day dp-empty"></div>`;
  for (let d = 1; d <= daysInMonth; d++) {
    const iso = `${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const date = new Date(year, month, d);
    let cls = 'dp-day';
    if (iso === selIso)        cls += ' dp-selected';
    else if (date.getTime() === today.getTime()) cls += ' dp-today';
    if (date < today)          cls += ' dp-past';
    const click = date >= today ? `onclick="pickDate('${iso}')"` : '';
    cells += `<div class="${cls}" ${click}>${d}</div>`;
  }

  $('date-picker').innerHTML = `
    <div class="dp-header">
      <button class="dp-nav" onclick="event.stopPropagation();dpNav(-1)"><i data-lucide="chevron-left"></i></button>
      <span class="dp-month-label">${DP_MONTHS[month]} ${year}</span>
      <button class="dp-nav" onclick="event.stopPropagation();dpNav(1)"><i data-lucide="chevron-right"></i></button>
    </div>
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
  const [y, m, d] = iso.split('-');
  $('s-date').value = `${parseInt(d)} ${DP_MONTHS[parseInt(m)-1]} ${y}`;
  $('date-picker').style.display = 'none';
  updateTotal();
}

document.addEventListener('click', e => {
  const wrap = $('date-picker-wrap');
  if (wrap && !wrap.contains(e.target)) $('date-picker').style.display = 'none';
});

// ─── Init ─────────────────────────────────────────────────────────────────────

renderAll();

// Clear field error as soon as the user starts correcting the field
['f-name', 'f-email', 'f-phone'].forEach(id => {
  $(id).addEventListener('input', () => {
    const fg = $(id).closest('.fg');
    if (fg.classList.contains('error')) {
      fg.classList.remove('error');
      const err = fg.querySelector('.field-error');
      if (err) err.remove();
    }
  });
});
