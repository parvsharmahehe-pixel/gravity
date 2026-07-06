import { useMemo, useState } from "react";
import { z } from "zod";
import { Calendar, Clock, MessageCircle, Phone, Sparkles, User } from "lucide-react";

const SAJID_WA_NUMBER = "918800778800";
const RASHID_WA_NUMBER = "917862020207";

const SERVICES = [
  "Hair Cut (Men)",
  "Hair Cut (Women)",
  "Hair Colour",
  "Hair Spa",
  "Keratin Treatment",
  "Smoothening",
  "Rebonding",
  "Facial",
  "Clean Up",
  "Bridal Makeup",
  "Beard Styling",
  "Manicure & Pedicure",
  "Other / Consultation",
] as const;

const STYLISTS = [
  { value: "any", label: "No preference", number: SAJID_WA_NUMBER },
  { value: "sajid", label: "Sajid", number: SAJID_WA_NUMBER },
  { value: "rashid", label: "Rashid", number: RASHID_WA_NUMBER },
] as const;

const TIME_SLOTS = [
  "10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM",
  "01:00 PM","01:30 PM","02:00 PM","02:30 PM","03:00 PM","03:30 PM",
  "04:00 PM","04:30 PM","05:00 PM","05:30 PM","06:00 PM","06:30 PM",
  "07:00 PM","07:30 PM","08:00 PM","08:30 PM","09:00 PM","09:30 PM",
];

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s]{7,15}$/u, "Enter a valid phone number"),
  service: z.enum(SERVICES, { message: "Pick a service" }),
  stylist: z.enum(["any", "sajid", "rashid"]),
  date: z
    .string()
    .min(1, "Pick a date")
    .refine((d) => {
      const picked = new Date(d + "T00:00:00");
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return picked.getTime() >= today.getTime();
    }, "Date cannot be in the past"),
  time: z.string().min(1, "Pick a time"),
  notes: z.string().trim().max(300, "Notes must be under 300 characters").optional(),
});

type BookingForm = z.infer<typeof bookingSchema>;
type FormErrors = Partial<Record<keyof BookingForm, string>>;

const todayIso = () => {
  const d = new Date();
  const tz = d.getTimezoneOffset();
  return new Date(d.getTime() - tz * 60_000).toISOString().slice(0, 10);
};

const formatDateLong = (iso: string) => {
  try {
    return new Date(iso + "T00:00:00").toLocaleDateString("en-IN", {
      weekday: "short", day: "numeric", month: "short", year: "numeric",
    });
  } catch {
    return iso;
  }
};

