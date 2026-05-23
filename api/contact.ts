import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  date?: string;
  service?: string;
  message?: string;
  website?: string;
};

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!)
  );

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    name = "",
    email = "",
    phone = "",
    date = "",
    service = "",
    message = "",
    website = "",
  } = (req.body || {}) as Payload;

  if (website.trim() !== "") {
    return res.status(200).json({ ok: true });
  }

  if (!name.trim() || !email.trim() || !message.trim()) {
    return res.status(400).json({ error: "Name, email and message are required." });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Please provide a valid email address." });
  }

  const user = process.env.ZOHO_USER;
  const pass = process.env.ZOHO_PASS;
  const to = process.env.CONTACT_TO || user;
  const host = process.env.ZOHO_HOST || "smtp.zoho.in";
  const port = Number(process.env.ZOHO_PORT || 465);

  if (!user || !pass) {
    return res.status(500).json({ error: "Mail server not configured." });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  const subject = `New enquiry — ${service || "Website"} — ${name}`;
  const rows: [string, string][] = [
    ["Name", name],
    ["Email", email],
    ["Phone", phone],
    ["Event date", date],
    ["Service", service],
  ];

  const html = `
    <div style="font-family:Helvetica,Arial,sans-serif;color:#1a1a1a;line-height:1.5">
      <h2 style="margin:0 0 16px;font-weight:600">New enquiry from adgalaxy.in</h2>
      <table style="border-collapse:collapse;margin-bottom:16px">
        ${rows
          .filter(([, v]) => v && v.trim())
          .map(
            ([k, v]) =>
              `<tr><td style="padding:4px 12px 4px 0;color:#666;font-size:13px">${k}</td><td style="padding:4px 0;font-size:14px">${escapeHtml(v)}</td></tr>`
          )
          .join("")}
      </table>
      <div style="padding:12px 16px;background:#f6f1e7;border-left:3px solid #b88a3a;white-space:pre-wrap;font-size:14px">${escapeHtml(message)}</div>
    </div>
  `;

  const text = [
    ...rows.filter(([, v]) => v && v.trim()).map(([k, v]) => `${k}: ${v}`),
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    await transporter.sendMail({
      from: `"AdGalaxy Website" <${user}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject,
      text,
      html,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Mail send failed:", err);
    return res.status(500).json({ error: "Could not send message. Please try again." });
  }
}
