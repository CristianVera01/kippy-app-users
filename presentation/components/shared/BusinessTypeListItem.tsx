import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { BusinessType } from '@/core/business-types/interface/BussinessType';

interface Props {
    businessType: BusinessType;
    isFirst: boolean;
    isLast: boolean;
}

const BusinessTypeListItem = ({ businessType, isFirst, isLast }: Props) => {

    return (
        <ImageBackground
            source={{ uri: businessType.img }}
            className={`h-[100px] w-[150px] ${isFirst && 'ml-5'} ${isLast && 'mr-5'}`}
            blurRadius={2}
            resizeMode='cover'
            borderRadius={10}
        >
            <View
                className='flex flex-col items-center justify-center w-full h-full bg-[rgba(0,0,0,0.6)]'
                style={{ borderRadius: 10 }}
            >
                <Text className='text-white text-lg font-semibold'>{businessType.pluralName}</Text>
            </View>
        </ImageBackground>
    );
}

export default BusinessTypeListItem