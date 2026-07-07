// Centralised WhatsApp helpers.
// Every patient-facing WhatsApp action opens Health OK customer care (+91 7030666321).
// When a doctor's personal number is known, we also open a second chat to that
// number after a short delay so both parties receive the request.

export const CARE_NUMBER = "917030666321";

function normalisePhone(raw?: string | null): string | null {
  if (!raw) return null;
  const digits = String(raw).replace(/\D/g, "");
  if (!digits) return null;
  const ten = digits.length > 10 ? digits.slice(-10) : digits;
  if (ten.length !== 10) return null;
  return `91${ten}`;
}

function open(url: string) {
  if (typeof window === "undefined") return;
  window.open(url, "_blank", "noopener,noreferrer");
}

function waUrl(number: string, message: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Send a message to Health OK care only. */
export function openCareWhatsApp(message: string) {
  open(waUrl(CARE_NUMBER, message));
}

/**
 * Opens Health OK care WhatsApp immediately, then the doctor's personal
 * WhatsApp after 1s. Falls back gracefully if the doctor number is missing.
 */
export function openDualWhatsApp(opts: {
  doctorPhone?: string | null;
  doctorName?: string;
  doctorCity?: string;
  message?: string;
}) {
  const { doctorPhone, doctorName, doctorCity, message } = opts;
  const body =
    message ??
    [
      "Health OK Appointment Request",
      doctorName ? `Doctor: ${doctorName}` : null,
      doctorCity ? `Preferred Centre: ${doctorCity}` : null,
      "I'd like to book an appointment. Please share available slots.",
    ]
      .filter(Boolean)
      .join("\n");

  open(waUrl(CARE_NUMBER, body));

  const docNumber = normalisePhone(doctorPhone);
  if (docNumber && docNumber !== CARE_NUMBER) {
    setTimeout(() => open(waUrl(docNumber, body)), 1000);
  }
}
