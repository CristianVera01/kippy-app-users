import { PermissionStatus } from "@/infrastructure/interfaces/location";
import * as Location from "expo-location";
import { Alert, Linking } from "react-native";

export const requestLocationPermission =
  async (): Promise<PermissionStatus> => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      if (status === "denied") {
        manualLocationPermission();
      }
      return PermissionStatus.DENIED;
    }

    return PermissionStatus.GRANTED;
  };

export const checkLocationPermission = async () => {
  const { status } = await Location.getForegroundPermissionsAsync();

  switch (status) {
    case "granted":
      return PermissionStatus.GRANTED;
    case "denied":
      return PermissionStatus.DENIED;
    default:
      return PermissionStatus.UNDETERMINED;
  }
};

export const manualLocationPermission = async () => {
  Alert.alert(
    "Permiso de ubicación",
    "Por favor, permite el permiso de ubicación en los ajustes de su dispositivo.",
    [
      {
        text: "Ir a ajustes",
        onPress: () => {
          Linking.openSettings();
        },
      },
      {
        text: "Cancelar",
        style: "destructive",
      }
    ]
  );
};
