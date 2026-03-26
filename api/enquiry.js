const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);
const TO = 'oleg.k@daoshub.xyz';

// NOTE: update `from` to a verified domain address (e.g. events@daoshub.xyz)
// after verifying daoshub.xyz in Resend dashboard.
// onboarding@resend.dev works for testing only.
const FROM = 'DAOS Event Configurator <onboarding@resend.dev>';

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, notes, honeypot, total, summary } = req.body || {};

  // Honeypot: bots fill this, humans don't — silent drop
  if (honeypot) {
    console.log('enquiry: honeypot triggered, dropping');
    return res.status(200).json({ ok: true });
  }

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  // Build plain-text email body
  const lines = [
    `Name:  ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    notes ? `\nNotes:\n${notes}` : null,
    '\n── Event Configuration ──',
  ];

  if (Array.isArray(summary)) {
    for (const line of summary) {
      if (line && line.header) {
        lines.push(`\n── ${line.header} ──`);
      } else if (Array.isArray(line) && line.length === 2) {
        lines.push(`${line[0]}: ${line[1]}`);
      }
    }
  }

  lines.push(`\n── Estimated Total: ${total} ──`);

  const text = lines.filter(l => l !== null).join('\n');

  try {
    await resend.emails.send({
      from: FROM,
      to: [TO],
      subject: `New event enquiry — ${name} · ${total}`,
      text,
    });
    console.log(`enquiry sent: ${email}, total: ${total}`);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('resend error:', err.message);
    return res.status(500).json({ error: 'send failed' });
  }
};
