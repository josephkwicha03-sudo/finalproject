"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Send } from "lucide-react";
import { PROFILE } from "@/data/profile";

type Fields = { name: string; email: string; subject: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (values.message.trim().length < 10) errors.message = "Please write at least 10 characters.";
  return errors;
}

const inputClass =
  "mt-2 w-full rounded-lg border border-navy/15 bg-white px-4 py-3 text-navy placeholder:text-navy/40 transition-colors hover:border-navy/35 focus:border-cta focus:outline-none focus-visible:ring-2 focus-visible:ring-cta aria-[invalid=true]:border-red-500";

export function ContactForm() {
  const [values, setValues] = useState<Fields>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const update = (field: keyof Fields) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setStatus("idle");
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstError = Object.keys(found)[0];
    if (firstError) {
      setStatus("idle");
      document.getElementById(firstError)?.focus();
      return;
    }
    // There is no server endpoint, so the message is handed to the visitor's own email app.
    const subject = values.subject.trim() || `Portfolio enquiry from ${values.name.trim()}`;
    const body = `${values.message.trim()}\n\n- ${values.name.trim()} (${values.email.trim()})`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  };

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-navy">
            Name <span className="text-cta">*</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={update("name")}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={inputClass}
          />
          {errors.name && (
            <p id="name-error" className="mt-2 text-sm text-red-600">
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy">
            Email <span className="text-cta">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={inputClass}
          />
          {errors.email && (
            <p id="email-error" className="mt-2 text-sm text-red-600">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="text-sm font-medium text-navy">
          Subject <span className="text-navy/50">(optional)</span>
        </label>
        <input id="subject" name="subject" value={values.subject} onChange={update("subject")} className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-navy">
          Message <span className="text-cta">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={update("message")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${inputClass} resize-y`}
        />
        {errors.message && (
          <p id="message-error" className="mt-2 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-cta px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-cta/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta"
        >
          <Send className="h-4 w-4" aria-hidden /> Send message
        </button>
        <p role="status" aria-live="polite" className="text-sm text-navy/70">
          {status === "sent"
            ? "Your email app should open with the message ready to send. If nothing opens, email me directly at the address beside the form."
            : "Opens your email app with your message ready to send."}
        </p>
      </div>
    </form>
  );
}
