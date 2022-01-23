import { useState, useEffect } from 'react';
import Job from './Job';
import JoblyApi from './api';

const JobList = ({ company }) => {

  const [jobs, setJobs] = useState(company ? company.jobs : []);

  // get all jobs if no company property provided
  useEffect(() => !company ? getJobs() : undefined, []);

  const getJobs = async () => {
    const jobs = await JoblyApi.getJobs();
    setJobs(jobs);
  };

  return (
    <ul>
      {jobs.map(j => 
        <Job
          key={j.id}
          id={j.id}
          title={j.title}
          salary={j.salary}
          equity={j.equity}
          company={j.companyName}
          handle={j.companyHandle}
        />
      )}
    </ul>
  );
};

export default JobList;