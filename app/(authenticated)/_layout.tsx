import React, { useEffect } from 'react';
import { useAuthStore } from '@/presentation/store/useAuthStore';
import { Text } from 'react-native';
import { Redirect, Tabs } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import IonIcons from 'react-native-vector-icons/Ionicons';

const AuthenticatedLayout = () => {

    const { status, checkStatus } = useAuthStore();

    useEffect(() => {
        checkStatus();
    }, []);

    if (status === 'checking') return <Text>Holaaaaaaaaa</Text>

    if (status === 'unauthenticated') {
        return <Redirect href="/auth/login" />
    }

    return (
        <>
            <Tabs
                initialRouteName="(home)/index"
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: '#EF6343',
                }}
            >
                <Tabs.Screen
                    name="(home)/index"
                    options={{
                        tabBarLabel: 'Inicio',
                        tabBarIcon: ({ color, focused }) => (
                            <IonIcons name={focused ? 'home' : 'home-outline'} size={24} color={color} />
                        )
                    }}
                />
                <Tabs.Screen
                    name="(orders)/index"
                    options={{
                        tabBarLabel: 'Pedidos',
                        tabBarIcon: ({ color, focused }) => (
                            <IonIcons name={focused ? 'reader' : 'reader-outline'} size={24} color={color} />
                        ),
                        headerShown: true,
                        title: 'Pedidos',
                    }}
                />
                <Tabs.Screen
                    name='(locations)/index'
                    options={{
                        tabBarLabel: 'Ubicaciones',
                        tabBarIcon: ({ color, focused }) => (
                            <IonIcons name={focused ? 'location' : 'location-outline'} size={24} color={color} />
                        ),
                        headerShown: true,
                        title: 'Ubicaciones',
                    }}
                />
                <Tabs.Screen
                    name="(profile)/index"
                    options={{
                        tabBarLabel: 'Perfil',
                        tabBarIcon: ({ color, focused }) => (
                            <IonIcons name={focused ? 'person' : 'person-outline'} size={24} color={color} />
                        )
                    }}
                />
            </Tabs>
            <StatusBar style="dark" />
        </>
    )
}

export default AuthenticatedLayout