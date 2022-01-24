import { useEffect, useState } from 'react';
import CompanyCard from './CompanyCard';
import JoblyApi from '../api';
import CompanySearchForm from './CompanySearchForm';

const CompanyList = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(function getCompaniesOnLoad() {
    getCompanies();
  }, []);

  // awaits company data before setting company hook
  async function getCompanies(nameLike) {
    const companies = await JoblyApi.getCompanies(nameLike);
    setCompanies(companies);
  }

  return (
    <>
      <CompanySearchForm getCompanies={getCompanies} />
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
    </>
    
  )
};

export default CompanyList;