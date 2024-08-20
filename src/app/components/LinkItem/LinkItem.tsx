// components/LinkItem.tsx
import React from 'react';
import { FaInstagram, FaLinkedin, FaGlobe } from 'react-icons/fa';

type LinkItemProps = {
  icon: 'instagram' | 'linkedin' | 'website';
  name: string;
  description: string;
  url: string;
};

const icons = {
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  website: FaGlobe,
};

const LinkItem: React.FC<LinkItemProps> = ({ icon, name, description, url }) => {
  const IconComponent = icons[icon];
  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='bg-white hover:bg-purple-700 text-purple-900 hover:text-white p-4 rounded-lg flex items-center space-x-4 transition duration-300 transform hover:scale-105 shadow-lg w-full max-w-xs md:max-w-md'
    >
      <IconComponent className='text-2xl' />
      <div className='w-full'>
        <h3 className='font-bold'>{name}</h3>
        <p className='text-sm'>{description}</p>
      </div>
    </a>
  );
};

export default LinkItem;
