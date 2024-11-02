import jobdetails from "../assets/img/pages/job-details-4.webp";
function SingleJobDetails() {
  return (
    <div className="rts__section section__padding">
      <div className="container">
        <div className="row justify-content-center g-30">
          <div className="col-lg-8">
            <div className="rts__job__details">
              <div className="mb-30">
                <img className="rounded-3" src={jobdetails} alt="Job Details" />
              </div>

              {/* Job Overview */}
              <div className="job__overview style__four no-border-bottom mb-40">
                <h6 className="fw-semibold mb-30">Job Overview</h6>
                <div className="job__overview__content">
                  <ul className="d-grid grid-style">
                    <li className="d-flex flex-column gap-3 gap-sm-0 align-items-center justify-content-between">
                      <div className="d-flex gap-3">
                        <span className="icon">
                          <i className="fa-light fa-calendar"></i>
                        </span>
                        <div>
                          <span className="left-text">Date Posted</span>
                          <span className="text">10 July, 2023</span>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-column gap-3 gap-sm-0 align-items-center justify-content-between">
                      <div className="d-flex gap-3">
                        <span className="icon">
                          <i className="fa-light fa-user"></i>
                        </span>
                        <div>
                          <span className="left-text">Vacancy</span>
                          <span className="text">5</span>
                        </div>
                      </div>
                    </li>

                    <li className="d-flex flex-column gap-3 gap-sm-0 align-items-center justify-content-between">
                      <div className="d-flex gap-3">
                        <span className="icon">
                          <i className="fa-light fa-briefcase"></i>
                        </span>
                        <div>
                          <span className="left-text">Experience</span>
                          <span className="text">5 Years</span>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-column gap-3 gap-sm-0 align-items-center justify-content-between">
                      <div className="d-flex gap-3">
                        <span className="icon">
                          <i className="fa-light fa-dollar-sign"></i>
                        </span>
                        <div>
                          <span className="left-text">Offered Salary</span>
                          <span className="text">$2000-$3000</span>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-column gap-3 gap-sm-0 align-items-center justify-content-between">
                      <div className="d-flex gap-3">
                        <span className="icon">
                          <i className="fa-light fa-calendar-alt"></i>
                        </span>
                        <div>
                          <span className="left-text">Job Deadline</span>
                          <span className="text">01 August 2024</span>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-column gap-3 gap-sm-0 align-items-center justify-content-between">
                      <div className="d-flex gap-3">
                        <span className="icon">
                          <i className="fa-light fa-graduation-cap"></i>
                        </span>
                        <div>
                          <span className="left-text">Qualification</span>
                          <span className="text">Bachelor Degree</span>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-column gap-3 gap-sm-0 align-items-center justify-content-between">
                      <div className="d-flex gap-3">
                        <span className="icon">
                          <i className="fa-light fa-location-dot"></i>
                        </span>
                        <div>
                          <span className="left-text">Location</span>
                          <span className="text">New York, USA</span>
                        </div>
                      </div>
                    </li>
                    <li className="d-flex flex-column gap-3 gap-sm-0 align-items-center justify-content-between">
                      <div className="d-flex gap-3">
                        <span className="icon">
                          <i className="fa-light fa-genderless"></i>
                        </span>
                        <div>
                          <span className="left-text">Gender</span>
                          <span className="text">Both</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Job Description */}
              <div id="description" className="mb-30">
                <h6 className="fw-semibold mb-20">Job Description</h6>
                <p>
                  We are seeking a skilled Part-Time Software Engineer to join
                  our team, specializing in social media content creation for
                  lead generation purposes. The ideal candidate will have a
                  creative flair, technical proficiency, and a strong
                  understanding of social media trends and algorithms. Must be
                  able to work Monday-Friday during EST business hours. This
                  role will be under the ScaledOn brand, but will be working
                  directly with one of our partners as their dedicated Software
                  Engineer.
                </p>
              </div>

              {/* Apply Button and Share Links */}
              <div className="d-flex flex-wrap gap-4 mt-40 mb-60">
                <a className="rts__btn apply__btn fill__btn be-1 fw-bold">
                  Apply This Position
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleJobDetails;
