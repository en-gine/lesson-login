"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function DashboardPage() {
  const router = useRouter();
  const { isLoading } = useAuth();

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-md mx-auto space-y-6">
        {/* ログイン成功メッセージ */}
        <Alert>
          <AlertDescription>ログインに成功しました</AlertDescription>
        </Alert>

        {/* ログアウトボタン */}
        <button
          onClick={handleLogout}
          className="w-full bg-gray-100 text-gray-900 px-4 py-2 rounded hover:bg-gray-200 transition-colors"
        >
          ログアウト
        </button>
      </div>
    </div>
  );
}
