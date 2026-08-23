import { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import Reveal from "../../Components/animations/Reveal";

const SERVICES = [
  "Building Construction",
  "Infrastructure",
  "Project Management",
  "Design & Build",
  "Consultancy",
  "Other",
];

const INITIAL_VALUES = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[\d\s()+-]{7,20}$/;

/** Returns an object of `{ field: message }` for every invalid field. */
function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Please tell us your name.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  if (!values.email.trim()) {
    errors.email = "An email address is required.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  // Phone is optional, but must look sane when provided.
  if (values.phone.trim() && !PHONE_PATTERN.test(values.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!values.service) {
    errors.service = "Select the service you need.";
  }

  if (!values.message.trim()) {
    errors.message = "Let us know a little about your project.";
  } else if (values.message.trim().length < 20) {
    errors.message = "Please use at least 20 characters.";
  }

  return errors;
}

function ContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  // "idle" | "submitting" | "success" | "error"
  const [status, setStatus] = useState("idle");

  function handleChange(event) {
    const { name, value } = event.target;
    const next = { ...values, [name]: value };

    setValues(next);

    // Clear a field's error as soon as the user fixes it.
    if (errors[name]) {
      setErrors(validate(next));
    }
  }

  function handleBlur(event) {
    const { name } = event.target;

    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(values));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched(
      Object.keys(INITIAL_VALUES).reduce(
        (acc, key) => ({ ...acc, [key]: true }),
        {}
      )
    );

    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");

    try {
      // TODO: swap this for the real endpoint, e.g.
      // await fetch("/api/contact", { method: "POST", body: JSON.stringify(values) });
      await new Promise((resolve) => setTimeout(resolve, 900));

      setStatus("success");
      setValues(INITIAL_VALUES);
      setTouched({});
    } catch {
      setStatus("error");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <section
      id="contact-form"
      className="w-full border-t border-[#D4AF37]/25 bg-[#0b0b0b] py-20"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal direction="up" distance={22}>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#D4AF37]">
            Get In Touch
          </p>
        </Reveal>

        <Reveal direction="up" distance={32} delay={120} duration={860}>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Tell Us About Your Project
          </h2>
        </Reveal>

        <Reveal direction="up" distance={20} delay={220}>
          <div className="mt-6 flex h-1 w-40 overflow-hidden rounded-full bg-white/10">
            <span className="h-full w-2/3 bg-[#D4AF37]" />
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* ---------------- Contact details ---------------- */}
          <Reveal
            direction="left"
            distance={34}
            delay={160}
            duration={880}
            className="lg:col-span-2"
          >
            <div className="h-full rounded-2xl border border-[#D4AF37]/20 bg-white/[0.03] p-8">
              <h3 className="text-lg font-semibold text-white">
                Reach Us Directly
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Prefer a conversation? Our team replies to every enquiry within
                one business day.
              </p>

              <ul className="mt-8 space-y-6">
                <ContactDetail icon={MapPin} label="Office">
                  1st Avenue, MIB Plaza Gwarinpa, NEO CLOUD TECHNOLOGIES, Abuja,
                  Nigeria.
                </ContactDetail>

                <ContactDetail icon={Phone} label="Phone">
                  <a
                    href="tel:+2348166198180"
                    className="lp-link-underline transition-colors hover:text-[#D4AF37]"
                  >
                    08166198180
                  </a>
                </ContactDetail>

                <ContactDetail icon={Mail} label="Email">
                  <a
                    href="mailto:neocloudtechnologies@gmail.com"
                    className="lp-link-underline break-all transition-colors hover:text-[#D4AF37]"
                  >
                    neocloudtechnologies@gmail.com
                  </a>
                </ContactDetail>

                <ContactDetail icon={Clock} label="Working Hours">
                  Monday – Friday, 8:00 AM – 5:00 PM
                </ContactDetail>
              </ul>
            </div>
          </Reveal>

          {/* ---------------- Form ---------------- */}
          <Reveal
            direction="right"
            distance={34}
            delay={240}
            duration={880}
            className="lg:col-span-3"
          >
            <form
              noValidate
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[#D4AF37]/20 bg-white/[0.03] p-8"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field
                  label="Full Name"
                  name="name"
                  placeholder="Jane Doe"
                  required
                  value={values.name}
                  error={touched.name ? errors.name : undefined}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Field
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="jane@company.com"
                  required
                  value={values.email}
                  error={touched.email ? errors.email : undefined}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Field
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="0800 000 0000"
                  hint="Optional"
                  value={values.phone}
                  error={touched.phone ? errors.phone : undefined}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <Field
                  label="Service Needed"
                  name="service"
                  as="select"
                  required
                  value={values.service}
                  error={touched.service ? errors.service : undefined}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </Field>

                <Field
                  className="sm:col-span-2"
                  label="Project Details"
                  name="message"
                  as="textarea"
                  rows={5}
                  placeholder="Share the scope, location, and timeline of your project..."
                  required
                  value={values.message}
                  error={touched.message ? errors.message : undefined}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-7 py-3.5 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-[#e0bb52] hover:shadow-[0_14px_30px_-10px_rgba(212,175,55,0.7)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none sm:w-auto"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              {/* Live region so screen readers announce the outcome */}
              <div aria-live="polite" className="mt-6 empty:mt-0">
                {status === "success" && (
                  <FormAlert tone="success" icon={CheckCircle2}>
                    Thank you! Your message is on its way — we will get back to
                    you within one business day.
                  </FormAlert>
                )}

                {status === "error" && (
                  <FormAlert tone="error" icon={AlertCircle}>
                    Something went wrong while sending your message. Please try
                    again or email us directly.
                  </FormAlert>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Sub-components                                                      */
/* ------------------------------------------------------------------ */

const CONTROL_CLASSES =
  "w-full rounded-xl border bg-black/40 px-4 py-3 text-sm text-white placeholder:text-gray-500 transition-colors duration-300 focus:outline-none focus:ring-1 disabled:opacity-60";

/**
 * A single labelled form control. Renders an input, textarea, or select and
 * wires up the accessibility attributes for its validation message.
 */
function Field({
  as = "input",
  label,
  name,
  hint,
  error,
  required = false,
  className = "",
  children,
  ...rest
}) {
  const Tag = as;
  const errorId = `${name}-error`;

  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="mb-2 flex items-baseline justify-between gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-300"
      >
        <span>
          {label}
          {required && <span className="ml-1 text-[#D4AF37]">*</span>}
        </span>
        {hint && (
          <span className="text-[10px] font-normal normal-case tracking-normal text-gray-500">
            {hint}
          </span>
        )}
      </label>

      <Tag
        id={name}
        name={name}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? errorId : undefined}
        className={`${CONTROL_CLASSES} ${
          error
            ? "border-red-500/70 focus:border-red-400 focus:ring-red-400"
            : "border-white/10 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
        } ${as === "textarea" ? "resize-y" : ""}`}
        {...rest}
      >
        {children}
      </Tag>

      {error && (
        <p id={errorId} className="mt-2 flex items-center gap-1.5 text-xs text-red-400">
          <AlertCircle size={13} strokeWidth={2} />
          {error}
        </p>
      )}
    </div>
  );
}

function ContactDetail({ icon: Icon, label, children }) {
  return (
    <li className="flex gap-4">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#D4AF37]">
        <Icon size={16} strokeWidth={1.8} />
      </span>
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
          {label}
        </p>
        <p className="mt-1 text-sm leading-relaxed text-gray-300">{children}</p>
      </div>
    </li>
  );
}

function FormAlert({ tone, icon: Icon, children }) {
  const tones = {
    success: "border-[#D4AF37]/40 bg-[#D4AF37]/10 text-[#f0d888]",
    error: "border-red-500/40 bg-red-500/10 text-red-300",
  };

  return (
    <p
      className={`flex items-start gap-3 rounded-xl border p-4 text-sm ${tones[tone]}`}
    >
      <Icon size={18} strokeWidth={2} className="mt-0.5 shrink-0" />
      {children}
    </p>
  );
}

export default ContactForm;
