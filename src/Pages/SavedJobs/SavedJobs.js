import JobCard from "../../Components/JobCard/JobCard";
import { useContext } from "react";
import { SavedJobsContext } from "../../Components/SavedJobsProvider";
import "./SavedJobs.css";

function SavedJobs() {
  const { removeJob, savedJobs } = useContext(SavedJobsContext);

  return (
    <div className="centered-container">
      <h2 className="header">Saved Jobs</h2>
      <ul>
        {savedJobs && savedJobs.length > 0 ? (
          savedJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              isSaved={true}
              onClickHandle={removeJob}
            />
          ))
        ) : (
          <p>No saved jobs yet.</p>
        )}
      </ul>
    </div>
  );
}

export default SavedJobs;
