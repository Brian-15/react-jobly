import { useState, useEffect } from 'react';
import Job from './Job';
import JoblyApi from './api';

const JobList = () => {

  const [jobs, setJobs] = useState([]);
  useEffect(function getJobsOnRender() {
    getJobs();
  }, []);

  const getJobs = async () => {
    const jobs = await JoblyApi.getJobs();
    setJobs(jobs);
  };
  
  return (
    <ul>
      {jobs.map(({ id, title, salary, equity, company }) => 
        <Job
          key={id}
          id={id}
          title={title}
          salary={salary}
          equity={equity}
          company={company}
        />
      )}
    </ul>
  );
};

export default JobList;