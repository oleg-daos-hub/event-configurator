// ─── Data ────────────────────────────────────────────────────────────────────

const FORMATS = ['Launch events', 'AMAs & streams', 'Brand events', 'Ecosystem meetups', 'Roundtables'];

const TYPES = [
  {
    id: 'branded', name: 'Branded event', tagline: 'Full ownership', price: 'From $15K',
    includes: ['Venue rental (3h) + tech setup', 'Custom digital wall', 'Event manager & coordinator', 'IT support', 'Hostesses for check-in', 'Bartender & equipped bar']
  },
  {
    id: 'cohost', name: 'Co-host', tagline: 'Shared stage & visibility', price: 'From $8K',
    includes: ['Co-host branding on all materials', 'Logo on main stage screen', 'Speaker participation', '10–15 guest invitations', 'Photo & video coverage', 'Livestream option']
  },
  {
    id: 'sponsorship', name: 'Sponsorship', tagline: 'Join an existing event', price: 'From $4K',
    includes: ['Logo on Luma event page', 'Mentions on Telegram & X', 'Logo on event visuals', 'Optional CTA/link', 'Visibility throughout program', 'Optional cocktail branding']
  },
  {
    id: 'custom', name: 'Custom package', tagline: "Tell us what you need — we'll build it around you", price: null, includes: []
  }
];

const CATERING = [
  { id: 'basic',     name: 'Basic',     price: { 50: 500,  100: 950  }, includes: 'Mini pastries · Cheese platter with fruits, olives & crackers' },
  { id: 'classic',   name: 'Classic',   price: { 50: 1120, 100: 2150 }, includes: '5 items per person · Crostinis, pastry cups, sandwiches, croissants, dessert' },
  { id: 'extended',  name: 'Extended',  price: { 50: 2000, 100: 3950 }, includes: '6 items per person · Sandwiches, quiche, canapés, crostinis, pastry cups, dessert' },
  { id: 'signature', name: 'Signature', price: { 50: 3900, 100: 7500 }, includes: '7–8 items · Wagyu, lobster, duck parfait & more · Includes staff & chef' }
];

const DRINKS = [
  { id: 'standard',  name: 'Standard',  price: { 50: 680,  100: 1225 }, includes: 'Water · Premium tea (2) · Barista coffee hot & iced' },
  { id: 'extended',  name: 'Extended',  price: { 50: 820,  100: 1500 }, includes: 'Water · Premium tea (3) · Barista coffee · House lemonade' },
  { id: 'signature', name: 'Signature', price: { 50: 1300, 100: 2450 }, includes: 'Water · Ultra premium tea · Barista coffee · Lemonade · Signature mocktails' }
];

const HOSTESS = [
  { id: 'basic',    name: 'Basic',    price: { 50: 300, 100: 500  }, includes: '2 hostesses · Check-in & guest list management · Welcome & directions' },
  { id: 'standard', name: 'Standard', price: { 50: 550, 100: 900  }, includes: '3 hostesses · Check-in, welcome & floor support · Branded outfit coordination' },
  { id: 'premium',  name: 'Premium',  price: { 50: 900, 100: 1500 }, includes: '4 hostesses · Full event presence · Branded attire · Dedicated VIP lane' }
];

// ─── State ────────────────────────────────────────────────────────────────────

const S = { size: null, format: null, type: null, catering: null, drinks: null, hostess: null };

// ─── Helpers ──────────────────────────────────────────────────────────────────

const fmtMoney    = n  => '$' + n.toLocaleString();
const isSponsor   = () => S.type && S.type.id === 'sponsorship';
const isCustomType= () => S.type && S.type.id === 'custom';
const isSimpleType = () => S.type && (S.type.id === 'sponsorship' || S.type.id === 'custom');

const setLocked = (id, v) => document.getElementById(id).classList.toggle('locked', v);
const setDone   = (id, v) => document.getElementById(id).classList.toggle('done', v);

function allDone() {
  if (!S.size || !S.format || !S.type) return false;
  if (isSimpleType()) return true;
  return !!S.catering && !!S.drinks && !!S.hostess;
}

