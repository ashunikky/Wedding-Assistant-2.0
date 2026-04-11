export default function RoleSwitchModal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl w-full max-w-sm p-6 flex flex-col gap-5">

        {/* icon + title */}
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-2xl">
            🔄
          </div>
          <h2 className="text-amber-100 text-lg font-light tracking-wide">
            Switch Side?
          </h2>
        </div>

        {/* divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
          <span className="text-neutral-700 text-xs">◆</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
        </div>

        {/* body */}
        <p className="text-neutral-400 text-sm text-center font-light leading-relaxed">
          Switching sides will clear your current chat and start a fresh session.
          <br />
          <span className="text-amber-500 text-xs tracking-wide">
            This action cannot be undone.
          </span>
        </p>

        {/* buttons */}
        <div className="flex gap-3 mt-1">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2.5 rounded-full border border-neutral-700 hover:border-neutral-500 text-neutral-400 hover:text-neutral-200 text-sm font-light tracking-wide transition-all duration-200"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 active:scale-95 text-neutral-950 text-sm font-medium tracking-wide transition-all duration-200"
          >
            Yes, Switch ✦
          </button>
        </div>

      </div>
    </div>
  );
}