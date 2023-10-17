import { useEffect, useState } from "react";
import axios from "axios";
import JobSearchForm from "../Components/JobSearchForm";
import JobList from "../Components/JobList";

function Home() {
  //root url - https://api.adzuna.com/v1/api
  const INITIAL_JOBDATA = {
    jobTitle: "",
    location: "",
    salaryMin: "",
    salaryMax: "",
  };
  const appId = "4c2119b3";
  const appKey = "b2c18430a670fef0fe602e747766841e";
  const [jobSearchData, setJobSearchData] = useState([]);
  const [jobList, setJobList] = useState([]);

  // //Request URL - https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=4c2119b3&app_key=b2c18430a670fef0fe602e747766841e&title_only=web%20developer&where=los%20angeles&salary_min=50000&salary_max=120000

  useEffect(() => {
    async function getJobData() {
      try {
        let { jobTitle, location, salaryMin, salaryMax } = jobSearchData;
        let res =
          salaryMin || salaryMax || location
            ? await axios.get(
                `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${appId}&app_key=${appKey}&title_only=${jobTitle}&where=los%20angeles&salary_min=${salaryMin}&salary_max=${salaryMax}`
              )
            : await axios.get(
                `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=${appId}&app_key=${appKey}&title_only=${jobTitle}&where=los%20angeles`
              );

        setJobList(res.data.results);
      } catch (error) {
        console.error("Error receiving data", error);
      }
    }
    getJobData();
  }, [jobSearchData]);

  function handleFormData(formData) {
    setJobSearchData(formData);
  }

  function getJobList() {
    console.log("Joblist: ", jobList);
    console.log(jobSearchData.salaryMin);
  }
  getJobList();

  function handleSaveJob(e) {
    console.log(e);
  }

  return (
    <>
      <div>
        <JobSearchForm onSubmit={handleFormData} />
      </div>
      <div>
        <JobList jobs={jobList} />
      </div>
    </>
  );
}

export default Home;
