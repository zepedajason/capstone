import "./JobCard.css";

function JobCard({ isSaved, job, onClickHandle }) {
  return (
    <div className="job-container">
      <div className="job-card">
        <a href={job.redirect_url} className="job-link">
          <h2>{job.title}</h2>
        </a>
        <h4>Company: {job.company.display_name}</h4>
        <h4>Location: {job.location.display_name}</h4>

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
    </div>
  );
}

export default JobCard;
