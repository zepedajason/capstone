import axios from "axios";
import { useEffect, useState } from "react";
import BarChart from "./BarChart.js";
import "./SalaryChart.css";

function SalaryChart(props) {
  const appId = "4c2119b3";
  const appKey = "b2c18430a670fef0fe602e747766841e";
  const [isLoading, setIsLoading] = useState(true);
  const [chartData, setChartData] = useState({});
  const tag = props.tag;

  function formatCategoryLabel(category) {
    // Split the category string by hyphens and capitalize the first letter of each part
    if (category) {
      const parts = category.split("-");
      const formattedParts = parts.map(
        (part) => part.charAt(0).toUpperCase() + part.slice(1)
      );

      // Join the formatted parts with a space to create the final label
      const formattedLabel = formattedParts.join(" ");

      return formattedLabel;
    }
  }
  const chartLabel = formatCategoryLabel(tag);

  useEffect(() => {
    async function getJobData() {
      try {
        let res = await axios.get(
          `https://api.adzuna.com/v1/api/jobs/us/history?app_id=4c2119b3&app_key=b2c18430a670fef0fe602e747766841e&category=${tag}&months=12`
        );
        const receivedData = res.data.month;
        const salaryDataArray = Object.keys(receivedData).map((key) => ({
          date: key,
          salary: receivedData[key],
        }));

        setChartData({
          labels: salaryDataArray.map((data) => data.date).sort(),
          datasets: [
            {
              label: `${chartLabel} in USA`,
              data: salaryDataArray.map((data) => data.salary),
              backgroundColor: ["green"],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
        }); // Set the chartData state

        setIsLoading(false);
      } catch (error) {
        console.error("Error receiving data", error);
        setIsLoading(false);
      }
    }

    if (isLoading) {
      getJobData();
    }
  }, [isLoading, tag]);

  return (
    <div className="salary-container">
      <div>
        <h2>Historical Salary Chart by Month</h2>
        <p>
          Below is a chart that displays the historical average monthly salary
          for job category selected.
        </p>
        {isLoading ? (
          "Loading..."
        ) : (
          <div className="salary-chart">
            <BarChart chartData={chartData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default SalaryChart;
