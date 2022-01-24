import { Redirect } from "react-router-dom";

const Logout = ({ logout }) => {
  logout();
  return <Redirect to='/' />;
};

export default Logout;