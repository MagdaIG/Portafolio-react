'use client';
import { useEffect } from 'react';

const AvatarActions = ({ avatarRef, lightRef }) => {
  useEffect(() => {
    if (!avatarRef.current) return;

    const jumpHeight = 0.5;
    let direction = 1;

    const jump = () => {
      if (!avatarRef.current) return;

      if (avatarRef.current.position.y >= -1.5 + jumpHeight) {
        direction = -1;
      }

      if (avatarRef.current.position.y <= -1.5) {
        avatarRef.current.position.y = -1.5;
        return;
      }

      avatarRef.current.position.y += direction * 0.02;
    };

    const handleClick = () => {
      jump();
    };

    const handleMouseMove = (event) => {
      if (!avatarRef.current || !lightRef.current) return;

      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;


      const x = (clientX / innerWidth) * 2 - 1;
      const y = -(clientY / innerHeight) * 2 + 1;

      avatarRef.current.rotation.y = x * 0.5;
      avatarRef.current.rotation.x = y * 0.2;

      // Mueve la luz siguiendo el cursor
      lightRef.current.position.x = x * 3;
      lightRef.current.position.y = y * 2;
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [avatarRef, lightRef]);

  return null;
};

export default AvatarActions;
