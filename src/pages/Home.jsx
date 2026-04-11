import { useNavigate } from "react-router-dom";
import coupleImg from "../assets/Suraj_Rani.png";

export default function Home() {
  const navigate = useNavigate();

  const selectRole = (role) => {
    localStorage.setItem("role", role);
    localStorage.setItem("session_id", crypto.randomUUID());
    navigate("/chat");
  };

  return (
    <div className="h-screen bg-neutral-950 flex flex-col items-center justify-between px-6 py-8 relative overflow-hidden">

      {/* background glows */}
      <div className="absolute top-[-60px] left-[-60px] w-64 h-64 bg-amber-400 opacity-[0.06] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-60px] w-64 h-64 bg-rose-400 opacity-[0.07] rounded-full blur-3xl pointer-events-none" />

      {/* TOP — tag */}
      <p className="relative z-10 text-xs tracking-[0.25em] uppercase text-amber-600 font-light">
        An Exclusive Celebration
      </p>

      {/* MIDDLE — main content */}
      <div className="relative z-10 flex flex-col items-center gap-4 w-full">

        {/* couple photo */}
        <div className="w-24 h-24 rounded-full border-2 border-amber-500 p-0.5 shadow-lg shadow-amber-900/30">
          <img
            src={coupleImg}
            alt="Suraj & Rani"
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        {/* names */}
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-4xl font-light text-amber-100 tracking-tight text-center leading-tight">
            Suraj <span className="text-rose-400 font-extralight">&</span> Rani
          </h1>
          <p className="text-xs text-neutral-500 tracking-[0.2em] uppercase font-light">
            16-22 April 2026 ·Ara-Arwal (Bihar)
          </p>
        </div>

        {/* divider */}
        <div className="flex items-center gap-3 w-full max-w-[260px]">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-40" />
          <span className="text-amber-500 text-sm">◆</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent opacity-40" />
        </div>

        {/* subtitle */}
        <p className="text-neutral-400 text-xs text-center font-light leading-relaxed max-w-[260px]">
          Welcome to the AI wedding Assistant of Suraj & Rani.
          <br />Please select your side to continue.
        </p>

        {/* role cards */}
        <div className="flex gap-3 w-full max-w-sm mt-1">

          {/* Ladkewale */}
          <button
            onClick={() => selectRole("ladkewale")}
            className="group flex-1 flex flex-col items-center gap-2 px-4 py-5 bg-neutral-900 border border-neutral-700 hover:border-amber-500 active:scale-95 rounded-2xl transition-all duration-200"
          >
            <span className="text-2xl transition-transform duration-200 group-hover:scale-110">
              🤵
            </span>
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-amber-100 text-sm font-light tracking-wide">
                Ladkewale
              </span>
              <span className="text-neutral-500 text-[10px] tracking-widest uppercase">
                Suraj's Side
              </span>
            </div>
            <span className="text-amber-500 text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Enter →
            </span>
          </button>

          {/* Ladkiwale */}
          <button
            onClick={() => selectRole("ladkiwale")}
            className="group flex-1 flex flex-col items-center gap-2 px-4 py-5 bg-neutral-900 border border-neutral-700 hover:border-rose-400 active:scale-95 rounded-2xl transition-all duration-200"
          >
            <span className="text-2xl transition-transform duration-200 group-hover:scale-110">
              👰
            </span>
            <div className="flex flex-col items-center gap-0.5">
              <span className="text-rose-100 text-sm font-light tracking-wide">
                Ladkiwale
              </span>
              <span className="text-neutral-500 text-[10px] tracking-widest uppercase">
                Rani's Side
              </span>
            </div>
            <span className="text-rose-400 text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Enter →
            </span>
          </button>

        </div>
      </div>

      {/* BOTTOM — footer */}
      <div className="relative z-10 flex flex-col items-center gap-2">
        <div className="flex items-center gap-3 w-full max-w-[200px]">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
          <span className="text-neutral-700 text-xs">✦</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
        </div>
        <p className="text-neutral-700 text-[10px] tracking-[0.2em] uppercase font-light">
          Develop by: Ashutosh Pandit
        </p>
      </div>

    </div>
  );
}