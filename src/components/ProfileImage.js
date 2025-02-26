import Image from 'next/image';

const ProfileImage = () => {
    return (
        <Image
            src="/images/profile.jpeg"
            alt="Profile Picture"
            width={256}
            height={256}
            className="object-cover w-full h-full"
        />
    );
};

export default ProfileImage;