import { kippyApiUsers } from "@/core/auth/api/kippyApiUsers";
import { BusinessType } from "../interface/BussinessType";
import * as SecureStore from "expo-secure-store";

export async function getAllBusinessTypes() {
  const accessToken = await SecureStore.getItemAsync("token");

  if (!accessToken) {
    return null;
  }

  const response = await kippyApiUsers.get<BusinessType[]>("/business-types", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
}
