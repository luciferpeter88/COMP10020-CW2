function EmployerDashJobPost() {
  return (
    <div className="dashboard__content d-flex">
      <div className="dashboard__right">
        <div className="dash__content">
          <div className="sidebar__menu d-md-block d-lg-none">
            <div className="sidebar__action">
              <i className="fa-sharp fa-regular fa-bars" /> Sidebar
            </div>
          </div>
          <div className="my__profile__tab radius-16 bg-white">
            <nav>
              <div className="nav nav-tabs">
                <a className="nav-link active" href="#info">
                  Company Details
                </a>
              </div>
            </nav>
            <div className="my__details" id="info">
              <div className="info__top">
                <div className="author__image">
                  <img
                    className="p-4"
                    src="src/assets/img/icon/google.svg"
                    alt=""
                  />
                </div>
                <div className="select__image">
                  <label htmlFor="file" className="file-upload__label">
                    Upload New Photo
                  </label>
                  <input
                    type="file"
                    className="file-upload__input"
                    id="file"
                    required=""
                  />
                </div>
                <div className="delete__data">
                  <i className="fa-light fa-trash-can" />
                </div>
              </div>
              <div className="info__field">
                <div className="row row-cols-sm-2 row-cols-1 g-3">
                  <div className="rt-input-group">
                    <label htmlFor="cname">Company Name</label>
                    <input
                      type="text"
                      id="cname"
                      placeholder="Company Name"
                      required=""
                    />
                  </div>
                  <div className="rt-input-group">
                    <label htmlFor="jt">Job Title</label>
                    <input
                      type="text"
                      id="jt"
                      placeholder="Software Engineer"
                      required=""
                    />
                  </div>
                </div>
                <div className="row row-cols-1">
                  <div className="rt-input-group">
                    <label htmlFor="jd">Job Description</label>
                    <textarea
                      id="jd"
                      placeholder="Enter Job Description"
                      required=""
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="row row-cols-sm-2 row-cols-1 g-3">
                  <div className="rt-input-group">
                    <label htmlFor="ws">Working Schedule</label>
                    <select name="ws" id="ws" className="form-select">
                      <option value={18}>Day Shift</option>
                      <option value={19}>Night Shift</option>
                    </select>
                  </div>
                  <div className="rt-input-group">
                    <label htmlFor="wd">Working Day</label>
                    <select name="wd" id="wd" className="form-select">
                      <option value={18}>Sat - Thus</option>
                      <option value={19}>Mon - Fri</option>
                      <option value={20}>Mon - Sun</option>
                    </select>
                  </div>
                </div>
                <div className="row row-cols-sm-2 row-cols-1 g-3">
                  <div className="rt-input-group">
                    <label htmlFor="salary">Salary</label>
                    <select name="salary" id="salary" className="form-select">
                      <option value={1}>Hourly</option>
                      <option value={1}>Monthly</option>
                      <option value={1}>Custom</option>
                    </select>
                  </div>
                  <div className="rt-input-group">
                    <label htmlFor="hp">How You Want To Pay?</label>
                    <select name="hp" id="hp" className="form-select">
                      <option value={1}>Monthly</option>
                      <option value={2}>Yearly</option>
                    </select>
                  </div>
                </div>
                <div className="row row-cols-sm-2 row-cols-1 g-3">
                  <div className="rt-input-group">
                    <label htmlFor="salarymin">Salary Min</label>
                    <select
                      name="salary"
                      id="salarymin"
                      className="form-select"
                    >
                      <option value={1}>1000 - 1500</option>
                      <option value={1}>2000 - 2500</option>
                      <option value={1}>3000 - 3500</option>
                    </select>
                  </div>
                  <div className="rt-input-group">
                    <label htmlFor="sm">Salary Max</label>
                    <select name="sm" id="sm" className="form-select">
                      <option value={1}>1000 - 1500</option>
                      <option value={1}>2000 - 2500</option>
                      <option value={1}>3000 - 3500</option>
                    </select>
                  </div>
                </div>
                <div className="row row-cols-sm-2 row-cols-1 g-3">
                  <div className="rt-input-group">
                    <label htmlFor="experience">Experience</label>
                    <input
                      type="text"
                      id="experience"
                      placeholder="Enter Experience"
                      required=""
                    />
                  </div>
                  <div className="rt-input-group">
                    <label htmlFor="qf">Qualification</label>
                    <input
                      type="text"
                      id="qf"
                      placeholder="Enter Qualification"
                      required=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="social__links radius-16 p-30 bg-white" id="address">
            <div className="info__field">
              <div className="row row-cols-sm-2 row-cols-1 g-3">
                <button type="submit" className="rts__btn fill__btn">
                  Post Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EmployerDashJobPost;
