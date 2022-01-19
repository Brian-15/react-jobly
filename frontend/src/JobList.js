import Job from './Job';

const JobList = ({ jobs }) => {
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