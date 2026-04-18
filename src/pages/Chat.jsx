import { useState, useRef, useEffect } from "react";
import { sendMessage } from "../services/api";
import MessageBubble from "../components/MessageBubble";
import Suggestions from "../components/Suggestions";
import RoleSwitchModal from "../components/RoleSwitchModal";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const bottomRef = useRef(null);
  const navigate = useNavigate();

  const role = localStorage.getItem("role");
  const isLadkewale = role === "ladkewale";

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          sender: "bot",
          text: "Namaste! 🙏 Main shaadi se jude sawaalon ka uttar de sakta hun. Aap kya jaanana chaahenge?",
        },
      ]);
    }
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const res = await sendMessage(input);

    
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: res.answer, image: res.image },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Kuch galat ho gaya 😅 Thodi der baad dobara try karein.",
        },
      ]);
    }

    setInput("");
    setLoading(false);
  };

  const handleSwitchRole = () => setShowModal(true);

  const confirmSwitch = () => {
  const newRole = isLadkewale ? "ladkiwale" : "ladkewale";

  localStorage.setItem("role", newRole);
  localStorage.setItem("session_id", crypto.randomUUID());

  setShowModal(false);
  setMessages([
    {
      sender: "bot",
      text: "Namaste! 🙏 Main shaadi se jude sawaalon ka uttar de sakta hun. Aap kya jaanana chaahenge?",
    },
  ]);
  setInput("");
};

  const cancelSwitch = () => setShowModal(false);

  return (
    <div className="h-screen flex flex-col bg-neutral-950 relative overflow-hidden">

      {/* background glows */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-400 opacity-[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-rose-400 opacity-[0.05] rounded-full blur-3xl pointer-events-none" />

      {/* ✅ NEW HEADER */}
      <div className="relative z-10 bg-neutral-900 border-b border-neutral-800">

        {/* top gold line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-60" />

        <div className="px-5 py-3 flex justify-between items-center">

          {/* left */}
          <div className="flex flex-col gap-1">

            <div className="flex items-center gap-2">
              <span className="text-amber-500 text-xs">◆</span>
              <h2 className="text-amber-100 font-light text-base tracking-widest uppercase">
                Suraj <span className="text-rose-400 font-extralight px-1">&</span> Rani
              </h2>
              <span className="text-amber-500 text-xs">◆</span>
            </div>

            <div className="flex items-center gap-2 pl-4">
              <span className="text-[10px] tracking-[0.18em] uppercase text-neutral-500 font-light">
                Wedding Assistant
              </span>
              <span className="text-neutral-700 text-[8px]">|</span>
              <span
                className={`text-[10px] tracking-wide font-light ${
                  isLadkewale ? "text-amber-600" : "text-rose-400"
                }`}
              >
                {isLadkewale ? "Suraj's side" : "Rani's side"}
              </span>
            </div>

          </div>

          {/* right */}
          <button
            onClick={handleSwitchRole}
            className="flex items-center gap-1.5 text-[11px] text-neutral-400 border border-neutral-700 hover:border-amber-500 hover:text-amber-300 px-3 py-1.5 rounded-full transition-all duration-200 tracking-wide"
          >
            <span className="text-xs">⇄</span>
            <span>Switch</span>
          </button>

        </div>

        {/* bottom line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      </div>

      {/* SUGGESTIONS */}
      <div className="relative z-10 px-4 pt-3">
        <Suggestions onSelect={(text) => setInput(text)} />
      </div>

      {/* CHAT AREA */}
      <div className="relative z-10 flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((msg, i) => (
          <MessageBubble key={i} {...msg} />
        ))}

        {loading && (
          <div className="flex items-center gap-2 pl-1">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce [animation-delay:0ms]" />
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce [animation-delay:150ms]" />
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-bounce [animation-delay:300ms]" />
            </div>
            <span className="text-neutral-500 text-xs font-light tracking-wide">
              Assistant is thinking...
            </span>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* INPUT */}
      <div className="relative z-10 px-4 py-3 bg-neutral-900 border-t border-neutral-800 flex gap-3 items-center">
        <input
          className="flex-1 bg-neutral-950 border border-neutral-700 focus:border-amber-500 text-neutral-100 placeholder-neutral-600 rounded-full px-5 py-2.5 text-sm outline-none"
          placeholder="Ask your question..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
        />

        <button
          onClick={send}
          disabled={loading}
          className="bg-amber-500 hover:bg-amber-400 text-neutral-950 font-medium text-sm px-5 py-2.5 rounded-full transition-all duration-200"
        >
          Send ✦
        </button>
      </div>

      {/* MODAL */}
      {showModal && (
        <RoleSwitchModal onConfirm={confirmSwitch} onCancel={cancelSwitch} />
      )}
    </div>
  );
}