export function BookingForm() {
  const [form, setForm] = useState<BookingForm>({
    name: "",
    phone: "",
    service: "Hair Cut (Women)",
    stylist: "any",
    date: todayIso(),
    time: "11:00 AM",
    notes: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const minDate = useMemo(() => todayIso(), []);

  const update = <K extends keyof BookingForm>(k: K, v: BookingForm[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = bookingSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof BookingForm;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);

    const data = parsed.data;
    const stylistMeta = STYLISTS.find((s) => s.value === data.stylist) ?? STYLISTS[0];
    const stylistLabel = data.stylist === "any" ? "Any available" : stylistMeta.label;

    const lines = [
      "Hi Gravity Unisex Salon — I'd like to book an appointment.",
      "",
      `• Name: ${data.name}`,
      `• Phone: ${data.phone}`,
      `• Service: ${data.service}`,
      `• Stylist: ${stylistLabel}`,
      `• Date: ${formatDateLong(data.date)}`,
      `• Time: ${data.time}`,
    ];
    if (data.notes && data.notes.length > 0) {
      lines.push(`• Notes: ${data.notes}`);
    }
    lines.push("", "Please confirm availability. Thank you!");

    const url = `https://wa.me/${stylistMeta.number}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => setSubmitting(false), 800);
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative rounded-2xl border border-border/60 bg-background/80 backdrop-blur p-6 md:p-10 shadow-elegant"
    >
      <div className="grid md:grid-cols-2 gap-5">
        <Field label="Your Name" error={errors.name} icon={User} htmlFor="bk-name">
          <input
            id="bk-name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="e.g. Priya Sharma"
            className="bk-input"
            maxLength={80}
          />
        </Field>

        <Field label="Phone Number" error={errors.phone} icon={Phone} htmlFor="bk-phone">
          <input
            id="bk-phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="e.g. 98XXXXXXXX"
            className="bk-input"
            maxLength={15}
          />
        </Field>

        <Field label="Service" error={errors.service} icon={Sparkles} htmlFor="bk-service">
          <select
            id="bk-service"
            value={form.service}
            onChange={(e) => update("service", e.target.value as BookingForm["service"])}
            className="bk-input bk-select"
          >
            {SERVICES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </Field>

        <Field label="Stylist Preference" error={errors.stylist} icon={User} htmlFor="bk-stylist">
          <select
            id="bk-stylist"
            value={form.stylist}
            onChange={(e) => update("stylist", e.target.value as BookingForm["stylist"])}
            className="bk-input bk-select"
          >
            {STYLISTS.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </Field>

        <Field label="Preferred Date" error={errors.date} icon={Calendar} htmlFor="bk-date">
          <input
            id="bk-date"
            type="date"
            value={form.date}
            min={minDate}
            onChange={(e) => update("date", e.target.value)}
            className="bk-input"
          />
        </Field>

        <Field label="Preferred Time" error={errors.time} icon={Clock} htmlFor="bk-time">
          <select
            id="bk-time"
            value={form.time}
            onChange={(e) => update("time", e.target.value)}
            className="bk-input bk-select"
          >
            {TIME_SLOTS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Notes (optional)" error={errors.notes} htmlFor="bk-notes">
          <textarea
            id="bk-notes"
            rows={3}
            value={form.notes ?? ""}
            onChange={(e) => update("notes", e.target.value)}
            placeholder="Anything we should know — hair length, allergies, occasion…"
            className="bk-input resize-none"
            maxLength={300}
          />
        </Field>
      </div>

      <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold text-primary-foreground px-7 py-3.5 font-medium shadow-gold hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <MessageCircle className="size-4" />
          {submitting ? "Opening WhatsApp…" : "Request via WhatsApp"}
        </button>
        <p className="text-xs text-muted-foreground sm:max-w-xs">
          Your details open WhatsApp pre-filled. We confirm availability within minutes during salon hours (10 AM – 10 PM).
        </p>
      </div>

      <style>{`
        .bk-input {
          width: 100%;
          background: hsl(var(--card) / 0.6);
          border: 1px solid hsl(var(--border));
          color: hsl(var(--foreground));
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          transition: border-color .2s ease, box-shadow .2s ease, background .2s ease;
        }
        .bk-input::placeholder { color: hsl(var(--muted-foreground)); }
        .bk-input:focus {
          outline: none;
          border-color: hsl(var(--primary));
          box-shadow: 0 0 0 3px hsl(var(--primary) / 0.18);
          background: hsl(var(--card) / 0.85);
        }
        .bk-select {
          appearance: none;
          background-image: linear-gradient(45deg, transparent 50%, hsl(var(--primary)) 50%), linear-gradient(135deg, hsl(var(--primary)) 50%, transparent 50%);
          background-position: calc(100% - 18px) 50%, calc(100% - 13px) 50%;
          background-size: 5px 5px, 5px 5px;
          background-repeat: no-repeat;
          padding-right: 2.25rem;
        }
        .bk-input[type="date"]::-webkit-calendar-picker-indicator { filter: invert(0.8) sepia(1) saturate(4) hue-rotate(5deg); cursor: pointer; }
      `}</style>
    </form>
  );
}

function Field({
  label, error, icon: Icon, htmlFor, children,
}: {
  label: string;
  error?: string;
  icon?: React.ComponentType<{ className?: string }>;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-2">
        {Icon ? <Icon className="size-3.5 text-primary" /> : null}
        {label}
      </label>
      {children}
      {error ? (
        <p role="alert" className="mt-1.5 text-xs text-destructive">{error}</p>
      ) : null}
    </div>
  );
}