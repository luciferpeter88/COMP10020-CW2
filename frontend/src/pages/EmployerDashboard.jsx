import SidebarComponent from "../components/SidebarComponent";
import {
  SubmitSvg,
  CanditateSvg,
  DeleteSvg,
  MyJobSvg,
} from "../components/Svgs";
import EmployerMyJobs from "../components/EmployerMyJobs";
import EmployerDashJobPost from "../components/EmployerDashJobPost";
import EmployerDashList from "../components/EmployerDashList";
import EmployerDashDeleteProfile from "../components/EmployerDashDeleteProfile";

function Dashboard() {
  return (
    <div className="dashboard__content d-flex">
      <div className="dashboard__left">
        <div className="dash__menu">
          <ul>
            <SidebarComponent svg={<MyJobSvg />} text="My Jobs" />
            <li className="nav-item">
              <SidebarComponent svg={<SubmitSvg />} text="Submit Job" />
            </li>
            <li className="nav-item">
              <SidebarComponent svg={<CanditateSvg />} text="Candidate list" />
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
      {/* <EmployerMyJobs /> */}
      {/* <EmployerDashJobPost /> */}
      {/* <EmployerDashList /> */}
      <EmployerDashDeleteProfile />
    </div>
  );
}
export default Dashboard;
