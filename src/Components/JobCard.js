function JobCard({ job, onSaveJob }) {
  const cardStyle = {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  };

  function handleSaveJob(e) {
    onSaveJob(job);
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
      <button onClick={handleSaveJob}>Save Job</button>
    </div>
  );
}

export default JobCard;
