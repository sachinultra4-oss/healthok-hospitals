import { createFileRoute, redirect } from "@tanstack/react-router";

// Centres page merged into unified /doctors page.
export const Route = createFileRoute("/centres")({
  beforeLoad: () => {
    throw redirect({ to: "/doctors" });
  },
  component: () => null,
});
