import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SavedJobs from "./Pages/SavedJobs/SavedJobs";
import SalaryInfo from "./Pages/SalaryInfo/SalaryInfo";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/saved" element={<SavedJobs />}></Route>
      <Route path="/salaryinfo" element={<SalaryInfo />}></Route>
    </Routes>
  );
}

export default AppRoute;
