import React from 'react';
import { View, Text, FlatList } from 'react-native';
import BusinessCard from './BusinessCard';
import { useGetAllBusinesses } from '@/presentation/hooks/business/useGetAllBusinesses';

const BusinessesVerticalList = () => {

    const { businessesQuery } = useGetAllBusinesses();
    const { data: businesses } = businessesQuery;

    return (
        <View
            className='mt-5 flex-1'
        >
            <View
                className='flex flex-row justify-between items-center px-5'
            >
                <Text className='text-lg font-semibold text-slate-600'>Negocios</Text>
                <Text className='text-slate-500'>Ver todos</Text>
            </View>
            <View className='mt-2 flex-1 mx-5'>
                <FlatList
                    contentContainerStyle={{ width: '100%' }}
                    className='w-full'
                    data={businesses}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View className='h-2' />}
                    renderItem={({ item }) => (
                        <BusinessCard
                            business={item}
                        />
                    )}
                />
            </View>
        </View>
    )
}

export default BusinessesVerticalList