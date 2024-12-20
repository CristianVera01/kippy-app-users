import React from 'react';
import { View, Text, PressableProps } from 'react-native';

interface Props extends PressableProps {
    children?: string;
    mode?: 'outline' | 'solid' | 'text';
    textColor?: string;
}

const CustomButton = ({ children, mode = 'text' }: Props) => {

    const buttonMode = {
        outline: 'radius radius-md radius-primary',
        solid: 'bg-primary',
        text: 'bg-transparent',
    }[mode];

    const textColor = {
        outline: 'text-white',
        solid: 'text-white',
        text: 'text-primary',
    }[mode];

    return (
        <View
            className={`${buttonMode}`}
        >
            <Text
                className={`${textColor} font-bold`}
            >
                {children}
            </Text>
        </View>
    );
}

export default CustomButton