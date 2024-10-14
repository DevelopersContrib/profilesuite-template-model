import Image from 'next/image';

export default function Gallery({ domain }) {
  const imageUrls = [
    "https://images.pexels.com/photos/11174646/pexels-photo-11174646.jpeg",
    "https://images.pexels.com/photos/8152102/pexels-photo-8152102.jpeg",
    "https://images.pexels.com/photos/11174645/pexels-photo-11174645.jpeg",
    "https://images.pexels.com/photos/17917971/pexels-photo-17917971.jpeg",
    "https://images.pexels.com/photos/6440270/pexels-photo-6440270.jpeg",
    "https://images.pexels.com/photos/20634796/pexels-photo-20634796.jpeg"
  ];

  return (
    <section className="hero-section">
      <div className="container container-padding">
        <h2>Portfolio</h2>
        <div className="gallery-container">
          {imageUrls.map((url, index) => (
            <div key={index} className="gallery-item">
              <Image
                src={url}
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
