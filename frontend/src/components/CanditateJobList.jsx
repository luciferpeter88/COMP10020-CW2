import JobCard from "./JobCard";
function CanditateJobList() {
  return (
    <div className="dashboard__right">
      <div className="dash__content">
        <div className="applied__job__info radius-16">
          <div className="applied__job__list">
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CanditateJobList;
