import { site } from "../data/site";

export default function WhatsAppFab() {
  return (
    <a
      href={site.contact.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-900/20 ring-1 ring-black/5 transition hover:scale-105 hover:bg-[#1ebe57] sm:bottom-7 sm:right-7"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="relative"
      >
        <path d="M17.6 6.3A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.88 11.93L4 20l4.2-1.1a7.93 7.93 0 0 0 3.85 1 7.94 7.94 0 0 0 7.94-7.93 7.9 7.9 0 0 0-2.39-5.67zM12.05 18.5a6.59 6.59 0 0 1-3.36-.92l-.24-.14-2.5.66.67-2.43-.16-.25a6.59 6.59 0 0 1 10.23-8.17 6.54 6.54 0 0 1 1.93 4.66 6.6 6.6 0 0 1-6.57 6.59zm3.62-4.93c-.2-.1-1.17-.58-1.35-.64s-.31-.1-.45.1-.51.64-.62.77-.23.15-.43.05a5.39 5.39 0 0 1-1.59-.98 6 6 0 0 1-1.1-1.37c-.12-.2 0-.31.09-.41s.2-.23.3-.35a1.36 1.36 0 0 0 .19-.34.37.37 0 0 0 0-.35c0-.1-.45-1.08-.62-1.48s-.33-.34-.45-.34h-.39a.74.74 0 0 0-.53.25 2.26 2.26 0 0 0-.7 1.68 3.91 3.91 0 0 0 .82 2.08 9 9 0 0 0 3.44 3.04c.48.21.85.33 1.14.42a2.76 2.76 0 0 0 1.26.08 2.07 2.07 0 0 0 1.36-.96 1.69 1.69 0 0 0 .11-.96c-.05-.08-.18-.13-.38-.23z" />
      </svg>
    </a>
  );
}
