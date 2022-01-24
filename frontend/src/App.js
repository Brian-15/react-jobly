import { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import NavigationBar from './NavigationBar';
import CompanyList from './companies/CompanyList';
import JobList from './jobs/JobList';
import Company from './companies/Company';
import RegisterForm from './auth/RegisterForm';
import LoginForm from './auth/LoginForm';
import ProfileForm from './auth/ProfileForm';
import Logout from './auth/Logout';
import UserContext from './auth/UserContext';
import JoblyApi from './api';

function App() {
  const [token, setToken] = useState(undefined);
  const [user, setUser] = useState(undefined);

  const register = async (formData) => {
    const { user, token } = await JoblyApi.createUser(formData);
    console.log('registered:', user, token);
  };

  const login = async ({ username, password }) => {
    const userToken = await JoblyApi.authenticate(username, password);
    setToken(userToken);
    const data = await JoblyApi.getUser(username);
    setUser(data);
    console.log('logged in', data.username);
  };

  const logout = () => {
    setUser(undefined);
    setToken(undefined);
    JoblyApi.token = '';
  };

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ token, user }}>
        <NavigationBar />
        <Switch>
          <Route exact path='/'>
            <h1>Welcome to Jobly!</h1>
            { token ?
            <>
              <div><Link to='/profile'>Profile</Link></div>
              <div><Link to='/logout'>Log Out</Link></div>
            </>
            :
            <>
              <div><Link to='/login'>Log In</Link></div>
              <div><Link to='/register'>Register</Link></div>
            </>}
          </Route>
          <Route exact path='/register'>
            <RegisterForm register={register} />
          </Route>
          <Route exact path='/login'>
            <LoginForm login={login}  />
          </Route>
          <Route exact path='/companies'>
            <CompanyList />
          </Route>
          <Route path='/companies/:handle'>
            <Company />
          </Route>
          <Route exact path='/jobs'>
            <JobList />
          </Route>
          <Route exact path='/profile'>
            <ProfileForm setUser={setUser} />
          </Route>
          <Route exact path='/logout'>
            <Logout logout={logout} />
          </Route>
        </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
