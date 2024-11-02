import SidebarComponent from "../components/SidebarComponent";
import {
  SubmitSvg,
  CanditateSvg,
  DeleteSvg,
  MyJobSvg,
} from "../components/Svgs";
import EmployerMyJobs from "../components/EmployerMyJobs";

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
          <a className="logout__btn" href="#">
            <i className="rt-login" /> Logout
          </a>
        </div>
      </div>
      {/* <EmployerMyJobs /> */}
    </div>
  );
}
export default Dashboard;
