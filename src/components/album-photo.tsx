"use client"
import placeholder from '@/assets/placeholder.jpg';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import EditModal from './edit-modal';
import { PhotoDto } from '@/lib/types';

interface AlbumImageProps {
  src: string;
  alt: string;
  edit?: boolean;
  data?: PhotoDto;
  className?: string;  // Add className as an optional prop
  i?:number;
}

const AlbumImage = ({ src, alt, edit = false, data, className, i, ...props }: AlbumImageProps) => {
  const [imgSrc, setImgSrc] = useState<string | StaticImageData>(src);

  const handleError = () => {
    setImgSrc(placeholder); // Set the fallback image if the main image fails to load
  };

  return (
    <div className={`relative group ${className || ''}`}> {/* Apply className to the wrapper div */}
      {edit && (
        <EditModal data={data as PhotoDto} />
      )}
      <Image
        src={imgSrc}
        alt={alt}
        width={0}
        height={0}
        onError={handleError}
        {...props}
        unoptimized
        priority={i as number < 5}
      />
    </div>
  );
}

export default AlbumImage;
