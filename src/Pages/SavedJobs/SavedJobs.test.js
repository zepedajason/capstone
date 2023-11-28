import { render } from "@testing-library/react";
import SavedJobs from "./SavedJobs";
import { SavedJobsProvider } from "../../Components/SavedJobsProvider";
import JobCard from "../../Components/JobCard/JobCard";

test("it renders Saved Jobs page", () => {
  render(
    <SavedJobsProvider>
      <SavedJobs />
    </SavedJobsProvider>
  );
});

test("it renders the Job Card", () => {
  render(
    <SavedJobsProvider>
      <JobCard />
    </SavedJobsProvider>
  );
});
