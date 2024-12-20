import { kippyApiUsers } from "@/core/auth/api/kippyApiUsers";
import * as SecureStore from "expo-secure-store";
import { Business } from "../interface/Business";

export async function getAllBusinesses() {
  const accessToken = await SecureStore.getItemAsync("token");

  if (!accessToken) {
    return null;
  }

  const response = await kippyApiUsers.get<Business[]>("/business", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
}
