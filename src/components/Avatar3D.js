'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef, useState } from 'react';
import AvatarActions from './AvatarActions';

// Componente para manejar el zoom de la cámara
const CameraZoom = ({ zoomed }) => {
    useFrame(({ camera }) => {
        const targetPosition = zoomed ? [0, 1.5, 3] : [0, 2.2, 6];
        camera.position.lerp(
            { x: targetPosition[0], y: targetPosition[1], z: targetPosition[2] },
            0.1 // Velocidad de transición
        );
    });
    return null;
};

const Avatar3D = () => {
    const { scene } = useGLTF('/models/avatar.glb');
    const avatarRef = useRef();
    const lightRef = useRef();

    // Estado para controlar el zoom
    const [zoomed, setZoomed] = useState(false);

    // Función para alternar el zoom al hacer clic
    const handleAvatarClick = () => {
        setZoomed(!zoomed);
    };

    return (
        <div className="w-full h-[85vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
            <Canvas camera={{ position: [0, 2.2, 6], fov: 45 }}>
                <ambientLight intensity={1.5} />
                <directionalLight position={[2, 5, 2]} intensity={1.5} />
                <spotLight ref={lightRef} position={[0, 5, 5]} intensity={2} angle={0.3} penumbra={1} />

                {/* Componente que maneja la animación del zoom */}
                <CameraZoom zoomed={zoomed} />

                {/* Acciones del Avatar */}
                <AvatarActions avatarRef={avatarRef} lightRef={lightRef} />

                {/* Avatar con evento onClick para hacer zoom */}
                <primitive
                    ref={avatarRef}
                    object={scene}
                    scale={1.8}
                    position={[0, -2.8, 0]}
                    onClick={handleAvatarClick}
                    className="cursor-pointer"
                />

                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    );
};

export default Avatar3D;