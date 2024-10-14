import Image from 'next/image';

export default function Hero({ domain }) {
  return (
    <section className="hero-section">
      <div className="container container-padding">
        <div className="row align-items-center gy-6 gy-xl-0">
          <div className="col-md-6">
            <h1 className="display-2 mb-4">Bai Lu</h1>
            <p className='lead'>Bai Meng Yan, known by her stage name Bai Lu, is a Chinese actress and model who predominantly works in Chinese television drama industry. Bai Lu started her acting career in 2016 and has since then starred in a lot of popular dramas</p>
          </div>
          <div className="col-md-6 text-center">
            <div className="shape-wrapper">
              <div className="background-shape"></div>
              <Image 
                src="https://images.pexels.com/photos/17362899/pexels-photo-17362899.jpeg" 
                alt="Descriptive Alt Text" 
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
