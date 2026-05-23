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
        <path d="M20.5 3.5A10.5 10.5 0 0 0 3.6 16.3L2 22l5.8-1.5A10.5 10.5 0 1 0 20.5 3.5zM12 20.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.4.9.9-3.3-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.7-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4 0-.4.2-.6l.4-.5c.1-.1.1-.3 0-.5L9.6 8.6c-.2-.4-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.9 2.9 0 0 0-.9 2.2 5 5 0 0 0 1 2.7 11.4 11.4 0 0 0 4.4 3.9c.6.3 1.1.4 1.5.5a3.4 3.4 0 0 0 1.6 0 2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .1-1.2c-.1-.1-.2-.2-.5-.3z" />
      </svg>
    </a>
  );
}
