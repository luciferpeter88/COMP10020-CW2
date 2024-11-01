const Banner = () => {
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
              {/* <div
                className="rts__job__search wow animated fadeInUp"
                data-wow-delay=".2s"
              >
                <form
                  action="#"
                  className="d-flex align-items-center flex-wrap flex-md-nowrap flex-lg-wrap flex-xl-nowrap gap-4 gap-xl-0 justify-content-between"
                >
                  <div className="input-group flex-wrap d-flex gap-4">
                    <div className="single__input d-flex flex-column">
                      <label htmlFor="location">Location</label>
                      <select
                        name="location"
                        className="select-nice"
                        id="location"
                      >
                        <option value="1">Select Location</option>
                        <option value="2">Dhaka</option>
                        <option value="3">Barisal</option>
                        <option value="4">Chittagong</option>
                      </select>
                    </div>
                    <div className="vr d-none d-sm-block"></div>
                    <div className="single__input d-flex flex-column">
                      <label htmlFor="job__type">Job Type</label>
                      <select
                        name="job__type"
                        className="select-nice"
                        id="job__type"
                      >
                        <option value="1">Select Job Type</option>
                        <option value="2">Full Time</option>
                        <option value="3">Part Time</option>
                        <option value="4">Internship</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="rts__btn gap-2 fill__btn job__search"
                    aria-label="Search"
                  >
                    <i className="fa-light fa-magnifying-glass"></i> Search Job
                  </button>
                </form>
              </div> */}
            </div>
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
};

export default Banner;
