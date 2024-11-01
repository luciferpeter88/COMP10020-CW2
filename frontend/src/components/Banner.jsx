function Banner() {
  return (
    <section className="rts__banner home__one__banner pt-260">
      <div className="rts__banner__background">
        <div className="shape__home__one __first d-none d-lg-block">
          <img src="src/assets/img/home-1/banner/banner-shape.svg" alt="" />
        </div>
        <div className="shape__home__one __second d-none d-lg-block">
          <img src="src/assets/img/home-1/banner/banner-shape-2.svg" alt="" />
        </div>
        <div className="shape__home__one __third"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="rts__banner__wrapper d-flex gap-4 justify-content-between">
            {/* Banner Content */}
            <div className="rts__banner__content">
              <h1 className="rts__banner__title wow animated fadeInUp">
                Find Your Perfect Dream Job With <span>Jobpath</span>
              </h1>
              <p
                className="rts__banner__desc my-40 wow animated fadeInUp"
                data-wow-delay=".1s"
              >
                Looking for a new job can be both exciting and daunting.
                Navigating the job market involves exploring various avenues,
                including online job boards.
              </p>
              {/* Job Search Form */}
            </div>
            {/* Banner Image */}
            <div className="rts__banner__image position-relative">
              <figure className="banner__image">
                <img
                  src="src/assets/img/home-1/banner/image_2x.webp"
                  alt="banner"
                />
              </figure>
              <div className="banner__image__shape">
                <div className="facebook">
                  <i className="fab fa-facebook"></i>
                </div>
                <div className="twitter">
                  <i className="fab fa-twitter"></i>
                </div>
                <div className="linkedin">
                  <i className="fab fa-linkedin-in"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
