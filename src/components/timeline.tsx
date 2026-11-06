import { TIMELINE } from "@/data/experience";

export function Timeline() {
  return (
    <ol className="relative mx-auto max-w-3xl border-l border-border pl-8">
      {TIMELINE.map((item) => (
        <li key={`${item.title}-${item.period}`} className="mb-10 last:mb-0">
          <span
            aria-hidden
            className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary"
          />
          <p className="text-sm font-medium text-primary">{item.period}</p>
          <h3 className="mt-1 text-xl font-semibold">{item.title}</h3>
          <p className="text-muted-foreground">
            {item.organization}
            <span className="sr-only"> ({item.kind})</span>
          </p>
          {item.details.length > 0 && (
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
              {item.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
