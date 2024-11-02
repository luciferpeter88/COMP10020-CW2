// src/components/Breadcrumb.js
import { Link } from "react-router-dom";
import { Fragment } from "react";
import SingleJobHeader from "../components/SingleJobHeader";
import SingleJobDetails from "../components/SingleJobDetails";
import shape1 from "../assets/img/breadcrumb/shape-1.svg";
import shape2 from "../assets/img/breadcrumb/shape-2.svg";
import shape3 from "../assets/img/breadcrumb/shape-3.svg";

function SingleJobPage({ title }) {
  return (
    <Fragment>
      <div className="rts__section breadcrumb__background">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 position-relative d-flex justify-content-between align-items-center">
              <div className="breadcrumb__area max-content mx-auto breadcrumb__padding">
                <SingleJobHeader />
                <nav aria-label="breadcrumb">
                  <ul className="breadcrumb m-0 lh-1">
                    <li className="breadcrumb-item active" aria-current="page">
                      {title}
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="breadcrumb__area__shape breadcrumb__style__four d-flex gap-4 justify-content-end align-items-center">
                <div className="shape__one common">
                  <img src={shape1} alt="Shape 1" />
                </div>
                <div className="shape__two common">
                  <img src={shape2} alt="Shape 2" />
                </div>
                <div className="shape__three common">
                  <img src={shape3} alt="Shape 3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SingleJobDetails />
    </Fragment>
  );
}

export default SingleJobPage;
