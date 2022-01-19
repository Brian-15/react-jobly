import logo from './logo.svg';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import NavigationBar from './NavigationBar';
import CompanyList from './CompanyList';
import JobList from './JobList';
import JoblyApi from './api';
import Company from './Company';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import ProfileForm from './ProfileForm';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route exact path='/signup'>
            <RegisterForm />
          </Route>
          <Route exact path='/login'>
            <LoginForm />
          </Route>
          <Route exact path='/companies'>
            <CompanyList companies={JoblyApi.getCompanies()} />
          </Route>
          <Route path='/companies/:handle'>
            <Company />
          </Route>
          <Route exact path='/jobs'>
            <JobList jobs={JoblyApi.getJobs()} />
          </Route>
          <Route exact path='/profile'>
            <ProfileForm />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
