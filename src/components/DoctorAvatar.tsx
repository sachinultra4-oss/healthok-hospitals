import { useState } from "react";

interface Props {
  name: string;
  image?: string;
  size?: number;
  className?: string;
}

/**
 * Robust doctor avatar:
 * - Encodes spaces / special chars in the public path
 * - Lazy loads with explicit width/height (no CLS)
 * - Falls back to an initial-letter avatar if the file truly fails to load
 * - Memoized via React state so it never re-fetches on re-render
 */
export function DoctorAvatar({ name, image, size = 64, className = "" }: Props) {
  const [failed, setFailed] = useState(false);

  const safeSrc = image
    ? (image.startsWith("http") ? image : encodeURI(image))
    : "";

  const initial = name.replace(/^Dr\.?\s*/i, "").trim().charAt(0).toUpperCase() || "D";

  const base = `shrink-0 rounded-full border border-border object-cover bg-primary/10 text-primary flex items-center justify-center font-bold ${className}`;
  const style = { width: size, height: size };

  if (!safeSrc || failed) {
    return (
      <div className={base} style={{ ...style, fontSize: size * 0.4 }} aria-label={name}>
        {initial}
      </div>
    );
  }

  return (
    <img
      src={safeSrc}
      alt={name}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={base}
      style={style}
    />
  );
}
