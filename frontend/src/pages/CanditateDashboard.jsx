import SidebarComponent from "../components/SidebarComponent";
import {
  SubmitSvg,
  CanditateSvg,
  DeleteSvg,
  MyJobSvg,
} from "../components/Svgs";
import CanditateProfile from "../components/CanditateProfile";
import CanditateJobList from "../components/CanditateJobList";
function CanditateDashboard() {
  return (
    <div className="dashboard__content d-flex">
      <div className="dashboard__left">
        <div className="dash__menu">
          <ul>
            <SidebarComponent svg={<MyJobSvg />} text="Profile" />
            <li className="nav-item">
              <SidebarComponent svg={<SubmitSvg />} text="Applied Jobs" />
            </li>
            <li className="nav-item">
              <SidebarComponent svg={<CanditateSvg />} text="Job Shortlist" />
            </li>
            <li className="nav-item">
              <SidebarComponent svg={<DeleteSvg />} text="Delete Profile" />
            </li>
          </ul>
        </div>
        <div className="dash__logout">
          <a className="logout__btn">
            <i className="rt-login" /> Logout
          </a>
        </div>
      </div>
      {/* <CanditateProfile /> */}
      <CanditateJobList />
    </div>
  );
}

export default CanditateDashboard;
