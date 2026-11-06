// A moving band of service names taken from the site's own service and skill lists.
// It slides continuously and stops for reduced-motion users (see .ticker-track in globals.css).
const items = [
  "Graphic design",
  "Brand identity",
  "Software development",
  "Church media",
  "Digital commerce",
  "Video editing",
];

export function Ticker() {
  const row = [...items, ...items];
  return (
    <div aria-hidden className="overflow-hidden bg-steel py-5 text-navy">
      <div className="ticker-track flex w-max items-center gap-10 whitespace-nowrap font-serif text-2xl font-medium uppercase tracking-wide md:text-3xl">
        {row.map((text, i) => (
          <span key={`${text}-${i}`} className="flex items-center gap-10">
            {text}
            <span className="text-cta">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
