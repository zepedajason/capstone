import JobCard from "../JobCard/JobCard";
import { useContext } from "react";
import { SavedJobsContext } from "../SavedJobsProvider";

function JobList({ jobs }) {
  const { saveJob } = useContext(SavedJobsContext);

  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs
          ? jobs.map((job) => {
              return (
                <JobCard
                  key={job.id}
                  job={job}
                  isSaved={false}
                  onClickHandle={saveJob}
                />
              );
            })
          : ""}
      </ul>
    </div>
  );
}

export default JobList;
