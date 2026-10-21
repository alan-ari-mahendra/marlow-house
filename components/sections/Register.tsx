"use client";

import { useRef, useState, type FormEvent } from "react";
import { CheckCircleIcon } from "@/components/ui/Icon";
import { registerSection as copy } from "@/lib/data";

type RequiredField = keyof typeof copy.errors;

const requiredFields: { name: RequiredField; label: string; type: "text" | "email" | "tel"; autoComplete: string }[] = [
  { name: "fname", label: "First name", type: "text", autoComplete: "given-name" },
  { name: "lname", label: "Last name", type: "text", autoComplete: "family-name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValid(name: RequiredField, value: string) {
  const v = value.trim();
  return name === "email" ? EMAIL_RE.test(v) : v.length > 0;
}

export default function Register() {
  const [errors, setErrors] = useState<Partial<Record<RequiredField, boolean>>>({});
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef<HTMLDivElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const next: Partial<Record<RequiredField, boolean>> = {};
    let firstInvalid: HTMLInputElement | null = null;

    for (const f of requiredFields) {
      const input = form.elements.namedItem(f.name) as HTMLInputElement;
      if (!isValid(f.name, input.value)) {
        next[f.name] = true;
        firstInvalid ??= input;
      }
    }

    setErrors(next);
    if (firstInvalid) {
      firstInvalid.focus();
      return;
    }

    // Phase 1: no backend. Payload is collected here for the future integration.
    setSubmitted(true);
    requestAnimationFrame(() => successRef.current?.focus());
  }

  function clearError(name: RequiredField) {
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: false }));
  }

  return (
    <section id="register" className="section">
      <div className="container-x">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h2>{copy.title}</h2>
        <div className="max-w-[860px] rounded-base border border-line bg-grey px-5 py-7 md:p-12">
          {submitted ? (
            <div
              ref={successRef}
              tabIndex={-1}
              role="status"
              aria-live="polite"
              className="py-10 text-center focus:outline-none"
            >
              <CheckCircleIcon className="mx-auto mb-5 size-10 text-blue" />
              <h3 className="text-[22px]">{copy.success.title}</h3>
              <p className="mt-3">{copy.success.body}</p>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
                {requiredFields.map((f) => {
                  const invalid = Boolean(errors[f.name]);
                  return (
                    <div key={f.name} className="flex flex-col gap-2">
                      <label htmlFor={f.name} className="label">
                        {f.label}
                      </label>
                      <input
                        id={f.name}
                        name={f.name}
                        type={f.type}
                        autoComplete={f.autoComplete}
                        required
                        aria-invalid={invalid}
                        aria-describedby={invalid ? `${f.name}-error` : undefined}
                        onInput={() => clearError(f.name)}
                        className="input"
                      />
                      {invalid && (
                        <span id={`${f.name}-error`} className="text-xs text-error">
                          {copy.errors[f.name]}
                        </span>
                      )}
                    </div>
                  );
                })}

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="rtype" className="label">
                    Residence type
                  </label>
                  <select
                    id="rtype"
                    name="rtype"
                    defaultValue={copy.defaultResidenceType}
                    className="input select"
                  >
                    {copy.residenceTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <fieldset className="md:col-span-2">
                  <legend className="label">Buyer type</legend>
                  <div className="mt-2.5 flex flex-wrap gap-6">
                    {copy.buyerTypes.map((t, i) => (
                      <label key={t} className="inline-flex cursor-pointer items-center gap-2.5 text-[15px]">
                        <input
                          type="radio"
                          name="btype"
                          value={t}
                          defaultChecked={i === 0}
                          className="m-0 size-[18px] accent-ink"
                        />
                        {t}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="mt-1.5 md:col-span-2">
                  <label className="inline-flex cursor-pointer items-center gap-2.5 text-[15px]">
                    <input type="checkbox" name="brochure" defaultChecked className="m-0 size-[18px] accent-ink" />
                    {copy.brochureLabel}
                  </label>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-6 border-t border-line pt-7">
                <p className="max-w-[44ch] text-[13px]">{copy.footnote}</p>
                <button type="submit" className="btn btn-primary w-full md:w-auto">
                  {copy.submit}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
