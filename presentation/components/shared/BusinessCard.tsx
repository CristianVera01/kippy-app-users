import React from 'react';
import { Business } from '@/core/businesses/interface/Business';
import { Text, ImageBackground, View } from 'react-native';

interface Props {
    business: Business;
}

const BusinessCard = ({ business }: Props) => {
    return (
        <ImageBackground
            source={{ uri: business.image ?? 'https://res.cloudinary.com/dxgo2bllp/image/upload/v1734719063/defaults/businesses.webp' }}
            className='w-full h-32 flex justify-center items-center bg-gray-600 rounded-[10px]'
            borderRadius={10}
            blurRadius={2}
            resizeMode='cover'
        >
            <View
                className='flex flex-col items-center justify-center w-full h-full bg-[rgba(0,0,0,0.6)] rounded-[10px]'
            >
                <Text className='text-white font-bold text-2xl'>{business.name}</Text>
            </View>
        </ImageBackground>
    )
}

export default BusinessCard