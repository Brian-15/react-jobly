import { useParams } from 'react-router-dom';
import JoblyApi from './api';
import JobList from './JobList';

const Company = () => {

  const { handle } = useParams();
  const {
    name,
    description,
    numEmployees,
    logoUrl,
    jobs
  } = JoblyApi.getCompany(handle);

  return (
    <div>
      <h2>{ name }</h2>
      <img src={logoUrl} />
      <p>{ description }</p>
      <p>{ numEmployees } total employees</p>
      <JobList jobs={jobs} />
    </div>
  );
};

export default Company;