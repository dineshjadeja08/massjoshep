import React, { useState } from 'react';

export const FloatingWhatsApp: React.FC = () => {
  const [hovered, setHovered] = useState(false);

  // Configurable WhatsApp phone number via Vite env var, falling back to corporate contact
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '918428392629';
  const defaultMessage = encodeURIComponent(
    "Hello Veluno Softtech! I'm interested in your software development services. I'd like to discuss my project."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="Direct WhatsApp Chat"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 select-none"
    >
      {/* Tooltip Pill */}
      {hovered && (
        <div className="hidden sm:flex items-center px-3.5 py-1.5 rounded-lg bg-[#0B1F3A] text-white text-xs font-mono font-medium shadow-lg border border-slate-700 animate-fadeIn whitespace-nowrap">
          <span>Chat on WhatsApp</span>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Open WhatsApp chat with Veluno Softtech"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-2xl hover:scale-108 active:scale-95 transition-all duration-200 group focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Subtle breathing ambient ripple */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:opacity-0"
          aria-hidden="true"
        />

        {/* Official WhatsApp SVG Vector Icon */}
        <svg
          viewBox="0 0 32 32"
          className="w-7 h-7 fill-current relative z-10 drop-shadow-xs"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.738.784 5.302 2.146 7.484L2.086 29.58a1 1 0 0 0 1.258 1.258l6.196-2.06A13.91 13.91 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6c-2.348 0-4.576-.664-6.48-1.828a1 1 0 0 0-.74-.118l-4.542 1.514 1.514-4.542a1 1 0 0 0-.118-.74A11.536 11.536 0 0 1 4.4 16C4.4 9.604 9.604 4.4 16 4.4S27.6 9.604 27.6 16 22.396 27.6 16 27.6zm6.36-8.718c-.348-.174-2.062-1.018-2.382-1.134-.32-.116-.552-.174-.784.174s-.9 1.134-1.104 1.366c-.204.232-.406.262-.754.088-.348-.174-1.47-.542-2.8-1.728-1.036-.924-1.736-2.064-1.94-2.412-.204-.348-.022-.536.152-.71.156-.156.348-.406.522-.61.174-.204.232-.348.348-.58.116-.232.058-.436-.03-.61-.088-.174-.784-1.89-1.074-2.586-.282-.676-.57-.584-.784-.594-.204-.01-.436-.012-.668-.012-.232 0-.61.088-.93.436-.32.348-1.22 1.192-1.22 2.906 0 1.714 1.248 3.37 1.422 3.602.174.232 2.456 3.75 5.95 5.26 3.494 1.51 3.494 1.008 4.122.95.628-.058 2.062-.842 2.352-1.656.29-.814.29-1.51.204-1.656-.088-.146-.32-.232-.668-.406z" />
        </svg>
      </a>
    </aside>
  );
};

export default FloatingWhatsApp;
