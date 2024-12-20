import { User } from "@/core/auth/interface/user";
import { SecureStorageAdapter } from "@/helpers/adapters/secure-storage.adapter";
import { create } from "zustand";
import { jwtDecode } from "jwt-decode";

export type AuthStatus = "authenticated" | "unauthenticated" | "checking";

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: User;

  checkStatus: () => Promise<void>;
  logout: () => Promise<void>;

  changeStatus: (token?: string, user?: User) => Promise<boolean>;
}

export const useAuthStore = create<AuthState>()((set) => ({
  status: "checking",
  token: undefined,
  user: undefined,

  changeStatus: async (token?: string, user?: User) => {
    if (!token && !user) {
      set({ status: "unauthenticated", token: undefined, user: undefined });
      return false;
    }

    set({ status: "authenticated", token, user });

    await SecureStorageAdapter.setItem("token", token!);
    await SecureStorageAdapter.setItem("user", JSON.stringify(user!));

    return true;
  },
  checkStatus: async () => {
    const token = await SecureStorageAdapter.getItem("token");
    const user = await SecureStorageAdapter.getItem("user");

    if (!token || !user) {
      set({ status: "unauthenticated", token: undefined, user: undefined });
      return;
    }

    const decodedToken = jwtDecode(token);

    if (decodedToken.exp! < Date.now() / 1000) {
      await SecureStorageAdapter.removeItem("token");
      await SecureStorageAdapter.removeItem("user");
      set({ status: "unauthenticated", token: undefined, user: undefined });
      return;
    }

    set({ status: "authenticated", token, user: JSON.parse(user) });
  },
  logout: async () => {
    await SecureStorageAdapter.removeItem("token");
    await SecureStorageAdapter.removeItem("user");
    set({ status: "unauthenticated", token: undefined, user: undefined });
  },
}));
