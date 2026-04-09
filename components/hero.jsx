import Image from 'next/image';

const S3_BASE = 'https://profilesuite-assets.s3.us-west-2.amazonaws.com';

function getProfileImageUrl(profileImage) {
  if (!profileImage) return '';
  if (profileImage.includes('/profile')) return profileImage;
  return `${S3_BASE}/uploads/profile/${profileImage}`;
}

function getGalleryImageUrl(filename) {
  if (!filename) return '';
  if (filename.includes('/gallery')) return filename;
  return `${S3_BASE}/uploads/gallery/${filename}`;
}

export default function Hero({ profile, gallery }) {
  const profileImgUrl = getProfileImageUrl(profile?.profile_image);
  const bgUrl = gallery.length > 0 ? getGalleryImageUrl(gallery[0].filename) : profileImgUrl;

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url('${bgUrl}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      <div className="hero-overlay"></div>

      <div className="container container-padding">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6 hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Available for Booking
            </div>
            <h1 className="display-2">{profile.name}</h1>
            <p className="lead">{profile.slogan}</p>
          </div>
          <div className="col-lg-6">
            <div className="hero-image-wrapper">
              {/* Gold glow behind */}
              <div className="hero-image-glow"></div>

              {/* Offset decorative frame */}
              <div className="hero-image-frame"></div>

              {/* Corner accents */}
              <div className="hero-corner hero-corner-tl"></div>
              <div className="hero-corner hero-corner-br"></div>

              {/* Main image */}
              <div className="hero-image-inner">
                <Image
                  src={profileImgUrl}
                  alt={profile.name}
                  width={500}
                  height={620}
                  className="hero-profile-image"
                  priority
                />
              </div>

              {/* Floating glass info card */}
              {profile.location && (
                <div className="hero-float-card">
                  <div className="hero-float-card-dot"></div>
                  <div>
                    <span className="hero-float-card-label">Based in</span>
                    <span className="hero-float-card-value">{profile.location}</span>
                  </div>
                </div>
              )}

              {/* Floating accent ring */}
              <div className="hero-accent-ring"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  );
}
