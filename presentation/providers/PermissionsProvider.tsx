import React, { PropsWithChildren, useEffect } from 'react'
import { PermissionStatus } from '@/infrastructure/interfaces/location'
import { router } from 'expo-router';
import { usePermissionsStore } from '../store/usePermissionsStore';
import { AppState } from 'react-native';

const PermissionsProvider = ({ children }: PropsWithChildren) => {

    const { locationStatus, checkLocationPermission } = usePermissionsStore();

    useEffect(() => {
        switch (locationStatus) {
            case PermissionStatus.GRANTED:
                router.replace("/landing");
                break;
            case PermissionStatus.DENIED:
            case PermissionStatus.LIMITED:
            case PermissionStatus.BLOCKED:
            case PermissionStatus.UNDETERMINED:
                router.replace("/permissions");
                break;
        }
    }, [locationStatus]);

    useEffect(() => {
        checkLocationPermission();
    }, []);

    useEffect(() => {
        const subscription = AppState.addEventListener('change', (nextAppState) => {
            if (nextAppState === 'active') {
                checkLocationPermission();
            }
        });
        return () => {
            subscription.remove();
        };
    }, [])


    return <>{children}</>
}

export default PermissionsProvider