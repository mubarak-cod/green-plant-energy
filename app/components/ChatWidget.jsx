"use client";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Bot, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatWidget({
  phone = "+2348012345678",           // <-- CHANGE THIS to your WhatsApp number
  welcome = "Hi there! I’m your AI assistant 🤖. How can I help?",
  ctaText = "Chat on WhatsApp",
  presetText = "Hello! I’d like to chat.",
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  // Close on outside click or ESC
  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") setOpen(false); }
    function onClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  const openWhatsApp = () => {
    const numeric = phone.replace(/[^\d]/g, ""); // wa.me needs digits only
    const url = `https://wa.me/${numeric}?text=${encodeURIComponent(presetText)}`;
    window.open(url, "_blank", "noopener");
  };

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      aria-live="polite"
    >
      {/* Popover / Mini chat card */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="w-[20rem] max-w-[85vw] rounded-2xl shadow-2xl bg-white ring-1 ring-black/5 overflow-hidden"
            role="dialog"
            aria-label="Chat popup"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                <span className="font-semibold">Chat with us</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close chat popup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-4 py-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                {welcome}
              </p>

              <button
                onClick={openWhatsApp}
                className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white hover:bg-emerald-700 active:bg-emerald-800 transition focus:outline-none focus:ring-2 focus:ring-emerald-400"
              >
                {ctaText}
                <ChevronRight className="w-4 h-4" />
              </button>

              <p className="mt-2 text-[11px] text-gray-500">
                You’ll be redirected to WhatsApp to continue the conversation.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button + label */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="chat-popover"
          className="relative inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 text-white shadow-lg hover:shadow-xl hover:bg-emerald-700 active:bg-emerald-800 transition focus:outline-none focus:ring-2 focus:ring-emerald-400"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="sr-only">Chat with us</span>

          {/* pulse accent */}
          <span className="absolute inset-0 rounded-full animate-ping bg-emerald-500/40 pointer-events-none" />
        </button>

        {/* “Chat with us” pill (clickable too) */}
        <button
          onClick={() => setOpen(true)}
          className="hidden sm:inline-flex items-center rounded-full bg-white/90 backdrop-blur px-4 py-2 text-sm font-medium text-gray-800 shadow-md ring-1 ring-black/5 hover:bg-white"
        >
          Chat with us
        </button>
      </div>
    </div>
  );
}
