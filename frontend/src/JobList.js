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
      {jobs.map(j => 
        <Job
          key={j.id}
          id={j.id}
          title={j.title}
          salary={j.salary}
          equity={j.equity}
          company={j.company}
        />
      )}
    </ul>
  );
};

export default JobList;