import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-regular-svg-icons';

export default function Aboutme({ domain }) {
  return (
    <>
      <section className="aboutme-bg py-5">
        <div className="container py-5">
          <header className="row">
            <div className="col">
              <h2>About</h2>
              <p className="lead">
                Bai Meng Yan, known by her stage name Bai Lu, is a Chinese actress and model who predominantly works in Chinese television drama industry. Bai Lu started her acting career in 2016 and has since then starred in a lot of popular dramas.
              </p>
            </div>
          </header>
          <div className="row align-items-stretch">
            {[
              { title: 'Slogan', content: "Hard work beats talent when talent doesn't work hard" },
              { title: 'Affiliations', content: "In 2016, Bai signed a contract with Yu Zheng's entertainment company Huanyu Film" },
              { title: 'Achievements', content: 'Most Promising New Actress, Most Popular Actress' },
              { title: 'Languages', content: 'Chinese, Mandarin' },
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
