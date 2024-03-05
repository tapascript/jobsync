import JobBoard from "./JobBoard";
import { getJobs } from "@/app/db/queries";

const JobList = async () => {
  const jobs = await getJobs();
  console.log(jobs);
  return (
    <div className="grid gap-4 md:gap-6">
      {jobs.map((job, index) => (
        <JobBoard key={index} job={job} />
      ))}
      
    </div>
  );
};

export default JobList;
