import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login } from "@/lib/auth";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (user) => {
      // ユーザー情報をキャッシュに保存
      queryClient.setQueryData(["user"], user);
      // ダッシュボードへリダイレクト
      router.push("/dashboard");
    },
  });

  return {
    data: queryClient.getQueryData(["user"]),
    login: loginMutation.mutate,
    isLoading: loginMutation.isPending,
    error: loginMutation.error,
  };
};
