import { useState } from "react";

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
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="jobTitle">Job Title: </label>
        <input
          type="text"
          name="jobTitle"
          placeholder="ex: Plumber"
          value={formData.jobTitle}
          onChange={handleChangeOfFormInput}
        ></input>

        <label htmlFor="location">Location: </label>
        <input
          type="text"
          name="location"
          placeholder="ex: Los Angeles"
          value={formData.location}
          onChange={handleChangeOfFormInput}
        ></input>
        <br />
        <label htmlFor="salaryMin">Salary Minimum: </label>
        <input
          type="text"
          name="salaryMin"
          placeholder="Yearly Salary, ex: $40000"
          value={formData.salaryMin}
          onChange={handleChangeOfFormInput}
        ></input>
        <br />
        <label htmlFor="salaryMax">Salary Maximum: </label>
        <input
          type="text"
          name="salaryMax"
          placeholder="Yearly Salary, ex: $80000"
          value={formData.salaryMax}
          onChange={handleChangeOfFormInput}
        ></input>
        <br />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default JobSearchForm;
