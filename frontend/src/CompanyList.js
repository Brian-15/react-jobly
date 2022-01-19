import CompanyCard from './CompanyCard';

const CompanyList = ({ companies }) => {

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