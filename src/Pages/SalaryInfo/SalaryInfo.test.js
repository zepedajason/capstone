import { render } from "@testing-library/react";
import SalaryInfo from "./SalaryInfo";
import SalaryChart from "../../Components/SalaryChart/SalaryChart";

test("it renders Salary Info page", () => {
  render(<SalaryInfo />);
});

test("it renders the Salary Chart", () => {
  render(<SalaryChart />);
});
