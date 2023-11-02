import { useState } from "react";
import "./JobSearchForm.css";

function JobSearchForm({ onSubmit }) {
  const INITIAL_FORMDATA = {
    jobTitle: "",
    location: "",
    salaryMin: "",
    salaryMax: "",
  };
  const [formData, setFormData] = useState(INITIAL_FORMDATA);

  function handleChangeOfFormInput(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleFormSubmit(event) {
    event.preventDefault();
    onSubmit(formData);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit} className="job-form">
        <label htmlFor="jobTitle" className="label">
          Job Title:{" "}
        </label>
        <input
          className="input"
          type="text"
          name="jobTitle"
          placeholder="ex: Plumber"
          value={formData.jobTitle}
          onChange={handleChangeOfFormInput}
        ></input>

        <label htmlFor="location" className="label">
          Location:{" "}
        </label>
        <input
          className="input"
          type="text"
          name="location"
          placeholder="ex: Los Angeles"
          value={formData.location}
          onChange={handleChangeOfFormInput}
        ></input>
        <br />
        <label htmlFor="salaryMin" className="label">
          Salary Minimum:{" "}
        </label>
        <input
          className="input"
          type="text"
          name="salaryMin"
          placeholder="Yearly Salary, ex: $40000"
          value={formData.salaryMin}
          onChange={handleChangeOfFormInput}
        ></input>
        <br />
        <label htmlFor="salaryMax" className="label">
          Salary Maximum:{" "}
        </label>
        <input
          className="input"
          type="text"
          name="salaryMax"
          placeholder="Yearly Salary, ex: $80000"
          value={formData.salaryMax}
          onChange={handleChangeOfFormInput}
        ></input>
        <br />
        <button type="submit" className="submit-btn">
          Search
        </button>
      </form>
    </>
  );
}

export default JobSearchForm;
