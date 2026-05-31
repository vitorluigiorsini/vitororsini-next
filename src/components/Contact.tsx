"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { CONTACT_INFO, STYLES, contactText } from "@/lib/constants";
import { useAppLanguageContext } from "@/contexts/LanguageContext";
import { Section } from "./Section";
import { contactSchema } from "@/lib/validations";

export function Contact() {
  const { t } = useAppLanguageContext();

  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  const [sentMessage, setSentMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});
    setSentMessage("");

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as string;
        if (!fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          to_name: CONTACT_INFO.authorName,
          to_email: CONTACT_INFO.email,
          message: form.message,
          reply_to: form.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_API!
      );

      setLoading(false);
      setSentMessage(t(contactText.sentOk));
      setForm({ name: "", email: "", message: "" });
    } catch {
      setLoading(false);
      setSentMessage(t(contactText.sentError));
    }
  }

  function handleCopyEmail() {
    navigator.clipboard.writeText(contactText.clipboardEmail);
    setCopiedToClipboard(true);
    setTimeout(() => setCopiedToClipboard(false), 5000);
  }

  return (
    <Section id="contact">
      <div className="mx-auto max-w-lg">
        <p className={STYLES.sectionSubText}>{t(contactText.title)}</p>
        <h3 className={STYLES.sectionHeadText}>{t(contactText.subtitle)}</h3>

        {!copiedToClipboard ? (
          <>
            <p className="text-white font-medium mt-4 text-center">
              {t(contactText.copyToClipboardText)}
            </p>
            <button
              onClick={handleCopyEmail}
              className="flex mx-auto mt-4 bg-secondary text-text-primary hover:bg-secondary/90 p-2.5 outline-none w-12 h-12 text-sm rounded-md transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 items-center justify-center cursor-pointer"
            >
              ✉️
            </button>
          </>
        ) : (
          <p className="text-white font-medium mt-4 text-center">
            {t(contactText.copiedToClipboardText)}
          </p>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-4"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">
              {t(contactText.name)}
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder={t(contactText.namePlaceholder)}
              className="bg-gray-900/60 border border-white/10 placeholder:text-white/50 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-transparent"
            />
            {errors.name && (
              <span className="text-red-400 text-xs mt-1">{errors.name}</span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">
              {t(contactText.email)}
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder={t(contactText.emailPlaceholder)}
              className="bg-gray-900/60 border border-white/10 placeholder:text-white/50 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-transparent"
            />
            {errors.email && (
              <span className="text-red-400 text-xs mt-1">{errors.email}</span>
            )}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">
              {t(contactText.message)}
            </span>
            <textarea
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder={t(contactText.messagePlaceholder)}
              className="bg-gray-900/60 border border-white/10 placeholder:text-white/50 text-white rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-transparent"
            />
            {errors.message && (
              <span className="text-red-400 text-xs mt-1">{errors.message}</span>
            )}
          </label>

          <label className="flex justify-center text-sm">{sentMessage}</label>

            <button
              type="submit"
              disabled={loading}
              className="flex mx-auto mt-4 bg-secondary text-text-primary hover:bg-secondary/90 py-3 px-6 outline-none w-36 text-sm font-bold shadow-md shadow-primary rounded-lg transition-all duration-150 transform hover:-translate-y-0.5 active:translate-y-0 items-center justify-center cursor-pointer disabled:cursor-not-allowed"
            >
              {loading ? t(contactText.sending) : t(contactText.send)}
            </button>
        </form>
      </div>
    </Section>
  );
}
