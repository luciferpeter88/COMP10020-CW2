// import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="rts__section rts__header absolute__header">
      <div className="container-none">
        <div
          className="rts__menu__background"
          style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
        >
          <div className="row">
            <div className="d-flex align-items-center justify-content-between">
              <div className="rts__logo">
                <img
                  className="logo__image"
                  src="src/assets/img/logo/header__one.svg"
                  width="160"
                  height="40"
                  alt="logo"
                />
              </div>
              <div className="rts__menu d-flex gap-5 gap-lg-4 gap-xl-5 align-items-center">
                <div className="navigation d-none d-lg-block">
                  <nav className="navigation__menu" id="offcanvas__menu">
                    <ul className="list-unstyled">
                      <li className="navigation__menu--item ">
                        <button to="#">Home</button>
                      </li>
                      <li className="navigation__menu--item">
                        <button to="#">Home</button>
                      </li>
                      <li className="navigation__menu--item ">
                        <button to="#">Home</button>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="header__right__btn d-flex gap-3">
                  <button
                    className="small__btn d-none d-sm-flex no__fill__btn border-6 font-xs"
                    aria-label="Login Button"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    <i className="rt-login"></i>Sign In
                  </button>
                  <button
                    aria-label="Singup Button"
                    className="small__btn d-none d-sm-flex d-xl-flex fill__btn border-6 font-xs"
                  >
                    Sign Up
                  </button>
                  <button
                    className="d-md-block d-lg-none"
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
