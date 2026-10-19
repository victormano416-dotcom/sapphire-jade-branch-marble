import { createFileRoute, Navigate } from "@tanstack/react-router";
import { AuthScreen } from "@/components/finance/auth-screen";
import { Boot } from "@/components/finance/ui";
import { useCurrentUserState } from "@/lib/auth/use-current-user";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  const { user, isPending } = useCurrentUserState();
  if (isPending) return <Boot />;
  if (user) return <Navigate to="/" />;
  return <AuthScreen />;
}
