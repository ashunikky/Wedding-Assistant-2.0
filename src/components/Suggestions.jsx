const SUGGESTIONS = [
  { label: "Live event", query: "Is there any live event?" },
  { label: "Barat", query: "Barat departure and Barat procession" },
  { label: "reception", query: "reception" },
  { label: "Groom", query: "who is the groom?" },
  { label: "Bride", query: "who is the bride?" },
  { label: "Developer", query: "Who developed this wedding assistant?" }
];

export default function Suggestions({ onSelect }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
      {SUGGESTIONS.map((item, i) => (
        <button
          key={i}
          onClick={() => onSelect(item.query)}
          className="flex-shrink-0 px-4 py-2 bg-neutral-900 border border-neutral-700 hover:border-amber-500 hover:text-amber-300 text-neutral-400 text-xs tracking-wide rounded-full transition-all duration-200 whitespace-nowrap"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}