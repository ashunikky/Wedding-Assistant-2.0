export default function MessageBubble({ sender, text, image }) {
  const isUser = sender === "user";

  const getUrlType = (url) => {
    if (/linkedin\.com/i.test(url)) return "linkedin";
    if (/travelmode|\/dir\b|\/directions/i.test(url)) return "route";
    if (/maps\.app\.goo\.gl|google\.com\/maps|maps\.google/i.test(url)) return "maps";
    return "generic";
  };

  const urlRegex = /(https?:\/\/[^\s]+)/g;

  const formatText = (rawText) => {
    const parts = rawText.split(urlRegex);

    return parts.map((part, index) => {
      if (!part.match(urlRegex)) {
        return <span key={index}>{part}</span>;
      }

      const type = getUrlType(part);

      if (type === "maps") {
        return (
          <a key={index} href={part} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 mt-2 px-3 py-2 rounded-xl bg-neutral-800 border border-neutral-700 hover:border-amber-500 transition-colors duration-200 w-fit group">
            <span className="text-base">📍</span>
            <div className="flex flex-col">
              <span className="text-amber-300 text-xs font-medium group-hover:text-amber-200">
                View Location
              </span>
              <span className="text-neutral-500 text-[10px]">Google Maps</span>
            </div>
            <span className="text-neutral-600 group-hover:text-amber-400 text-xs ml-1">↗</span>
          </a>
        );
      }

      if (type === "route") {
        return (
          <a key={index} href={part} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 mt-2 px-3 py-2 rounded-xl bg-neutral-800 border border-neutral-700 hover:border-rose-400 transition-colors duration-200 w-fit group">
            <span className="text-base">🗺️</span>
            <div className="flex flex-col">
              <span className="text-rose-300 text-xs font-medium group-hover:text-rose-200">
                Get Directions
              </span>
              <span className="text-neutral-500 text-[10px]">Google Maps Route</span>
            </div>
            <span className="text-neutral-600 group-hover:text-rose-400 text-xs ml-1">↗</span>
          </a>
        );
      }

      if (type === "linkedin") {
        const match = part.match(/linkedin\.com\/in\/([^/?#\s]+)/i);
        const handle = match ? `@${match[1]}` : "LinkedIn Profile";

        return (
          <a key={index} href={part} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 mt-2 px-3 py-2 rounded-xl bg-neutral-800 border border-neutral-700 hover:border-blue-400 transition-colors duration-200 w-fit group">
            <span className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
              in
            </span>
            <div className="flex flex-col">
              <span className="text-blue-300 text-xs font-medium group-hover:text-blue-200">
                {handle}
              </span>
              <span className="text-neutral-500 text-[10px]">LinkedIn Profile</span>
            </div>
            <span className="text-neutral-600 group-hover:text-blue-400 text-xs ml-1">↗</span>
          </a>
        );
      }

      return (
        <a key={index} href={part} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-2 mt-2 px-3 py-2 rounded-xl bg-neutral-800 border border-neutral-700 hover:border-amber-500 transition-colors duration-200 w-fit group">
          <span className="text-base">🔗</span>
          <div className="flex flex-col">
            <span className="text-amber-300 text-xs font-medium break-all">
              {part.length > 40 ? part.slice(0, 40) + "…" : part}
            </span>
            <span className="text-neutral-500 text-[10px]">External Link</span>
          </div>
          <span className="text-neutral-600 group-hover:text-amber-400 text-xs ml-1">↗</span>
        </a>
      );
    });
  };

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] px-4 py-3 rounded-2xl shadow-md text-sm leading-relaxed ${
          isUser
            ? "bg-amber-500 text-neutral-950 rounded-br-none font-medium"
            : "bg-neutral-900 border border-neutral-800 text-neutral-100 rounded-bl-none"
        }`}
      >
        <div className="flex flex-col">

          {/* ✅ IMAGE FIRST */}
          {image && (
            <img
              src={image}
              alt="response"
              className="mb-3 rounded-xl max-h-52 object-cover border border-neutral-700"
            />
          )}

          {/* ✅ TEXT AFTER */}
          <div className="whitespace-pre-line">
            {formatText(text)}
          </div>

        </div>
      </div>
    </div>
  );
}