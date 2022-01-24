import { useState } from 'react';

const CompanySearchForm = ({ getCompanies }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = evt => {
    const { value } = evt.target;
    setSearchTerm(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    getCompanies(searchTerm === '' ? undefined : searchTerm);
    setSearchTerm('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='nameLike'>Name</label>
      <input
        name='nameLike'
        value={searchTerm}
        onChange={handleChange}
      />
      <button>Search</button>
    </form>
  );
};


export default CompanySearchForm;