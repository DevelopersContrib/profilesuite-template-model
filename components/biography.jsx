export default function Biography({ profile, experiences, education, skills, links, social }) {
  
  const socials = [{ socialName: "Facebook" }, { socialName: "Instagram" }, { socialName: "Twitter" }];
  
  const vitalStats = [
    { label: "Height", value: profile.model_height+"cm" },
    { label: "Bust", value: profile.model_bust+" cm" },
    { label: "Cup", value: profile.model_cup },
    { label: "Hips", value: profile.model_hips},
    { label: "Inseam", value: profile.model_inseam},
    { label: "Eye Color", value: profile.model_eye_color},
    { label: "Shoe Size", value: profile.model_shoe_size },
  ];

  const location = [
    { label: "Current Location", value: profile.location},
    { label: "Hometown", value: profile.hometown },
  ];

  const convertDate = (datestring) => {
    const date = new Date(datestring);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${month}/${day}/${year}`;
  }

  return (
    <>
      <section className="aboutme-bg py-5">
        <div className="container py-5">
          {/* Experience and Education Row */}
          <div className="row">
            <div className="col-md-4 mb-4">
              <h2 className="section-title mb-4">Experiences</h2>
              {experiences.map((experience, index) => (
                  <div key={index} className="experience-item">
                    <p className="experience-year">{convertDate(experience.from_date)} to {convertDate(experience.to_date)}</p>
                    <h5 className="experience-title">{experience.description}</h5>
                    <p className="experience-place">{experience.location}</p>
                  </div>
                ))}
            </div>
            <div className="col-md-4">
              <h2 className="section-title mb-4">Education</h2>
              {education.map((edu, index) => (
                  <div key={index} className="education-item">
                    <p className="education-year">{convertDate(edu.from_date)} to {convertDate(edu.to_date)}</p>
                    <h5 className="education-school">{edu.school} - {edu.description}</h5>
                    <p className="education-place">{edu.location}</p>
                  </div>
                ))}
            </div>
            {/* Location Row */}
            <div className="col-md-4">
              <h2 className="section-title mb-4">Location</h2>
              {location.map((loc, index) => (
                <div key={index} className="location-item">
                  <p className="location-label">{loc.label}</p>
                  <h5 className="location-value">{loc.value}</h5>
                </div>
              ))}
            </div>
          </div>

          <div className="row">
            <div className="col">
              <hr className="mb-4 pb-2" />
            </div>
          </div>

          {/* Socials, Skills, and Links Row */}
          <div className="row">
            <div className="col-md-4 mb-4">
              <h2 className="section-title mb-4">Socials</h2>
              {socials.map((social, index) => (
                <div key={index} className="col-item">
                  <h5>{social.socialName}</h5>
                </div>
              ))}
            </div>
            <div className="col-md-4">
              <h2 className="section-title mb-4">Skills</h2>
              {skills.map((skill, index) => (
                <div key={index} className="col-item">
                  <h5>{skill.skill}</h5>
                </div>
              ))}
            </div>
            <div className="col-md-4">
              <h2 className="section-title mb-4">Links</h2>
              {links.map((link, index) => (
                <div key={index} className="col-item">
                  <h5>{link.link}</h5>
                </div>
              ))}
            </div>
          </div>

          <div className="row">
            <div className="col">
              <hr className="mb-4 pb-2" />
            </div>
          </div>

          {/* Vital Stats Row - Inline Block */}
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-title mb-4">Vital Stats</h2>
              <div className="d-flex flex-wrap">
                {vitalStats.map((stat, index) => (
                  <div key={index} className="vital-stat-item" style={{ display: 'inline-block' }}>
                    <p className="vital-stat-label m-0">{stat.label}:</p>
                    <h5 className="vital-stat-value m-0">{stat.value}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>          
        </div>
      </section>
    </>
  );
}
