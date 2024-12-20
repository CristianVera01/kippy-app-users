import { authLogin } from "@/core/auth/actions/auth-actions";
import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../../store/useAuthStore";
import { router } from "expo-router";

export const useLoginMutation = () => {
  const { changeStatus } = useAuthStore();

  const loginMutation = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      return await authLogin(email, password);
    },
    onSuccess: (data) => {
      changeStatus(data?.accessToken, data?.user);
      router.replace("/(authenticated)/(home)");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return {
    loginMutation,
  };
};
