'use client';
import { useState } from 'react';
import Image from 'next/image';

const S3_BASE = 'https://profilesuite-assets.s3.us-west-2.amazonaws.com';

function getGalleryImageUrl(filename) {
  if (!filename) return '';
  if (filename.includes('/gallery')) return filename;
  return `${S3_BASE}/uploads/gallery/${filename}`;
}

function GalleryItem({ item, index }) {
  const [failed, setFailed] = useState(false);
  const imageUrl = getGalleryImageUrl(item.filename);

  if (failed || !imageUrl) return null;

  return (
    <div className="gallery-item">
      <Image
        src={imageUrl}
        alt={`Gallery Image ${index + 1}`}
        width={300}
        height={200}
        className="gallery-image"
        priority={index === 0}
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export default function Gallery({ gallery }) {
  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="hero-section">
      <div className="container container-padding">
        <h2>Portfolio</h2>
        <div className="gallery-container">
          {gallery.map((item, index) => (
            <GalleryItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
