import { createContext, useState } from "react";

const SavedJobsContext = createContext();

function SavedJobsProvider({ children }) {
  const [savedJobs, setSavedJobs] = useState([]);

  function saveJob(job) {
    setSavedJobs([...savedJobs, job]);
  }

  function removeJob(jobId) {
    setSavedJobs((prevSavedJobs) =>
      prevSavedJobs.filter((job) => job.id !== jobId)
    );
  }

  return (
    <SavedJobsContext.Provider
      value={{ savedJobs, setSavedJobs, removeJob, saveJob }}
    >
      {children}
    </SavedJobsContext.Provider>
  );
}

export { SavedJobsContext, SavedJobsProvider };
