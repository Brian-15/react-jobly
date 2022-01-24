import { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'reactstrap';
import UserContext from './auth/UserContext';
import './NavigationBar.css';

const NavigationBar = () => {
  const { token } = useContext(UserContext);

  return (
    <Navbar expand='md'>
      <NavLink exact to='/' className='navbars-brand'>
        <h1>Jobly</h1>
      </NavLink>
      <Nav navbar>
        <NavItem>
          <NavLink exact to='/companies'>
            Companies
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink exact to='/jobs'>
            Jobs
          </NavLink>
        </NavItem>
        { token ?
        <>
          <NavItem>
            <NavLink exact to='/profile'>
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to='/logout'>
              Log out
            </NavLink>
          </NavItem>
        </>
        :
        <>
          <NavItem>
            <NavLink exact to='/register'>
              Register
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to='/login'>
              Login
            </NavLink>
          </NavItem>
        </>
        }
        
      </Nav>
    </Navbar>
  );
};

export default NavigationBar;