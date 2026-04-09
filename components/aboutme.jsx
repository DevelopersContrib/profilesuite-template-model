import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faUsers, faMedal, faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function Aboutme({ profile }) {
  const cards = [
    { title: 'Slogan', content: profile.slogan, icon: faQuoteLeft },
    { title: 'Affiliations', content: profile.affiliations, icon: faUsers },
    { title: 'Achievements', content: profile.achievements, icon: faMedal },
    { title: 'Languages', content: profile.languages, icon: faGlobe },
  ];

  return (
    <section className="about-section" id="about">
      <div className="about-bg-glow"></div>
      <div className="container">
        {/* Intro area */}
        <div className="row align-items-end mb-5">
          <div className="col-lg-8">
            <span className="section-label">Get to Know</span>
            <h2 className="section-heading">About Me</h2>
            <hr className="section-divider" />
            <p className="about-intro">{profile.introduction}</p>
          </div>
          <div className="col-lg-4 d-none d-lg-block text-end">
            <div className="about-quote-mark">&ldquo;</div>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {cards.map((item, index) => (
            <div className="col-xl-3 col-lg-6 col-md-6 col-12" key={index}>
              <div className="about-card" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="about-card-top">
                  <div className="about-card-icon">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                  <span className="about-card-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
                <div className="about-card-line"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
