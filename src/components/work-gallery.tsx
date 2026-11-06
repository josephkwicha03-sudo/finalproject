"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { WORK } from "@/data/work";

export function WorkGallery() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const step = (delta: number) => setIndex((i) => (i + delta + WORK.length) % WORK.length);

  const current = WORK[index];

  return (
    <>
      <ul className="grid gap-6 md:grid-cols-2">
        {WORK.map((item, i) => (
          <li key={item.src}>
            <button
              type="button"
              onClick={() => open(i)}
              aria-label={`Open design work sample ${i + 1} in a larger view`}
              className="group block w-full overflow-hidden rounded-2xl border border-border bg-card text-left transition-shadow hover:shadow-lg focus-visible:outline-2 focus-visible:outline-ring"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.src}
                  alt={`Design work sample ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="px-5 py-4 text-sm font-medium">{item.caption}</p>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-label="Design work viewer"
        onClick={(e) => {
          // Clicking the dimmed backdrop (the dialog element itself) closes the viewer.
          if (e.target === dialogRef.current) close();
        }}
        className="m-auto w-[min(94vw,1200px)] max-w-none rounded-2xl border border-border bg-card p-0 text-foreground shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm open:animate-in open:fade-in open:zoom-in-95"
      >
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3">
          <p className="text-sm font-medium">
            {index + 1} / {WORK.length} · {current.caption}
          </p>
          <button
            type="button"
            onClick={close}
            aria-label="Close viewer"
            className="grid h-9 w-9 place-items-center rounded-full hover:bg-muted"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <div className="relative h-[min(84vh,900px)] bg-muted/40">
          <Image
            key={current.src}
            src={current.src}
            alt={`Design work sample ${index + 1}`}
            fill
            sizes="(min-width: 1200px) 1200px, 94vw"
            className="object-contain p-2"
          />
          {WORK.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous sample"
                className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-background/90 shadow hover:bg-background"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next sample"
                className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-background/90 shadow hover:bg-background"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </>
          )}
        </div>
      </dialog>
    </>
  );
}
