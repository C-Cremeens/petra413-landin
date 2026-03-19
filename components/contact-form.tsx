'use client';

import { FormEvent, useState } from 'react';

type FormState = {
  type: 'idle' | 'success' | 'error';
  message: string;
};

const initialState: FormState = {
  type: 'idle',
  message: '',
};

export function ContactForm() {
  const [status, setStatus] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(initialState);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? 'Something went wrong while sending your message.');
      }

      form.reset();
      setStatus({
        type: 'success',
        message: result.message ?? 'Thanks! Your message was sent successfully.',
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Something went wrong while sending your message.',
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="section-border rounded-[2rem] p-8" onSubmit={handleSubmit}>
      <div className="grid gap-5">
        <label className="grid gap-2 text-sm text-slate-300">
          Name
          <input
            type="text"
            name="name"
            required
            className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-steel-400"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          Email
          <input
            type="email"
            name="email"
            required
            className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-steel-400"
            placeholder="you@example.com"
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          What are you working on?
          <textarea
            name="message"
            rows={5}
            required
            className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-white outline-none transition focus:border-steel-400"
            placeholder="A rough idea, a workflow problem, or a tool you want to build"
          />
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-full bg-steel-500 px-5 py-3 text-sm font-semibold tracking-wide text-slate-950 transition duration-300 hover:bg-steel-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-steel-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? 'Sending...' : 'Send message'}
        </button>
        <p
          className={`rounded-2xl border px-4 py-3 text-sm ${
            status.type === 'success'
              ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200'
              : status.type === 'error'
                ? 'border-rose-400/30 bg-rose-400/10 text-rose-200'
                : 'hidden'
          }`}
          role={status.type === 'error' ? 'alert' : 'status'}
          aria-live="polite"
        >
          {status.message}
        </p>
      </div>
    </form>
  );
}
