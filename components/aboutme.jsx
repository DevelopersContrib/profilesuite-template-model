import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';

export default function Aboutme({ profile }) {
  return (
    <>
      <section className="aboutme-bg py-5">
        <div className="container py-5">
          <header className="row">
            <div className="col">
              <h2>About</h2>
              <p className="lead">
                {profile.introduction}
              </p>
            </div>
          </header>
          <div className="row align-items-stretch">
            {[
              { title: 'Slogan', content: profile.slogan },
              { title: 'Affiliations', content: profile.affiliations },
              { title: 'Achievements', content: profile.achievements },
              { title: 'Languages', content: profile.languages },
            ].map((item, index) => (
              <div className="col-xl-3 col-lg-4 col-md-6 col-12 d-flex" key={index}>
                <article className="card-hover-svg card card-body d-flex flex-column gap-3">
                  <div>
                    <span className="icon-shape icon-xxl" aria-hidden="true">
                      <FontAwesomeIcon icon={faAddressBook} />
                    </span>
                  </div>
                  <div>
                    <h3 className="mb-0">{item.title}</h3>
                    <span className="text-gray-500">{item.content}</span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
