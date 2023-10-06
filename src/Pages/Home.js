import { useEffect, useState } from "react";
import axios from "axios";
import JobSearchForm from "../Components/JobSearchForm";

function Home() {
  //root url - https://api.adzuna.com/v1/api
  const appId = "4c2119b3";
  const appKey = "b2c18430a670fef0fe602e747766841e";
  const [jobSearchData, setJobSearchData] = useState({});

  // //Request URL - https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=4c2119b3&app_key=b2c18430a670fef0fe602e747766841e&title_only=web%20developer&where=los%20angeles&salary_min=50000&salary_max=120000

  useEffect(() => {
    async function getJobData() {
      try {
        if (jobSearchData) {
          let { jobTitle, location, salaryMin, salaryMax } = jobSearchData;
          console.log(jobTitle);
        }
      } catch (error) {
        console.error("Error receiving data", error);
      }
    }
    getJobData();
  }, []);

  function handleFormData(formData) {
    //let { jobTitle, location, salaryMin, salaryMax } = formData;
    //console.log(formData);
    setJobSearchData(formData);
  }

  console.log(jobSearchData);

  return (
    <>
      <JobSearchForm onSubmit={handleFormData} />
    </>
  );
}

export default Home;
