'use client';

import { useMemo, useState, type ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { cn } from '@/lib/cn';
import type { Dictionary, Lang } from '@/content/i18n';
import { createContactSchema, TOPICS, type ContactInput } from '@/lib/contact-schema';
import { buttonClasses } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';

type FormText = Dictionary['contact']['form'];

type Status =
  { type: 'idle' } | { type: 'success'; message: string } | { type: 'error'; message: string };

const inputClass =
  'w-full rounded-lg border border-line bg-surface px-4 py-3 text-ink transition-[border-color,box-shadow] placeholder:text-muted focus:border-brand focus:ring-4 focus:ring-brand/20 focus:outline-none aria-invalid:border-2 aria-invalid:border-accent';

function Field({
  id,
  label,
  error,
  optional,
  t,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  optional?: boolean;
  t: FormText;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold">
        {label}
        {optional && <span className="font-normal text-muted"> {t.optional}</span>}
      </label>
      {children}
      {error && (
        <p
          id={`${id}-error`}
          className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-ink"
        >
          <Icon name="alert" className="size-4 shrink-0" />
          <span className="sr-only">{t.errorPrefix} </span>
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm({ lang, t }: { lang: Lang; t: FormText }) {
  const [status, setStatus] = useState<Status>({ type: 'idle' });
  const schema = useMemo(() => createContactSchema(t.validation), [t.validation]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', company: '', message: '', consent: false, website: '' },
    mode: 'onTouched',
  });

  const describedBy = (field: keyof ContactInput) => (errors[field] ? `${field}-error` : undefined);

  const onSubmit = async (data: ContactInput) => {
    setStatus({ type: 'idle' });
    try {
      const res = await fetch(`/api/contact?lang=${lang}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { message?: string; error?: string };
      if (!res.ok) throw new Error(json.error ?? t.fallbackError);
      setStatus({ type: 'success', message: json.message ?? t.fallbackSuccess });
      reset();
    } catch (err) {
      setStatus({
        type: 'error',
        message: err instanceof Error ? err.message : t.unexpectedError,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="space-y-5"
      aria-label={t.ariaLabel}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label={t.name} error={errors.name?.message} t={t}>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={describedBy('name')}
            className={inputClass}
            {...register('name')}
          />
        </Field>
        <Field id="email" label={t.email} error={errors.email?.message} t={t}>
          <input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={describedBy('email')}
            className={inputClass}
            {...register('email')}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="company" label={t.company} optional error={errors.company?.message} t={t}>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            aria-invalid={errors.company ? true : undefined}
            aria-describedby={describedBy('company')}
            className={inputClass}
            {...register('company')}
          />
        </Field>
        <Field id="topic" label={t.topic} error={errors.topic?.message} t={t}>
          <select
            id="topic"
            aria-invalid={errors.topic ? true : undefined}
            aria-describedby={describedBy('topic')}
            className={cn(
              inputClass,
              'appearance-none bg-[length:1.25rem] bg-[right_0.75rem_center] bg-no-repeat pr-10',
            )}
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
            }}
            {...register('topic')}
          >
            <option value="">{t.topicPlaceholder}</option>
            {TOPICS.map((topic) => (
              <option key={topic} value={topic}>
                {t.topics[topic]}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field id="message" label={t.message} error={errors.message?.message} t={t}>
        <textarea
          id="message"
          rows={5}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={describedBy('message')}
          className={cn(inputClass, 'resize-y')}
          {...register('message')}
        />
      </Field>

      {/* Bal küpü: botlar doldurur, kullanıcılar görmez */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">{t.honeypot}</label>
        <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register('website')} />
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            type="checkbox"
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={describedBy('consent')}
            className="mt-0.5 size-5 shrink-0 cursor-pointer accent-(--brand)"
            {...register('consent')}
          />
          <label htmlFor="consent" className="cursor-pointer text-sm text-muted">
            {t.consent}
          </label>
        </div>
        {errors.consent && (
          <p
            id="consent-error"
            className="mt-1.5 flex items-center gap-1.5 text-sm font-medium text-ink"
          >
            <Icon name="alert" className="size-4 shrink-0" />
            <span className="sr-only">{t.errorPrefix} </span>
            {errors.consent.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={buttonClasses({ size: 'lg', className: 'w-full' })}
      >
        {isSubmitting ? (
          <>
            <span
              aria-hidden="true"
              className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            />
            {t.submitting}
          </>
        ) : (
          <>
            {t.submit}
            <Icon name="arrowRight" className="size-4" />
          </>
        )}
      </button>

      <div role="status" aria-live="polite">
        {status.type === 'success' && (
          <p className="flex animate-pop items-center gap-2 rounded-lg border border-l-4 border-ink border-l-brand bg-surface px-4 py-3 text-sm font-medium text-ink">
            <Icon name="checkCircle" className="size-5 shrink-0 text-brand" />
            <span>
              <strong className="font-semibold">{t.successTitle} </strong>
              {status.message}
            </span>
          </p>
        )}
      </div>
      {status.type === 'error' && (
        <p
          role="alert"
          className="flex animate-pop items-center gap-2 rounded-lg border border-l-4 border-ink border-l-accent bg-surface px-4 py-3 text-sm font-medium text-ink"
        >
          <Icon name="alert" className="size-5 shrink-0" />
          <span>
            <strong className="font-semibold">{t.failureTitle} </strong>
            {status.message}
          </span>
        </p>
      )}
    </form>
  );
}
