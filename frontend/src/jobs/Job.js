import { Link } from "react-router-dom";

const Job = ({ id, title, salary, equity, company, handle }) => {

  const apply = () => {
    console.log('applied to job', id);
    // apply logic here
  };

  return (
    <li>
      <h3>{ title }</h3>
      { company === undefined ? undefined : (
        <Link to={`/companies/${handle}`}>{ company }</Link>
      )}
      <p>Salary: { salary }</p>
      <p>Equity: { equity }</p>
      <button onClick={apply}>APPLY</button>
    </li>
  );
};

export default Job;