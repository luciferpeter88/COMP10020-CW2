function CanditateProfile() {
  return (
    <div className="dashboard__right">
      <div className="dash__content">
        {/* sidebar menu */}
        {/* <div className="sidebar__menu d-md-block d-lg-none">
          <div className="sidebar__action">
            <i className="fa-sharp fa-regular fa-bars" /> Sidebar
          </div>
        </div> */}
        {/* sidebar menu end */}
        <div className="my__profile__tab radius-16 bg-white">
          <nav>
            <div className="nav nav-tabs">
              <a className="nav-link active">My Details</a>
            </div>
          </nav>
          <div className="my__details" id="info">
            <div className="info__top">
              <div className="author__image">
                <img src="src/assets/img/dashboard/proifle.svg" alt="" />
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
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    required=""
                  />
                </div>
                <div className="rt-input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="jobpath@gmqail.com"
                    required=""
                  />
                </div>
              </div>
              <div className="row row-cols-sm-2 row-cols-1 g-3">
                <div className="rt-input-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    placeholder={+880171234567}
                    required=""
                  />
                </div>
                <div className="rt-input-group">
                  <label htmlFor="dob">Date of Birth</label>
                  <input type="date" id="dob" required="" />
                </div>
              </div>
              <div className="row row-cols-sm-2 row-cols-1 g-3">
                <div className="rt-input-group">
                  <label htmlFor="gender">Gender</label>
                  <select name="gender" id="gender" className="form-select">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="rt-input-group">
                  <label htmlFor="age">Age</label>
                  <select name="age" id="age" className="form-select">
                    <option value={18}>18</option>
                    <option value={19}>19</option>
                    <option value={20}>20</option>
                    <option value={21}>21</option>
                    <option value={22}>22</option>
                    <option value={23}>23</option>
                    <option value={24}>24</option>
                    <option value={25}>25</option>
                    <option value={26}>26</option>
                    <option value={27}>27</option>
                    <option value={28}>28</option>
                    <option value={29}>29</option>
                    <option value={30}>30</option>
                    <option value={31}>31</option>
                    <option value={32}>32</option>
                    <option value={33}>33</option>
                    <option value={34}>34</option>
                    <option value={35}>35</option>
                    <option value={36}>36</option>
                    <option value={37}>37</option>
                  </select>
                </div>
              </div>
              {/* salary type */}
              <div className="row row-cols-sm-3 row-cols-1 g-3">
                <div className="rt-input-group">
                  <label htmlFor="salary">Salary Type</label>
                  <select name="salary" id="salary" className="form-select">
                    <option value="hourly">Hourly</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                  </select>
                </div>
                <div className="rt-input-group">
                  <label htmlFor="jobcat">Job Category</label>
                  <select name="jobcat" id="jobcat" className="form-select">
                    <option value={1}>Select Job Category</option>
                    <option value={2}>it consultancy</option>
                    <option value={3}>Job Category 2</option>
                    <option value={4}>Job Category 3</option>
                    <option value={5}>Job Category 4</option>
                    <option value={6}>Job Category 5</option>
                    <option value={7}>Job Category 6</option>
                  </select>
                </div>
                <div className="rt-input-group">
                  <label htmlFor="jobtitle">Job Title</label>
                  <input
                    type="text"
                    id="jobtitle"
                    placeholder="Enter Job Title"
                    required=""
                  />
                </div>
              </div>
              {/* salary type end */}
              {/* qualification */}
              <div className="row row-cols-sm-3 row-cols-1 g-3">
                <div className="rt-input-group">
                  <label htmlFor="qualification">qualification</label>
                  <select
                    name="qualification"
                    id="qualification"
                    className="form-select"
                  >
                    <option value={1}>Select Qualification</option>
                    <option value={2}>SSC</option>
                    <option value={3}>HSC</option>
                    <option value={4}>Diploma</option>
                    <option value={5}>Graduation</option>
                    <option value={6}>Post Graduation</option>
                  </select>
                </div>
                <div className="rt-input-group">
                  <label htmlFor="lang">Language</label>
                  <select name="lang" id="lang" className="form-select">
                    <option value={1}>Select Language</option>
                    <option value={2}>English</option>
                    <option value={3}>Hindi</option>
                    <option value={4}>French</option>
                    <option value={5}>Spanish</option>
                    <option value={6}>Chinese</option>
                  </select>
                </div>
                <div className="rt-input-group">
                  <label htmlFor="tags">Tags</label>
                  <input
                    type="text"
                    id="tags"
                    placeholder="Enter Tags"
                    required=""
                  />
                </div>
              </div>
              {/* qualification end */}
              {/* experience */}
              <div className="row row-cols-sm-2 row-cols-1 g-3">
                <div className="rt-input-group">
                  <label htmlFor="experience">experience</label>
                  <select
                    name="experience"
                    id="experience"
                    className="form-select"
                  >
                    <option value={1}>Experience</option>
                    <option value={2}>1 Year</option>
                    <option value={3}>2 Year</option>
                    <option value={4}>3 Year</option>
                    <option value={5}>4 Year</option>
                  </select>
                </div>
                <div className="rt-input-group">
                  <label htmlFor="show">Show my profile</label>
                  <select name="show" id="show" className="form-select">
                    <option value={1}>Yes</option>
                    <option value={2}>No</option>
                  </select>
                </div>
              </div>
              {/* experience end */}
              {/* editor area */}
              <div className="rt-input-group">
                <label htmlFor="editor">Candidate Description</label>
                <textarea
                  name="editor"
                  id="editor"
                  className="form-control"
                  placeholder="Enter Description"
                  cols={10}
                  rows={5}
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="social__links radius-16 p-30 bg-white" id="address">
          <div className="info__field">
            <button type="submit" className="rts__btn fill__btn mx-0">
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CanditateProfile;
