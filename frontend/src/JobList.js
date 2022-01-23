import { useState, useEffect } from 'react';
import Job from './Job';
import JoblyApi from './api';

const JobList = ({ company }) => {

  const [jobs, setJobs] = useState(company ? company.jobs : []);
  useEffect(function getJobsOnRender() {
    if (!company) {
      console.log('len 0', 'getting all jobs')
      getJobs();
    }
    else console.log('len > 0', 'getting company jobs');
  }, []);

  const getJobs = async () => {
    const jobs = await JoblyApi.getJobs();
    console.log('api call to jobs')
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