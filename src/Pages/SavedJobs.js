import JobCard from "../Components/JobCard";
import { useContext, useEffect, useState } from "react";
import { SavedJobsContext } from "../Components/SavedJobsProvider";

function SavedJobs() {
  const { savedJobs } = useContext(SavedJobsContext);

  return (
    <div>
      <h2>Saved Jobs</h2>
      {savedJobs && savedJobs.length > 0 ? (
        savedJobs.map((job) => (
          <JobCard key={job.id} jobId={job.id} job={job} />
        ))
      ) : (
        <p>No saved jobs yet.</p>
      )}
    </div>
  );
}

export default SavedJobs;
