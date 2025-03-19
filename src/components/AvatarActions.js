'use client';
import { useEffect } from 'react';

const AvatarActions = ({ avatarRef, lightRef }) => {
  useEffect(() => {
    if (!avatarRef?.current) return;
    let time = 0;
    const animateIdle = () => {
      if (!avatarRef.current) return;
      avatarRef.current.position.y = -1.5 + Math.sin(time) * 0.05;
      avatarRef.current.rotation.z = Math.sin(time) * 0.02;
      time += 0.02;
      requestAnimationFrame(animateIdle);
    };
    animateIdle();
  }, [avatarRef]);

  useEffect(() => {
    if (!avatarRef?.current) return;
    let angle = 0;
    const spinAvatar = () => {
      if (!avatarRef.current) return;
      if (angle < Math.PI * 2) {
        avatarRef.current.rotation.y += 0.05;
        angle += 0.05;
        requestAnimationFrame(spinAvatar);
      }
    };
    spinAvatar();
  }, [avatarRef]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!avatarRef?.current || !lightRef?.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX / innerWidth - 0.5) * 3;
      const y = -(event.clientY / innerHeight - 0.5) * 3;

      avatarRef.current.rotation.y += (x * 0.5 - avatarRef.current.rotation.y) * 0.2;
      avatarRef.current.rotation.x += (y * 0.3 - avatarRef.current.rotation.x) * 0.2;

      lightRef.current.position.x += (x * 4 - lightRef.current.position.x) * 0.1;
      lightRef.current.position.y += (y * 4 - lightRef.current.position.y) * 0.1;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [avatarRef, lightRef]);

  useEffect(() => {
    const handleScroll = () => {
      if (!avatarRef?.current) return;
      const scrollY = window.scrollY / window.innerHeight;
      avatarRef.current.rotation.x += (scrollY * 0.6 - avatarRef.current.rotation.x) * 0.1;
      avatarRef.current.rotation.y += (scrollY * 0.4 - avatarRef.current.rotation.y) * 0.1;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [avatarRef]);

  useEffect(() => {
    const handleClick = () => {
      if (!avatarRef?.current) return;
      let jumpHeight = 0.3;
      let speed = 0.02;
      let direction = 1;

      const jump = () => {
        if (!avatarRef.current) return;

        if (avatarRef.current.position.y >= -1.5 + jumpHeight) {
          direction = -1;
        } else if (avatarRef.current.position.y <= -1.5) {
          avatarRef.current.position.y = -1.5;
          return;
        }

        avatarRef.current.position.y += speed * direction;
        requestAnimationFrame(jump);
      };
      jump();
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [avatarRef]);

  return null;
};

export default AvatarActions;
