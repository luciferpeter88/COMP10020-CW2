function Header() {
  return (
    <header className="rts__section rts__header absolute__header">
      <div className="container-none">
        <div className="rts__menu__background">
          <div className="row">
            <div className="d-flex align-items-center justify-content-between">
              {/* Logo */}
              <div className="rts__logo">
                <a href="/">
                  <img
                    className="logo__image"
                    src="/assets/img/logo/header__one.svg"
                    width="160"
                    height="40"
                    alt="logo"
                  />
                </a>
              </div>
              {/* Navigation Menu */}
              <div
                className="rts__menu d-flex gap-5 gap-lg-4 gap-xl-5 align-items-center"
                style={{ padding: "1.5rem" }}
              >
                {/* Header Buttons */}
                <div className="header__right__btn d-flex gap-3">
                  <a
                    href="#"
                    className="small__btn d-none d-sm-flex no__fill__btn border-6 font-xs"
                    aria-label="Login Button"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    <i className="rt-login"></i> Sign In
                  </a>
                  <a
                    href="/employer-dashboard"
                    className="small__btn d-none d-sm-flex d-xl-flex fill__btn border-6 font-xs"
                    aria-label="Job Posting Button"
                  >
                    Sign Up
                  </a>
                  <button
                    className="d-md-block d-lg-none"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvas"
                    aria-controls="offcanvas"
                  >
                    <i className="fa-sharp fa-regular fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
