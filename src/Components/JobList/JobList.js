import JobCard from "../JobCard/JobCard";
import { useContext } from "react";
import { SavedJobsContext } from "../SavedJobsProvider";
import "./JobList.css";

function JobList({ jobs }) {
  const { saveJob, savedJobs, removeJob } = useContext(SavedJobsContext);
  const isJobSaved = (job) =>
    savedJobs.some((savedJob) => savedJob.id === job.id);

  return (
    <div>
      <h2 className="header">Job Listings</h2>
      <ul className="job-list">
        {jobs
          ? jobs.map((job) => {
              return (
                <JobCard
                  key={job.id}
                  job={job}
                  isSaved={isJobSaved(job)}
                  onClickHandle={
                    isJobSaved(job) ? () => removeJob(job) : () => saveJob(job)
                  }
                />
              );
            })
          : ""}
      </ul>
    </div>
  );
}

export default JobList;
