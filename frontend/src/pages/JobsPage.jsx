import { Link } from "react-router-dom";
import { Fragment } from "react";
import JobSearchForm from "../components/JobsSearchForm";
import JobCard from "../components/JobCard";

function JobPage() {
  return (
    <Fragment>
      <div className="rts__section breadcrumb__background">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 position-relative d-flex justify-content-between align-items-center">
              <div className="breadcrumb__area max-content breadcrumb__padding z-2">
                <h1 className="breadcrumb-title h3 mb-3">Jobs</h1>
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb m-0 lh-1">
                    <li className="breadcrumb-item">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Jobs
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="breadcrumb__area__shape d-flex gap-4 justify-content-end align-items-center">
                <div className="shape__one common">
                  <img
                    src="src/assets/img/breadcrumb/shape-1.svg"
                    alt="Shape 1"
                  />
                </div>
                <div className="shape__two common">
                  <img
                    src="src/assets/img/breadcrumb/shape-2.svg"
                    alt="Shape 2"
                  />
                </div>
                <div className="shape__three common">
                  <img
                    src="src/assets/img/breadcrumb/shape-3.svg"
                    alt="Shape 3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <JobSearchForm />
      <div className="rts__section section__padding">
        <div className="container">
          <div className="row g-30">
            <div className="col-12">
              {" "}
              <JobCard />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default JobPage;
