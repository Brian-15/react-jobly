import { Link } from "react-router-dom";

const CompanyCard = ({ handle, name, description, logoUrl }) => {

  return (
    <li>
      <Link to={`/companies/${handle}`}>
        <h2>{ name }</h2>
        <img src={logoUrl} />
      </Link>
      <p>{ description }</p>
    </li>
  );
};

export default CompanyCard;