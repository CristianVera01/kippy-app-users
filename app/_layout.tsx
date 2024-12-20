import React from 'react';
import { Stack } from 'expo-router';
import Providers from '@/presentation/components/Providers';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import "../global.css";

const MainLayout = () => {
  return (
    <GestureHandlerRootView>
      <Providers>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="permissions/index" />
          <Stack.Screen name="landing/index" />
          <Stack.Screen name="auth/login/index" />
          <Stack.Screen name="auth/signup/index" />
          <Stack.Screen name="auth/forgot-password/index" />
        </Stack>
      </Providers>
    </GestureHandlerRootView>
  )
}

export default MainLayout