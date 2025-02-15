import { Platform } from "react-native";
import axios from "axios";

const STAGE = process.env.EXPO_PUBLIC_STAGE || "dev";

export const API_URL =
  STAGE === "prod"
    ? process.env.EXPO_PUBLIC_API_URL
    : Platform.OS === "ios"
    ? process.env.EXPO_PUBLIC_API_URL_IOS
    : process.env.EXPO_PUBLIC_API_URL_ANDROID;

const kippyApiUsers = axios.create({
  baseURL: API_URL,
});

export { kippyApiUsers };
