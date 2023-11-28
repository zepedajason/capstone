import { useEffect, useState } from "react";
import axios from "axios";
import SalaryChart from "../../Components/SalaryChart/SalaryChart.js";
import "./SalaryInfo.css";
function SalaryInfo() {
  const appId = "4c2119b3";
  const appKey = "b2c18430a670fef0fe602e747766841e";
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("it-jobs");

  useEffect(() => {
    async function getJobData() {
      try {
        let res = await axios.get(
          `https://api.adzuna.com/v1/api/jobs/us/categories?app_id=${appId}&app_key=${appKey}`
        );
        setCategoryList(res.data.results);
      } catch (error) {
        console.error("Error receiving data", error);
      }
    }
    getJobData();
  }, [selectedCategory]);

  function handleCategoryChange(event) {
    const value = event.target.value;
    setSelectedCategory(value);
  }

  return (
    <>
      <div className="category-selector">
        <label htmlFor="categoryDropdown">Select a Category:</label>
        <select
          id="categoryDropdown"
          onChange={handleCategoryChange}
          value={selectedCategory}
        >
          <option value="">Select a category</option>
          {categoryList.map((category) => (
            <option key={category.tag} value={category.tag}>
              {category.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <SalaryChart key={selectedCategory} tag={selectedCategory} />
      </div>
    </>
  );
}

export default SalaryInfo;
