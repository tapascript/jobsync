import Link from "next/link";
import Image from "next/image";

import Details from "@/components/Details";
import { getFormattedNumber } from "@/utils/all-util";

const JobBoard = ({ job }) => {
  console.log(job);
  return (
    <div className="p-4 bg-white rounded-lg grid gap-2 md:gap-4">
      <div className="space-y-2">
        <h2 className="text-xl font-bold sm:text-2xl">{job?.title}</h2>
        <div className="text-2xl text-gray-700">
          <Link href={job?.employer_website} target="_blank" className="flex">
            {" "}
            <Image
              className="rounded-full mr-1"
              src={job?.employer_avatar}
              alt={job?.employer}
              width={30}
              height={30}
            />
            {job?.employer}
          </Link>
        </div>
        <p className="text-md text-gray-500 mx-2">{job?.description}</p>
      </div>
      <div className="space-y-2 ml-3">
        <p className="text-sm text-gray-500">
          <span className="font-semibold mr-1">Location:</span>
          {job?.city === "Remote" ? "Remote" : `${job?.city}, ${job?.country}`}
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-semibold mr-1">Salary:</span>
          {getFormattedNumber(job?.salary)} USD
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-semibold mr-1">Posted on:</span>
          {job?.post_date.toLocaleDateString()}
        </p>
      </div>
      <div className="space-y-3">
        <Details label="Requirements" information={job?.requirements} />
        <Details label="Benefits" information={job?.benefits} />
      </div>
      <div className="text-right">
        <Link
          className="inline-flex h-9 items-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          href="#"
        >
          Apply
        </Link>
      </div>
    </div>
  );
};

export default JobBoard;
