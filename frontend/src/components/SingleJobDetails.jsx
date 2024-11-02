// src/components/JobDetails.js
import jobdetails from "../assets/img/pages/job-details-4.webp";
function SingleJobDetails() {
  return (
    <div class="rts__section section__padding">
      <div class="container">
        <div class="row justify-content-center g-30">
          <div class="col-lg-8">
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

              {/* Responsibilities */}
              <div id="responsibility" className="mb-30">
                <h6 className="fw-semibold mb-20">Responsibility</h6>
                <ul className="list-style-dot">
                  <li>
                    Design and build web and enterprise application using in
                    ReactJS/Next JS/.Net Core
                  </li>
                  <li>
                    Collaborate with cross-functional teams to analyze, design,
                    and implement new features.
                  </li>
                  <li>
                    Follow defined coding rules/conventions defined by the
                    company.
                  </li>
                  <li>
                    Perform Unit test and ensure proper test coverage as per
                    organizational standard.
                  </li>
                  <li>
                    Prepare basic design, detail design, execute basic
                    acceptance testing.
                  </li>
                  <li>
                    Follow review process for peer review to code delivery.
                  </li>
                  <li>Participate in defined meeting as per company policy.</li>
                  <li>
                    Senior Software Engineer should pose mindset and ability to
                    lead small team.
                  </li>
                </ul>
              </div>

              {/* Requirements */}
              <div id="requirements" className="mb-30">
                <h6 className="fw-semibold mb-20">Requirements</h6>
                <ul className="list-style-dot">
                  <li>
                    Excellent knowledge of Relational Databases MYSQL and ORM
                    technologies (JPA, Hibernate).
                  </li>
                  <li>
                    Strong understanding on Object-Oriented analysis and design
                    using common design patterns.
                  </li>
                  <li>Need to know advanced in ReactJS/Next JS/.Net Core.</li>
                  <li>Practical experience in REST & RESTful web services.</li>
                  <li>Commanding knowledge on Maven, Gradle build tools.</li>
                  <li>
                    Follow review process for peer review to code delivery.
                  </li>
                  <li>Participate in defined meeting as per company policy.</li>
                  <li>
                    Senior Software Engineer should pose mindset and ability to
                    lead small team.
                  </li>
                </ul>
              </div>

              {/* Skills and Experience */}
              <div id="skill" className="mb-30">
                <h6 className="fw-semibold mb-20">Skills and Experience</h6>
                <div className="job__tags job__details__tags">
                  <a href="#" className="job__tag">
                    Javascript
                  </a>
                  <a href="#" className="job__tag">
                    User Interface
                  </a>
                  <a href="#" className="job__tag">
                    Problem Solving
                  </a>
                </div>
              </div>

              {/* Salary and Benefits */}
              <div id="salary" className="mb-30">
                <h6 className="fw-semibold mb-20">Salary and Benefits</h6>
                <ul className="list-style-dot">
                  <li>Lunch Facilities: Fully Subsidized</li>
                  <li>Salary Review: Yearly</li>
                  <li>Festival Bonus: 2</li>
                  <li>
                    This will be a Night Shift work - Timing will be from 11:00
                    PM to 07:00 AM.
                  </li>
                  <li>Weekend - Two Days</li>
                  <li>Monthly on-time guaranteed payment</li>
                  <li>
                    Early Earned Leave, Sick Leave, and Casual Leave facility
                    and many more to come soon.
                  </li>
                  <li>Salary: $1000 - $2000 Monthly</li>
                </ul>
              </div>

              {/* Apply Button and Share Links */}
              <div className="d-flex flex-wrap gap-4 mt-40 mb-60">
                <a
                  href="#"
                  className="rts__btn apply__btn fill__btn be-1 fw-bold"
                >
                  Apply This Position
                </a>
                <div className="d-flex gap-3 align-items-center">
                  <span className="h6 fw-semibold">Share</span>
                  <div className="rts__social d-flex gap-3">
                    <a href="https://facebook.com" aria-label="Facebook">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://instagram.com" aria-label="Instagram">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="https://linkedin.com" aria-label="LinkedIn">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://pinterest.com" aria-label="Pinterest">
                      <i className="fa-brands fa-pinterest"></i>
                    </a>
                    <a href="https://youtube.com" aria-label="YouTube">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleJobDetails;
