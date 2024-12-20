import React from 'react';
import { CustomSafeAreaView } from '@/presentation/components/shared/CustomSafeAreaView';
import { Text, View } from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import CustomTextInput from '@/presentation/components/shared/CustomTextInput';
import BusinessTypeHorizontalList from '@/presentation/components/shared/BusinessTypeHorizontalList';
import BusinessesVerticalList from '@/presentation/components/shared/BusinessesVerticalList';

const HomePage = () => {

    return (
        <CustomSafeAreaView>
            <View className='flex flex-col items-center justify-center'>
                <Text className='text-lg text-slate-600'>Delivery Location</Text>
                <View className='flex flex-row items-center gap-2 mt-1.5'>
                    <IonIcons name='location' color='#EF6343' size={16} />
                    <Text className='font-bold text-2xl'>Casa</Text>
                </View>
            </View>
            <View className='mt-5 px-5'>
                <CustomTextInput
                    placeholder='Buscar productos...'
                    endContent={<IonIcons name='search' color='#EF6343' size={24} />}
                />
            </View>
            <BusinessTypeHorizontalList />
            <BusinessesVerticalList />
        </CustomSafeAreaView>
    )
}

export default HomePage