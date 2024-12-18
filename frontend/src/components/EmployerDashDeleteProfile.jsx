function EmployerDashDeleteProfile() {
  return (
    <div className="dashboard__content d-flex">
      <div className="dashboard__right">
        <div className="dash__content">
          <div className="candidate__passwordchange">
            <h3 className="mb-30 fw-semibold">Delete Profile</h3>
            <div className="change__password">
              <div className="password__change__form">
                <h4 className="text-center mb-4">
                  Are you sure! You want to delete your profile.
                </h4>
                <form action="#">
                  {/* single item */}
                  <div className="rts-input-group">
                    <label htmlFor="currentPassword">
                      Please Enter Your Login Password
                    </label>
                    <div className="input-box">
                      <input
                        type="password"
                        name="currentPassword"
                        id="currentPassword"
                        placeholder="Enter your current password"
                      />
                      <svg
                        className="password__icon"
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.4 17.7977C9.4 18.1159 9.27357 18.4211 9.04853 18.6462C8.82348 18.8712 8.51826 18.9977 8.2 18.9977C7.88174 18.9977 7.57652 18.8712 7.35147 18.6462C7.12643 18.4211 7 18.1159 7 17.7977C7 17.4794 7.12643 17.1742 7.35147 16.9491C7.57652 16.7241 7.88174 16.5977 8.2 16.5977C8.51826 16.5977 8.82348 16.7241 9.04853 16.9491C9.27357 17.1742 9.4 17.4794 9.4 17.7977ZM14.2 17.7977C14.2 18.1159 14.0736 18.4211 13.8485 18.6462C13.6235 18.8712 13.3183 18.9977 13 18.9977C12.6817 18.9977 12.3765 18.8712 12.1515 18.6462C11.9264 18.4211 11.8 18.1159 11.8 17.7977C11.8 17.4794 11.9264 17.1742 12.1515 16.9491C12.3765 16.7241 12.6817 16.5977 13 16.5977C13.3183 16.5977 13.6235 16.7241 13.8485 16.9491C14.0736 17.1742 14.2 17.4794 14.2 17.7977ZM19 17.7977C19 18.1159 18.8736 18.4211 18.6485 18.6462C18.4235 18.8712 18.1183 18.9977 17.8 18.9977C17.4817 18.9977 17.1765 18.8712 16.9515 18.6462C16.7264 18.4211 16.6 18.1159 16.6 17.7977C16.6 17.4794 16.7264 17.1742 16.9515 16.9491C17.1765 16.7241 17.4817 16.5977 17.8 16.5977C18.1183 16.5977 18.4235 16.7241 18.6485 16.9491C18.8736 17.1742 19 17.4794 19 17.7977Z"
                          fill="black"
                        />
                        <path
                          d="M11.8 24.9976H8.2C4.8064 24.9976 3.1084 24.9976 2.0548 23.9428C1 22.8892 1 21.1912 1 17.7976C1 14.404 1 12.706 2.0548 11.6524C3.1084 10.5976 4.8064 10.5976 8.2 10.5976H17.8C21.1936 10.5976 22.8916 10.5976 23.9452 11.6524C25 12.706 25 14.404 25 17.7976C25 21.1912 25 22.8892 23.9452 23.9428C22.8916 24.9976 21.1936 24.9976 17.8 24.9976H16.6M5.8 10.5976V8.19763C5.8 7.78963 5.8336 7.38763 5.8996 6.99763M19.9732 6.39763C19.6465 5.13602 18.9836 3.98667 18.0552 3.07204C17.1269 2.15742 15.9678 1.51177 14.7014 1.2039C13.4351 0.896023 12.1089 0.937454 10.8643 1.32378C9.61961 1.7101 8.50307 2.42684 7.6336 3.39763"
                          stroke="#939393"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </div>
                  {/* single item end */}
                  <div className="d-flex justify-content-end gap-30">
                    <button className="cancel__buttonh rts__btn gray__btn">
                      Cancel
                    </button>
                    <button type="submit" className="rts__btn fill__btn">
                      Delete Profile
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployerDashDeleteProfile;
