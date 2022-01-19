import JoblyApi from './api';

const Job = ({ id, title, salary, equity, company }) => {

  const apply = () => {
    console.log('applied to job', id);
    // apply logic here
  };

  return (
    <li>
      <h3>{ title }</h3>
      { company === undefined ? undefined : <p>{ company }</p> }
      <p>Salary: { salary }</p>
      <p>Equity: { equity }</p>
      <button onClick={apply}>APPLY</button>
    </li>
  );
};

export default Job;