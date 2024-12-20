import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LocationSvg } from '@/presentation/components/svg/LocationSvg';
import { requestLocationPermission } from '@/core/actions/permissions/location';

const PermissionsPage = () => {

    return (
        <View
            className='flex items-center justify-center bg-[#0E182C] h-screen px-10'
        >
            <View
                className='flex flex-col items-center justify-center bg-[#171F2F] w-[300px] h-[300px] rounded-full mb-10'
            >
                <LocationSvg
                    width={300}
                    height={250}
                />
            </View>
            <Text className='text-2xl font-bold text-white'>Permisos de ubicación</Text>
            <Text
                className='text-slate-400 text-md mx-5 text-center mt-4'
            >
                Los permisos de ubicación son necesarios para poder dar seguimiento a tus pedidos dentro de la aplicación.
            </Text>
            <Pressable
                className='bg-[#EF6343] rounded-md w-full h-[50px] mt-10 flex items-center justify-center'
                onPress={requestLocationPermission}
            >
                <Text className='text-white text-md text-center font-bold'>Permitir</Text>
            </Pressable>
            <StatusBar style="light" />
        </View>
    )
}

export default PermissionsPage