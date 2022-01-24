import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from '../api';
import JobList from '../jobs/JobList';

const Company = () => {
  const { handle } = useParams();
  const [c, setCompany] = useState(undefined);

  useEffect(function getCompanyOnLoad() {
    getCompany();
  }, []);

  async function getCompany() {
    const data = await JoblyApi.getCompany(handle);
    setCompany(data);
  }

  return (
    c ?
      <div>
        <h2>{ c.name }</h2>
        <img src={ c.logoUrl } alt={`${c.name} logo`} />
        <p>{ c.description }</p>
        <p>{ c.numEmployees } total employees</p>
        <JobList company={c} />
      </div>
      :
      <p>Loading...</p>
  );
};

export default Company;