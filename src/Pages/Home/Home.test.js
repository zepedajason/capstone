import { render } from "@testing-library/react";
import Home from "./Home";
import { SavedJobsProvider } from "../../Components/SavedJobsProvider";
import JobSearchForm from "../../Components/JobSearchForm/JobSearchForm";
import JobList from "../../Components/JobList/JobList";

test("it renders home", () => {
  render(
    <SavedJobsProvider>
      <Home />
    </SavedJobsProvider>
  );
});

test("it renders the job search form", () => {
  render(<JobSearchForm />);
});

test("it renders the job list", () => {
  render(
    <SavedJobsProvider>
      <JobList />
    </SavedJobsProvider>
  );
});
