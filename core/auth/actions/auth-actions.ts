import { kippyApiUsers } from "../api/kippyApiUsers";
import { User } from "../interface/user";

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export const authLogin = async (email: string, password: string) => {
  email = email.toLowerCase();

  try {
    const { data } = await kippyApiUsers.post<AuthResponse>("/auth/login", {
      email,
      password,
    });

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
