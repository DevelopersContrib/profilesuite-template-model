'use client';
import { useState } from 'react';
import Image from 'next/image';

const S3_BASE = 'https://profilesuite-assets.s3.us-west-2.amazonaws.com';

function getGalleryImageUrl(filename) {
  if (!filename) return '';
  if (filename.includes('/gallery')) return filename;
  return `${S3_BASE}/uploads/gallery/${filename}`;
}

function GalleryItem({ item, index, total }) {
  const [failed, setFailed] = useState(false);
  const imageUrl = getGalleryImageUrl(item.filename);

  if (failed || !imageUrl) return null;

  return (
    <div className="gallery-item" style={{ animationDelay: `${index * 0.08}s` }}>
      <Image
        src={imageUrl}
        alt={`Gallery Image ${index + 1}`}
        width={600}
        height={800}
        className="gallery-image"
        priority={index === 0}
        onError={() => setFailed(true)}
      />
      <div className="gallery-overlay">
        <span className="gallery-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="gallery-total">/ {String(total).padStart(2, '0')}</span>
      </div>
    </div>
  );
}

export default function Gallery({ gallery }) {
  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="gallery-section" id="portfolio">
      <div className="gallery-bg-glow"></div>
      <div className="container">
        <div>
          <span className="section-label">My Work</span>
          <h2 className="section-heading">Portfolio</h2>
        </div>
        <hr className="section-divider" style={{ marginBottom: '3rem' }} />
        <div className="gallery-container">
          {gallery.map((item, index) => (
            <GalleryItem key={index} item={item} index={index} total={gallery.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
