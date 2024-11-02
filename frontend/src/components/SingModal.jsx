function SignInModal() {
  return (
    <div
      className="modal similar__modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="max-content similar__form form__padding">
            {/* Modal Header */}
            <div className="d-flex mb-3 align-items-center justify-content-between">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                {/* Font Awesome X-Mark Icon */}
                <i className="fa-regular fa-xmark text-primary"></i>
              </button>
            </div>

            {/* Placeholder for Tab Content */}
            <div className="tab-content" id=""></div>

            {/* Login Form */}
            <form
              action="/candidate-dashboard"
              method="post"
              className="d-flex flex-column gap-3"
            >
              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="email" className="fw-medium text-dark mb-3">
                  Your Email
                </label>
                <div className="position-relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    defaultValue="user@test.com"
                    placeholder="Enter your email"
                    required
                    className="form-control"
                  />
                  <i className="fa-light fa-user icon"></i>
                </div>
              </div>

              {/* Password Field */}
              <div className="form-group">
                <label htmlFor="password" className="fw-medium text-dark mb-3">
                  Password
                </label>
                <div className="position-relative">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    defaultValue="1234"
                    placeholder="Enter your password"
                    required
                    className="form-control"
                  />
                  <i className="fa-light fa-lock icon"></i>
                </div>
              </div>

              {/* Submit Button */}
              <div className="form-group my-3">
                <button type="submit" className="rts__btn w-100 fill__btn">
                  Login
                </button>
              </div>
            </form>

            {/* Signup Link */}
            <span className="d-block text-center fw-medium">
              Don`t have an account?
              <a
                href="#"
                data-bs-target="#signupModal"
                data-bs-toggle="modal"
                className="text-primary"
              >
                Sign Up
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInModal;
