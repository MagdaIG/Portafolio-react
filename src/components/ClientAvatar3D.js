'use client'; // Mark this as a Client Component

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Avatar3D = dynamic(() => import('./Avatar3D'), {
    ssr: false, // Disable SSR for the 3D component
    loading: () => <p>Loading 3D model...</p>, // Fallback while loading
});

export default function ClientAvatar3D() {
    return (
        <Suspense fallback={<p>Loading 3D model...</p>}>
            <Avatar3D />
        </Suspense>
    );
}