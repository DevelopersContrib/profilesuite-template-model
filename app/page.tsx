import Navigation from "../components/navigation";
import Hero from "../components/hero";
import Aboutme from "../components/aboutme";
import Gallery from "../components/gallery";
import Biography from "../components/biography";
import Footer from "../components/footer";
import {  getDomain, getProfile, updateProfile } from "../lib/data";

const S3_BASE = 'https://profilesuite-assets.s3.us-west-2.amazonaws.com';

function getGalleryImageUrl(filename: string): string {
  if (!filename) return '';
  if (filename.includes('/gallery')) return filename;
  return `${S3_BASE}/uploads/gallery/${filename}`;
}

async function filterValidGalleryImages(galleryItems: any[]): Promise<any[]> {
  if (!galleryItems || galleryItems.length === 0) return [];

  const results = await Promise.all(
    galleryItems.map(async (item) => {
      const url = getGalleryImageUrl(item.filename);
      if (!url) return null;
      try {
        const res = await fetch(url, { method: 'HEAD' });
        return res.ok ? item : null;
      } catch {
        return null;
      }
    })
  );
  return results.filter(Boolean);
}

export default async function Home() {
  const updated = await updateProfile();
  const c = await getProfile();
  const domain = getDomain();
  const profile = c.data.profile;
  const education = c.data.education;
  const experience = c.data.experience;
  const skills = c.data.skills;
  const gallery = await filterValidGalleryImages(c.data.gallery);
  const links = c.data.links;
  const social = c.data.socials;

  return (
    <>
      <Navigation domain={domain} />
      <Hero profile={profile} gallery={gallery} />
      <Aboutme profile={profile}/>
      <Gallery gallery={gallery}/>
      <Biography profile={profile} experiences={experience} education={education} skills={skills} links={links} social={social}/>
      <Footer domain={domain} social={social} />
    </>
  );
}
