import { useState, type ImgHTMLAttributes, type ReactNode } from "react";

interface ResilientImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallback: ReactNode;
}

export function ResilientImage({ fallback, onError, ...props }: ResilientImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) return <>{fallback}</>;

  return (
    <img
      {...props}
      onError={(event) => {
        setFailed(true);
        onError?.(event);
      }}
    />
  );
}