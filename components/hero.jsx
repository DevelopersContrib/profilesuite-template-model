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
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <div className="hero-overlay"></div>

      <div className="container container-padding">
        <div className="row align-items-center gy-6 gy-xl-0">
          <div className="col-md-6">
            <h1 className="display-2 mb-4">{profile.name}</h1>
            <p className="lead">{profile.slogan}</p>
          </div>
          <div className="col-md-6 text-center">
            <div className="shape-wrapper">
              <div className="background-shape"></div>
              <Image
                src={profileImgUrl}
                alt={profile.name}
                width={500}
                height={500}
                className="responsive-image"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
