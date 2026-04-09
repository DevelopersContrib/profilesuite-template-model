import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faBriefcase,
  faGraduationCap,
  faMapPin,
  faRulerVertical,
  faBolt,
  faShareNodes,
  faLink,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const socialMeta = {
  facebook: { label: 'Facebook', icon: faFacebookF },
  instagram: { label: 'Instagram', icon: faInstagram },
  twitter: { label: 'Twitter', icon: faTwitter },
};

export default function Biography({ profile, experiences, education, skills, links, social }) {
  const featuredStat = { label: "Height", value: profile.model_height, unit: "cm" };

  const measurementStats = [
    { label: "Bust", value: profile.model_bust, unit: "cm" },
    { label: "Cup", value: profile.model_cup },
    { label: "Hips", value: profile.model_hips },
    { label: "Inseam", value: profile.model_inseam },
  ];

  const detailStats = [
    { label: "Eye Color", value: profile.model_eye_color },
    { label: "Shoe Size", value: profile.model_shoe_size },
  ];

  const location = [
    { label: "Current Location", value: profile.location },
    { label: "Hometown", value: profile.hometown },
  ];

  const convertDate = (datestring) => {
    const date = new Date(datestring);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}/${year}`;
  };

  const activeSocials = ['facebook', 'instagram', 'twitter'].filter(key => social[key]);

  return (
    <section className="biography-section" id="biography">
      <div className="bio-bg-glow"></div>
      <div className="container">
        <span className="section-label">Background</span>
        <h2 className="section-heading">Resume</h2>
        <hr className="section-divider" />

        {/* Experience / Education / Location */}
        <div className="row g-4 g-lg-5 mt-2">
          <div className="col-lg-4">
            <div className="bio-block">
              <div className="bio-block-header">
                <span className="bio-block-icon">
                  <FontAwesomeIcon icon={faBriefcase} />
                </span>
                <h3 className="bio-block-title">Experience</h3>
              </div>
              {experiences.map((experience, index) => (
                <div key={index} className="timeline-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <p className="timeline-date">
                    {convertDate(experience.from_date)} — {convertDate(experience.to_date)}
                  </p>
                  <h5 className="timeline-title">{experience.description}</h5>
                  <p className="timeline-subtitle">{experience.location}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="bio-block">
              <div className="bio-block-header">
                <span className="bio-block-icon">
                  <FontAwesomeIcon icon={faGraduationCap} />
                </span>
                <h3 className="bio-block-title">Education</h3>
              </div>
              {education.map((edu, index) => (
                <div key={index} className="timeline-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <p className="timeline-date">
                    {convertDate(edu.from_date)} — {convertDate(edu.to_date)}
                  </p>
                  <h5 className="timeline-title">{edu.school}</h5>
                  <p className="timeline-subtitle">{edu.description} · {edu.location}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4">
            <div className="bio-block">
              <div className="bio-block-header">
                <span className="bio-block-icon">
                  <FontAwesomeIcon icon={faMapPin} />
                </span>
                <h3 className="bio-block-title">Location</h3>
              </div>
              {location.map((loc, index) => (
                <div key={index} className="location-card">
                  <p className="label">{loc.label}</p>
                  <h5 className="value">{loc.value}</h5>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="bio-divider" />

        {/* Vital Stats — Model Comp Card */}
        <div className="bio-block">
          <div className="bio-block-header">
            <span className="bio-block-icon">
              <FontAwesomeIcon icon={faRulerVertical} />
            </span>
            <h3 className="bio-block-title">Vital Stats</h3>
          </div>

          <div className="stats-comp-card">
            {/* Featured stat */}
            <div className="stats-featured">
              <span className="stats-featured-label">{featuredStat.label}</span>
              <div className="stats-featured-value">
                <span className="stats-featured-number">{featuredStat.value}</span>
                {featuredStat.unit && <span className="stats-featured-unit">{featuredStat.unit}</span>}
              </div>
            </div>

            <div className="stats-divider-v"></div>

            {/* Measurements row */}
            <div className="stats-measurements">
              {measurementStats.map((stat, index) => (
                <div key={index} className="stats-cell">
                  <span className="stats-cell-label">{stat.label}</span>
                  <span className="stats-cell-value">
                    {stat.value}{stat.unit && <small> {stat.unit}</small>}
                  </span>
                </div>
              ))}

              <div className="stats-divider-h"></div>

              {detailStats.map((stat, index) => (
                <div key={index} className="stats-cell">
                  <span className="stats-cell-label">{stat.label}</span>
                  <span className="stats-cell-value">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="bio-divider" />

        {/* Skills / Socials / Links */}
        <div className="row g-4 g-lg-5">
          <div className="col-lg-4">
            <div className="bio-block">
              <div className="bio-block-header">
                <span className="bio-block-icon">
                  <FontAwesomeIcon icon={faBolt} />
                </span>
                <h3 className="bio-block-title">Skills</h3>
              </div>
              <div className="d-flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag" style={{ animationDelay: `${index * 0.05}s` }}>
                    {skill.skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="bio-block">
              <div className="bio-block-header">
                <span className="bio-block-icon">
                  <FontAwesomeIcon icon={faShareNodes} />
                </span>
                <h3 className="bio-block-title">Socials</h3>
              </div>
              <div className="d-flex flex-wrap gap-2">
                {activeSocials.map((key) => (
                  <a key={key} href={social[key]} target="_blank" rel="noopener noreferrer" className="social-tag">
                    <FontAwesomeIcon icon={socialMeta[key].icon} className="social-tag-icon" />
                    {socialMeta[key].label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="bio-block">
              <div className="bio-block-header">
                <span className="bio-block-icon">
                  <FontAwesomeIcon icon={faLink} />
                </span>
                <h3 className="bio-block-title">Links</h3>
              </div>
              {links.map((link, index) => (
                <a key={index} href={link.link} target="_blank" rel="noopener noreferrer" className="link-item">
                  <span className="link-text">{link.link}</span>
                  <span className="link-arrow">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
