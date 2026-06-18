export default function WhatsAppFloating() {
  return (
    <a
      href="http://wa.me/554199210392"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 group"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-rose-400" />
        <div className="relative flex items-center justify-center w-36 h-36 sm:w-44 sm:h-44 rounded-full shadow-lg shadow-rose-300/40 hover:shadow-rose-400/60 hover:scale-110 transition-all duration-300 overflow-hidden">
          <img
            src="/whatsapp.png"
            alt="WhatsApp"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </a>
  )
}
