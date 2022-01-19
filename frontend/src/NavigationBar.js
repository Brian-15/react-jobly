import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <Navbar expand='md'>
      <NavLink exact to='/' className='navbar-brand'>
        <h1>Jobly</h1>
      </NavLink>
      <Nav className='ml-auto' navbar>
        <NavItem>
          <NavLink exact to='/companies'>
            Companies
          </NavLink>
          <NavLink exact to='/jobs'>
            Jobs
          </NavLink>
          <NavLink exact to='/profile'>
            Profile
          </NavLink>
          <NavLink exact to='/logout'>
            Log out
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;