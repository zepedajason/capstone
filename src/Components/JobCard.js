import { useContext, useState } from "react";
import { SavedJobsContext } from "./SavedJobsProvider";

function JobCard({ jobId, job }) {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  };
  const { saveJob, removeJob, savedJobs } = useContext(SavedJobsContext);
  const isJobSaved = savedJobs.some((savedJob) => savedJob.id === job.id);

  function handleSaveRemoveJob() {
    if (isJobSaved) {
      removeJob(job.id);
    } else {
      saveJob(job);
    }
  }

  return (
    <div style={cardStyle}>
      <h3>Job Title: {job.title}</h3>
      <h4>Company: {job.company.display_name}</h4>
      <p>
        <strong>Description:</strong> {job.description}
        <a href={job.redirect_url}>
          <strong> see more</strong>
        </a>
      </p>

      <p>
        <strong>Salary Minimum:</strong> {job.salary_min}
      </p>
      <p>
        <strong>Salary Maximum:</strong> {job.salary_max}
      </p>

      <button onClick={handleSaveRemoveJob}>
        {isJobSaved ? "Remove Job" : "Save Job"}
      </button>
    </div>
  );
}

export default JobCard;
