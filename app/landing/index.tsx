import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable } from 'react-native';
import { TakeAwaySvg } from '@/presentation/components/svg/TakeAwaySvg';
import { router } from 'expo-router';
import { useAuthStore } from '@/presentation/store/useAuthStore';

const LandingPage = () => {

    const { checkStatus, status } = useAuthStore();

    useEffect(() => {
        if (status === "authenticated") router.replace("/(authenticated)/(home)");
    }, [status]);

    useEffect(() => {
        checkStatus();
    }, []);


    return (
        <View
            className='flex items-center justify-center bg-kippy-blue h-screen px-10'
        >
            <Text className='text-4xl font-bold text-primary'>Kippy Delivery</Text>
            <View
                className='flex flex-col items-center justify-center bg-[#171F2F] w-[300px] h-[300px] rounded-full my-10'
            >
                <TakeAwaySvg
                    width={400}
                    height={400}
                />
            </View>
            <Text
                className='text-slate-400 text-lg mx-5 text-center mt-4'
            >
                Llevar comida de calidad y deliciosa hasta tu casa es nuestra meta
            </Text>
            <View
                className='gap-4 w-full m-10'
            >
                <Pressable
                    className='bg-primary rounded-md w-full h-[50px] flex items-center justify-center'
                    onPress={() => router.push("/auth/login")}
                >
                    <Text className='text-white text-md text-center font-bold'>Iniciar sesión</Text>
                </Pressable>
                <Pressable
                    className='bg-white rounded-md w-full h-[50px] flex items-center justify-center'
                    onPress={() => router.push("/auth/signup")}
                >
                    <Text className='text-black text-md text-center font-bold'>Crear cuenta</Text>
                </Pressable>
            </View>
            <StatusBar style="light" />
        </View>
    )
}

export default LandingPage