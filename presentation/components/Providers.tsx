import React, { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PermissionsProvider from '../providers/PermissionsProvider';

const queryClient = new QueryClient();

const Providers = ({ children }: PropsWithChildren) => {
    return (
        <QueryClientProvider client={queryClient}>
            <PermissionsProvider>
                {children}
            </PermissionsProvider>
        </QueryClientProvider>
    )
}

export default Providers