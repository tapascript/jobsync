import React from 'react';
import Image from 'next/image';
import { LuFingerprint } from 'react-icons/lu';

import { Separator } from '@/components/ui/separator';

const JobDetailItem = ({ title, content }) => {
  return (
    <div className="flex gap-3">
      <LuFingerprint size={50} className="text-green-600" />
      <div className="content pt-2">
        <p className="text-sm text-slate-400">{title}</p>
        <p className="mt-1 text-base font-semibold">{content}</p>
      </div>
    </div>
  );
};

const JobDetailRoute = () => {
  return (
    <main className="flex w-full flex-col">
      <div className="job-title flex w-full flex-col items-start justify-between gap-6 bg-green-50 px-6 py-8 md:flex-row md:items-center md:px-16 md:py-10">
        <div className="flex gap-6">
          <Image
            src={''}
            alt="company"
            width={100}
            height={100}
            className="shrink-0 rounded-lg border-2"
          />
          <div className="flex flex-col pt-3">
            <h1 className="text-2xl font-extrabold">
              Company Name and this is long name
            </h1>
            <p className="text-gray-400">Job Title</p>
          </div>
        </div>

        <div className="price-range">
          <h1 className="text-2xl font-extrabold">Company Name</h1>
          <p className="text-gray-400">Job Posted Date</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 p-6 md:flex-row md:justify-center md:px-12 md:py-10">
        <JobDetailItem title="Experience" content="Min 3+ Years" />
        <JobDetailItem title={'Job Type'} content="Full Time" />
        <JobDetailItem title="Location" content="San Fransisco" />
        <JobDetailItem title="Qualification" content="Bachelor Degree" />
        <JobDetailItem title="Career Level" content="Intermediate" />
      </div>
      <Separator />
    </main>
  );
};

export default JobDetailRoute;
