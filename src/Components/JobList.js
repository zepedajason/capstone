import JobCard from "./JobCard";

function JobList({ jobs, onSaveJob }) {
  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs
          ? jobs.map((job) => {
              return <JobCard key={job.id} job={job} onSaveJob={onSaveJob} />;
            })
          : ""}
      </ul>
    </div>
  );
}

export default JobList;
