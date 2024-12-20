import React from 'react';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';

interface Props extends SafeAreaViewProps {

}

export const CustomSafeAreaView = ({ ...props }: Props) => {
    return (
        <SafeAreaView
            className="flex justify-start"
            style={{ flex: 1 }}
        >
            {props.children}
        </SafeAreaView>
    )
}
