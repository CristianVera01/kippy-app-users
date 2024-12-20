import React from 'react'
import { View, Text } from 'react-native';
import { useGetAllBusinessTypes } from '@/presentation/hooks/business-types/useGetAllBusinessTypes';
import { FlatList } from 'react-native-gesture-handler';
import BusinessTypeListItem from './BusinessTypeListItem';

const BusinessTypeHorizontalList = () => {

    const { getAllBusinessTypesQuery } = useGetAllBusinessTypes();

    return (
        <View
            className='mt-5'
        >
            <View className='flex flex-row justify-between items-center px-5'>
                <Text className='text-lg font-semibold text-slate-600'>Tipos de negocio</Text>
                <Text className='text-slate-500'>Ver todos</Text>
            </View>
            <View className='mt-2 w-full'>
                <FlatList
                    data={getAllBusinessTypesQuery.data!}
                    keyExtractor={(item) => item.id}
                    horizontal
                    ItemSeparatorComponent={() => <View className='w-2' />}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <BusinessTypeListItem
                            businessType={item}
                            isFirst={index === 0}
                            isLast={index === getAllBusinessTypesQuery.data!.length - 1}
                        />
                    )}
                />
            </View>
        </View>
    )
}

export default BusinessTypeHorizontalList