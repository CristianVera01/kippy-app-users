import * as SecureStore from "expo-secure-store";
import { Alert } from "react-native";

export class SecureStorageAdapter {
  static async setItem(key: string, value: string) {
    try {
      await SecureStore.setItemAsync(key, value);
    } catch (error) {
      Alert.alert(
        "Error al guardar en el dispositivo",
        "Verifica que estes en un dispositivo con Secure Storage habilitado"
      );
    }
  }

  static async getItem(key: string) {
    try {
      return await SecureStore.getItemAsync(key);
    } catch (error) {
      Alert.alert(
        "Error al obtener el valor del dispositivo",
        "Verifica que estes en un dispositivo con Secure Storage habilitado"
      );
    }
  }

  static async removeItem(key: string) {
    try {
      await SecureStore.deleteItemAsync(key);
    } catch (error) {
      Alert.alert(
        "Error al eliminar el valor del dispositivo",
        "Verifica que estes en un dispositivo con Secure Storage habilitado"
      );
    }
  }
}
