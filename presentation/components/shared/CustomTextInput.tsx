import React from 'react';
import { View, Text, TextInputProps, TextInput } from 'react-native';

interface Props extends TextInputProps {
    label?: string;
    size?: 'sm' | 'md' | 'lg';
    required?: boolean;
    startContent?: React.ReactNode;
    endContent?: React.ReactNode;
    error?: string;
}

const CustomTextInput = ({ label, size = 'md', required = false, startContent, endContent, error, ...props }: Props) => {
    const textInputSize = {
        sm: 'h-[40px]',
        md: 'h-[48px]',
        lg: 'h-[56px]',
    }[size];

    return (
        <View
            className={`flex justify-between w-full`}
        >
            {label && <Text className='text-sm text-slate-500 font-bold mb-2'>{label} {required && <Text className='text-red-600'>*</Text>}</Text>}
            <View
                className={`${textInputSize} bg-[#F5F7FB] rounded-md flex-row gap-3 px-4 flex items-center border border-slate-300`}
            >
                {startContent}
                <TextInput
                    {...props}
                    style={{
                        flex: 1,
                    }}
                    className={`${textInputSize}`}
                    selectionColor='#EF6343'
                    placeholderTextColor="rgba(0, 0, 0, 0.5)"
                />
                {endContent}
            </View>
            {error && <Text className='text-red-600 text-xs mt-1'>{error}</Text>}
        </View>
    )
}

export default CustomTextInput