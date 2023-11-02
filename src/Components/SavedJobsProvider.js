import { createContext, useState, useEffect } from "react";

const SavedJobsContext = createContext();

function SavedJobsProvider({ children }) {
  const [savedJobs, setSavedJobs] = useState(
    JSON.parse(localStorage.getItem("savedJobs")) || []
  );

  function saveJob(job) {
    const newSavedJobs = [...savedJobs, job];
    setSavedJobs(newSavedJobs);
    localStorage.setItem("savedJobs", JSON.stringify(newSavedJobs));
  }

  function removeJob(savedJob) {
    const newSavedJobs = savedJobs.filter((job) => job.id !== savedJob.id);
    setSavedJobs(newSavedJobs);
    localStorage.setItem("savedJobs", JSON.stringify(newSavedJobs));
  }

  useEffect(() => {
    const localSavedJobs = JSON.parse(localStorage.getItem("savedJobs"));
    if (localSavedJobs) {
      setSavedJobs(localSavedJobs);
    }
  }, []);

  return (
    <SavedJobsContext.Provider
      value={{ savedJobs, setSavedJobs, removeJob, saveJob }}
    >
      {children}
    </SavedJobsContext.Provider>
  );
}

export { SavedJobsContext, SavedJobsProvider };
