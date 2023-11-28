import { useContext, useEffect, useState } from "react";
import axios from "axios";
import JobSearchForm from "../../Components/JobSearchForm/JobSearchForm.js";
import "./Home.css";
import JobList from "../../Components/JobList/JobList.js";
import { SavedJobsContext } from "../../Components/SavedJobsProvider.js";

function Home() {
  //root url - https://api.adzuna.com/v1/api

  const appId = "4c2119b3";
  const appKey = "b2c18430a670fef0fe602e747766841e";
  const [jobSearchData, setJobSearchData] = useState([]);
  const [jobList, setJobList] = useState([]);
  const { setSavedJobs } = useContext(SavedJobsContext);
  // //Request URL - https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=4c2119b3&app_key=b2c18430a670fef0fe602e747766841e&title_only=web%20developer&where=los%20angeles&salary_min=50000&salary_max=120000

  useEffect(() => {
    async function getJobData() {
      try {
        const { jobTitle, location, salaryMin, salaryMax } = jobSearchData;
        const queryParams = {
          app_id: appId,
          app_key: appKey,
          title_only: jobTitle || "",
          where: location || "los angeles",
        };

        if (salaryMin) {
          queryParams.salary_min = salaryMin;
        }

        if (salaryMax) {
          queryParams.salary_max = salaryMax;
        }

        const queryString = Object.entries(queryParams)
          .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
          .join("&");

        const apiUrl = `https://api.adzuna.com/v1/api/jobs/us/search/1?${queryString}`;

        const res = await axios.get(apiUrl);
        if (res && res.data && res.data.results) {
          setJobList(res.data.results);
        } else {
          console.error("Invalid API response:", res);
        }
      } catch (error) {
        console.error("Error receiving data", error);
      }
    }

    getJobData();
  }, [jobSearchData]);

  function handleFormData(formData) {
    setJobSearchData(formData);
  }

  function handleSaveJob(job) {
    setSavedJobs((prevSavedJobs) => [...prevSavedJobs, job]);
  }

  return (
    <>
      <div className="home-page">
        <div className="left-panel">
          <JobSearchForm onSubmit={handleFormData} />
        </div>
        <div className="divider"></div>
        <div className="right-panel">
          <JobList jobs={jobList} onSaveJob={handleSaveJob} />
        </div>
      </div>
    </>
  );
}

export default Home;
