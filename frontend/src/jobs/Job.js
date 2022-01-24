import { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../auth/UserContext';
import JoblyApi from '../api';

const Job = ({ id, title, salary, equity, company, handle }) => {
  const { user } = useContext(UserContext);
  const history = useHistory();

  const apply = async () => {
    const res = await JoblyApi.apply(user.username, id);
    console.log(res);
    user.applications.push(id);
    history.push(window.location.pathname);
  };

  return (
    <li>
      <h3>{ title }</h3>
      { company === undefined ? undefined : (
        <Link to={`/companies/${handle}`}>{ company }</Link>
      )}
      <p>Salary: { salary }</p>
      <p>Equity: { equity }</p>
      { user ?
        (user.applications.some(jobId => jobId === id)) ?
        <p>APPLIED</p>
        :
        <button onClick={apply}>APPLY</button>
      : undefined }
    </li>
  );
};

export default Job;