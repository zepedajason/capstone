import JobCard from "./JobCard";
import { useState } from "react";

function JobList({ jobs }) {
  const [savedJobs, setSavedJobs] = useState([]);

  function saveJob(job) {
    setSavedJobs([...savedJobs, job]);
  }

  console.log(savedJobs);
  return (
    <div>
      Job Listings
      <ul>
        {jobs
          ? jobs.map((job) => {
              return <JobCard key={job.id} job={job} onSaveJob={saveJob} />;
            })
          : ""}
      </ul>
    </div>
  );
}

export default JobList;