// ─── Render functions ─────────────────────────────────────────────────────────

function renderFormats() {
  document.getElementById('format-grid').innerHTML = FORMATS.map(f =>
    `<div class="fmt-pill${S.format === f ? ' selected' : ''}" onclick="selectFormat('${f}')">${f}</div>`
  ).join('');
}

function renderTypes() {
  const mainTypes = TYPES.filter(t => t.id !== 'custom');
  document.getElementById('type-grid').innerHTML = mainTypes.map(t => {
    const sel = S.type && S.type.id === t.id;
    return `<div class="type-card${sel ? ' selected' : ''}" onclick="selectType('${t.id}')">
      <div class="type-name">${t.name}</div>
      <div class="type-tagline">${t.tagline}</div>
      <div class="type-price">${t.price}</div>
      <ul class="type-includes">${t.includes.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>`;
  }).join('');
  const customSel = S.type && S.type.id === 'custom';
  document.getElementById('custom-type-card').classList.toggle('selected', customSel);
}

function renderPkgs(list, id, key) {
  document.getElementById(id).innerHTML = list.map(pkg => {
    const priceStr = pkg.price
      ? (S.size ? fmtMoney(pkg.price[S.size]) : '<span style="font-size:13px;color:#aaa">select size first</span>')
      : '<span style="font-size:13px;color:#888">On request</span>';
    const sel = S[key] && S[key].id === pkg.id;
    return `<div class="pkg-card${sel ? ' selected' : ''}${pkg.id === 'custom' ? ' custom' : ''}" onclick="selectPkg('${key}','${pkg.id}')">
      <div class="pkg-name">${pkg.name}</div>
      <div class="pkg-price">${priceStr}</div>
      <div class="pkg-includes">${pkg.includes}</div>
    </div>`;
  }).join('');
}

// ─── Selection handlers ───────────────────────────────────────────────────────

function selectSize(n) {
  S.size = n;
  document.querySelectorAll('.size-card').forEach(c => c.classList.remove('selected'));
  document.getElementById('sz' + n).classList.add('selected');
  renderPkgs(CATERING, 'catering-grid', 'catering');
  renderPkgs(DRINKS,   'drinks-grid',   'drinks');
  renderPkgs(HOSTESS,  'hostess-grid',  'hostess');
  updateUI();
}

function selectFormat(f) {
  S.format = f;
  renderFormats();
  updateUI();
}

function selectType(id) {
  S.type = TYPES.find(t => t.id === id);
  S.catering = null;
  S.drinks   = null;
  S.hostess  = null;
  renderTypes();
  renderPkgs(CATERING, 'catering-grid', 'catering');
  renderPkgs(DRINKS,   'drinks-grid',   'drinks');
  renderPkgs(HOSTESS,  'hostess-grid',  'hostess');
  updateUI();
}

function selectPkg(key, id) {
  const map = { catering: CATERING, drinks: DRINKS, hostess: HOSTESS };
  S[key] = map[key].find(p => p.id === id);
  renderPkgs(map[key], key + '-grid', key);
  updateUI();
}

// ─── Totals ───────────────────────────────────────────────────────────────────

function calcTotal() {
  if (!allDone()) return null;
  if (isSponsor())    return { display: 'From $4,000', note: 'Final price confirmed after enquiry' };
  if (isCustomType()) return { display: 'On request',  note: "We'll prepare a custom quote for you" };
  const hasCustom = [S.catering, S.drinks, S.hostess].some(p => p && !p.price);
  if (hasCustom) return { display: 'On request', note: 'Includes one or more custom packages' };
  let total = 0;
  [S.catering, S.drinks, S.hostess].forEach(p => { if (p && p.price) total += p.price[S.size]; });
  return { display: fmtMoney(total), note: 'Add-ons only · Event type fee billed separately' };
}

