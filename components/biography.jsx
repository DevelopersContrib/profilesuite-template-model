export default function Biography({ domain }) {
  const experiences = [
    { year: "2023", eventName: "Michael Kors Model", place: "San Francisco, CA" },
    { year: "2021", eventName: "Louis Vuitton", place: "Austin, TX" },
  ];

  const education = [
    { year: "2018", school: "University of California, Berkeley", place: "Berkeley, CA" },
    { year: "2014", school: "San Diego High School", place: "San Diego, CA" },
  ];

  const socials = [{ socialName: "Facebook" }, { socialName: "Instagram" }, { socialName: "Twitter" }];
  const skills = [{ skillName: "Acting" }, { skillName: "Singing" }, { skillName: "Modelling" }];
  const links = [{ linkName: "Wiki Profile" }];

  const vitalStats = [
    { label: "Height", value: "170 cm" },
    { label: "Bust", value: "78 cm" },
    { label: "Cup", value: "B" },
    { label: "Hips", value: "60 cm" },
    { label: "Inseam", value: "70 cm" },
    { label: "Eye Color", value: "Black" },
    { label: "Shoe Size", value: "8 US" },
  ];

  const location = [
    { label: "Current Location", value: "Changzhou, China" },
    { label: "Hometown", value: "Jiangsu" },
  ];

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
                  <p className="experience-year">{experience.year}</p>
                  <h5 className="experience-title">{experience.eventName}</h5>
                  <p className="experience-place">{experience.place}</p>
                </div>
              ))}
            </div>
            <div className="col-md-4">
              <h2 className="section-title mb-4">Education</h2>
              {education.map((edu, index) => (
                <div key={index} className="education-item">
                  <p className="education-year">{edu.year}</p>
                  <h5 className="education-school">{edu.school}</h5>
                  <p className="education-place">{edu.place}</p>
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
                  <h5>{skill.skillName}</h5>
                </div>
              ))}
            </div>
            <div className="col-md-4">
              <h2 className="section-title mb-4">Links</h2>
              {links.map((link, index) => (
                <div key={index} className="col-item">
                  <h5>{link.linkName}</h5>
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
