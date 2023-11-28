import "./JobCard.css";

function JobCard({ isSaved, job, onClickHandle }) {
  if (!job) {
    return null; // or you can return a placeholder, loading indicator, etc.
  }

  return (
    <div className="job-card">
      <a href={job.redirect_url} className="job-link">
        <h2>{job.title}</h2>
      </a>
      <p>
        <strong>Company: </strong>
        {job.company.display_name}
      </p>
      <p>
        <strong>Location: </strong>
        {job.location.display_name}
      </p>

      <div className="job-description">
        <strong>Description:</strong> {job.description}
      </div>

      <div className="job-salary">
        <p>
          <strong>Salary: </strong> ${job.salary_min} - ${job.salary_max}
        </p>
      </div>

      <a href={job.redirect_url} className="job-link">
        <strong>Apply</strong>
      </a>
      <br></br>
      <button className="job-btn" onClick={() => onClickHandle(job)}>
        {isSaved ? "Remove Job" : "Save Job"}
      </button>
    </div>
  );
}

export default JobCard;