function calcRunningTotal() {
  if (!S.format || !S.size) return null;
  if (isSponsor())    return { display: 'From $4,000', note: 'Final price confirmed after enquiry' };
  if (isCustomType()) return { display: 'On request',  note: "We'll prepare a custom quote for you" };
  let total = 0;
  let hasAny = false;
  [S.catering, S.drinks, S.hostess].forEach(p => {
    if (p) { hasAny = true; if (p.price) total += p.price[S.size]; }
  });
  if (!hasAny) return null;
  return { display: fmtMoney(total), note: 'Add-ons only · Event type fee billed separately' };
}

// ─── UI update ────────────────────────────────────────────────────────────────

function updateUI() {
  setDone('dot-size',     !!S.size);
  setDone('dot-format',   !!S.format);
  setDone('dot-type',     !!S.type);
  setDone('dot-catering', !!S.catering);
  setDone('dot-drinks',   !!S.drinks);
  setDone('dot-hostess',  !!S.hostess);

  setLocked('block-size', !S.format);
  setLocked('block-type', !S.format || !S.size);

  const optEl = document.getElementById('options-section');
  if (!S.type || isSimpleType()) {
    optEl.style.display = 'none';
  } else {
    optEl.style.display = '';
    setLocked('block-catering', false);
    setLocked('block-drinks',   !S.catering);
    setLocked('block-hostess',  !S.catering || !S.drinks);
  }

  ['catering', 'drinks', 'hostess'].forEach(key => {
    const el = document.getElementById('size-label-' + key);
    if (el) el.textContent = S.size || '—';
  });

  const hasProgress = S.format && S.size && S.type;
  setLocked('block-total', !hasProgress);
  const t = hasProgress ? (calcRunningTotal() || calcTotal()) : null;
  document.getElementById('p1-total').textContent = t ? t.display : '—';
  document.getElementById('p1-note').textContent  = t ? t.note    : '';

  const continueBtn = document.querySelector('#block-total .btn-submit');
  if (continueBtn) {
    continueBtn.style.opacity       = allDone() ? '1' : '0.35';
    continueBtn.style.pointerEvents = allDone() ? '' : 'none';
  }
}

// ─── Page navigation ──────────────────────────────────────────────────────────

function goToPage2() {
  const t = calcTotal();

  document.getElementById('co-size').textContent   = S.size   ? S.size + ' people' : '—';
  document.getElementById('co-format').textContent = S.format || '—';
  document.getElementById('co-type').textContent   = S.type   ? S.type.name : '—';

  const setCoVal = (id, pkg) => {
    const el = document.getElementById(id);
    if (!pkg) { el.textContent = '—'; return; }
    el.textContent = pkg.name + (pkg.price && S.size ? ' · ' + fmtMoney(pkg.price[S.size]) : ' · On request');
  };
  setCoVal('co-catering', S.catering);
  setCoVal('co-drinks',   S.drinks);
  setCoVal('co-hostess',  S.hostess);

  document.getElementById('co-total').textContent = t ? t.display : '—';
  document.getElementById('co-note').textContent  = t ? t.note    : '';

  ['co-row-catering', 'co-row-drinks', 'co-row-hostess'].forEach(id => {
    document.getElementById(id).style.display = isSimpleType() ? 'none' : '';
  });

  document.getElementById('page-1').style.display = 'none';
  document.getElementById('page-2').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goToPage1() {
  document.getElementById('page-2').style.display = 'none';
  document.getElementById('page-1').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ─── Form submit ──────────────────────────────────────────────────────────────

function submitEnquiry() {
  const name  = document.getElementById('f-name').value.trim();
  const email = document.getElementById('f-email').value.trim();
  if (!name || !email) { alert('Please enter your name and email.'); return; }
  document.getElementById('enquiry-form').style.display = 'none';
  document.getElementById('success-view').style.display = 'block';
}

// ─── Init ─────────────────────────────────────────────────────────────────────

renderFormats();
renderTypes();
renderPkgs(CATERING, 'catering-grid', 'catering');
renderPkgs(DRINKS,   'drinks-grid',   'drinks');
renderPkgs(HOSTESS,  'hostess-grid',  'hostess');
updateUI();
