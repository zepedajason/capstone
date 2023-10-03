import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SearchJobs from "./Pages/SearchJobs";
import SavedJobs from "./Pages/SavedJobs";

function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/search" element={<SearchJobs />}></Route>
      <Route path="/saved" element={<SavedJobs />}></Route>
    </Routes>
  );
}

export default AppRoute;
