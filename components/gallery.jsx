import Image from 'next/image';

const S3_BASE = 'https://profilesuite-assets.s3.us-west-2.amazonaws.com';

function getGalleryImageUrl(filename) {
  if (!filename) return '';
  if (filename.includes('/gallery')) return filename;
  return `${S3_BASE}/uploads/gallery/${filename}`;
}

export default function Gallery({ gallery }) {

  return (
    <section className="hero-section">
      <div className="container container-padding">
        <h2>Portfolio</h2>
        <div className="gallery-container">
        {gallery.map((url, index) => (
            <div key={index} className="gallery-item">
              <Image
                src={getGalleryImageUrl(url.filename)}
                alt={`Gallery Image ${index + 1}`}
                width={300}
                height={200}
                className="gallery-image"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
