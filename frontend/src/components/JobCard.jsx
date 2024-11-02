import { Link } from "react-router-dom";

const JobCard = () => {
  return (
    <div className="col-lg-12">
      <div className="rts__job__card__big style__gradient__two flex-wrap d-flex justify-content-between align-items-center gap-3">
        {/* Job Details */}
        <div className="d-flex gap-4 flex-column flex-md-row mb-3 mb-md-0 justify-content-start align-items-center">
          {/* Company Icon */}
          <div className="company__icon">
            <img
              src="src/assets/img/home-1/company/apple.svg"
              alt="Apple Company"
            />
          </div>

          {/* Job Meta */}
          <div className="job__meta">
            <div className="d-flex align-items-center gap-3">
              <Link to="#" className="job__title h6">
                Senior UI Designer, Apple
              </Link>
            </div>
            <div className="d-flex gap-3 flex-wrap gap-lg-4 fw-medium">
              <div className="d-flex gap-2 align-items-center">
                <i className="fa-light fa-location-dot"></i> New York, USA
              </div>
              <div className="d-flex gap-2 align-items-center">
                <i className="fa-light fa-briefcase"></i> Full Time
              </div>
              <div className="d-flex gap-2 align-items-center">
                <i className="fa-light fa-clock"></i> 3 Days Ago
              </div>
            </div>
          </div>
        </div>

        {/* Job Tags and Apply Button */}
        <div className="d-flex gap-4 flex-wrap align-items-center">
          {/* Job Tags */}
          <div className="job__tags d-flex flex-wrap gap-3">
            <button className="badge bg-light text-secondary">Creative</button>
            <button className="badge bg-light text-secondary">
              User Interface
            </button>
            <button className="badge bg-light text-secondary">Web UI</button>
          </div>

          {/* Salary and Apply Button */}
          <div className="d-flex gap-3 flex-wrap">
            <div className="job__salary d-flex gap-2 align-items-center">
              <i className="fa-sharp fa-solid fa-dollar-sign"></i> $500
              <span>Monthly</span>
            </div>
            <Link to="#" className="btn btn-secondary apply__btn">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
