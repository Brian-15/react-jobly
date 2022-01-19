import CompanyCard from './CompanyCard';
import JoblyApi from './api';
import { useEffect, useState } from 'react';

const CompanyList = () => {

  const [companies, setCompanies] = useState([]);
  useEffect(function getCompaniesOnLoad() {
    getCompanies();
  }, []);

  async function getCompanies() {
    const companies = await JoblyApi.getCompanies();
    console.log(companies)
    setCompanies(companies);
  }

  return (
    <ul>
      {companies.map(c =>
        <CompanyCard
          key={c.handle}
          handle={c.handle}
          name={c.name}
          description={c.description}
          logoUrl={c.logoUrl}
        />
      )}
    </ul>
  )
};

export default CompanyList;