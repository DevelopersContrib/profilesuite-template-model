const rawBase =
  (typeof process !== 'undefined' && process.env.NEXT_PUBLIC_S3_URL) ||
  'https://profilesuite-assets.s3.us-west-2.amazonaws.com/';
export const S3_BASE = rawBase.replace(/\/+$/, '');

export const PROFILE_PLACEHOLDER_SRC = '/profile-placeholder.svg';

function collapseDuplicateSegments(key, segment) {
  // e.g. uploads/gallery/gallery/x -> uploads/gallery/x
  const prefix = `uploads/${segment}/`;
  const double = `${prefix}${segment}/`;
  let k = key.replace(/^\/+/, '').replace(/\/+/g, '/');
  while (k.startsWith(double)) {
    k = prefix + k.slice(double.length);
  }
  return k;
}

function normalizeProfileKeyPath(k) {
  let x = String(k || '')
    .replace(/^\/+/, '')
    .replace(/\/+/g, '/');
  // Bucket keys are profiles/<file> (see https://…amazonaws.com/profiles/…), not uploads/profile/
  if (x.startsWith('profiles/')) {
    while (x.includes('profiles/profiles/')) {
      x = x.replace(/profiles\/profiles\//g, 'profiles/');
    }
    return x;
  }
  while (x.includes('uploads/profile/profiles/')) {
    x = x.replace(/uploads\/profile\/profiles\//g, 'profiles/');
  }
  if (x.startsWith('uploads/profile/')) {
    return collapseDuplicateSegments(x, 'profile');
  }
  if (x.startsWith('profile/')) {
    return `uploads/profile/${x.slice('profile/'.length)}`.replace(/\/+/g, '/');
  }
  return `uploads/profile/${x}`.replace(/\/+/g, '/');
}

export function profileImageKey(profileImage) {
  if (!profileImage) return '';
  if (profileImage.startsWith('http')) {
    try {
      const u = new URL(profileImage);
      const host = u.hostname.toLowerCase();
      const onOurBucket =
        host.includes('amazonaws.com') && host.includes('profilesuite');
      if (!onOurBucket) {
        return String(profileImage).trim();
      }
      const path = u.pathname.replace(/^\/+/, '');
      return normalizeProfileKeyPath(path);
    } catch {
      return '';
    }
  }
  return normalizeProfileKeyPath(profileImage);
}

/** Direct S3/CDN URL for <img> / next/image `src` (uses NEXT_PUBLIC_S3_URL base). */
export function publicAssetUrlFromKey(key) {
  if (!key) return '';
  if (key.startsWith('http://') || key.startsWith('https://')) return key;
  const path = key.split('/').map(encodeURIComponent).join('/');
  return `${S3_BASE}/${path}`;
}

export function getProfileImagePublicUrl(profileImage) {
  return publicAssetUrlFromKey(profileImageKey(profileImage));
}

export function getGalleryImagePublicUrl(filename) {
  return publicAssetUrlFromKey(galleryImageKey(filename));
}

function normalizeGalleryKeyPath(k) {
  let x = String(k || '')
    .replace(/^\/+/, '')
    .replace(/\/+/g, '/');
  // Same layout as profiles/: keys are gallery/<file> at bucket root
  if (x.startsWith('gallery/')) {
    while (x.includes('gallery/gallery/')) {
      x = x.replace(/gallery\/gallery\//g, 'gallery/');
    }
    return x;
  }
  while (x.includes('uploads/gallery/gallery/')) {
    x = x.replace(/uploads\/gallery\/gallery\//g, 'gallery/');
  }
  if (x.startsWith('uploads/gallery/')) {
    return collapseDuplicateSegments(x, 'gallery');
  }
  return `uploads/gallery/${x}`.replace(/\/+/g, '/');
}

export function galleryImageKey(filename) {
  if (!filename) return '';
  if (filename.startsWith('http')) {
    try {
      const u = new URL(filename);
      const host = u.hostname.toLowerCase();
      const onOurBucket =
        host.includes('amazonaws.com') && host.includes('profilesuite');
      if (!onOurBucket) {
        return String(filename).trim();
      }
      return normalizeGalleryKeyPath(u.pathname.replace(/^\/+/, ''));
    } catch {
      return '';
    }
  }
  return normalizeGalleryKeyPath(filename);
}

export function assetSrcFromKey(key) {
  if (!key) return '';
  return `/api/s3-asset?key=${encodeURIComponent(key)}`;
}

export function getProfileImageSrc(profileImage) {
  return assetSrcFromKey(profileImageKey(profileImage));
}

export function getGalleryImageSrc(filename) {
  return assetSrcFromKey(galleryImageKey(filename));
}

export function absolutizeAssetUrlForServer(src, host) {
  if (!src || src.startsWith('http')) return src;
  if (!host) return src;
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  return `${protocol}://${host}${src}`;
}

/** next/image + relative /api/... uses a broken internal fetch; absolute URL uses fetch() and works. */
export function withAssetOrigin(origin, relativeSrc) {
  if (!relativeSrc) return '';
  if (relativeSrc.startsWith('http')) return relativeSrc;
  const base = (origin || '').replace(/\/+$/, '');
  if (!base) return relativeSrc;
  return `${base}${relativeSrc.startsWith('/') ? relativeSrc : `/${relativeSrc}`}`;
}



