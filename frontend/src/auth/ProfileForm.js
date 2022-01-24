import { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import JoblyApi from '../api';
import UserContext from './UserContext';

const initialData = {
  password: '',
  firstName: '',
  lastName: '',
  email: ''
};

const ProfileForm = ({ setUser }) => {
  const { token, user } = useContext(UserContext);
  const [formData, setFormData] = useState(user? user : initialData);

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(data => ({...data, [name]: value}));
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    const dataToSend = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
    }

    if (formData.password) {
      dataToSend.password = formData.password;
    }
    const { username, firstName, lastName, email } = await JoblyApi.patchUser(user.username, dataToSend);
    setUser({ username, firstName, lastName, email });
  };

  if (!token) return <Redirect to='login' />;
  return (
    <>
      <h1>Edit User Profile</h1>
      <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='firstName'>First Name</label>
        <input
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='lastName'>Last Name</label>
        <input
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <button>Update</button>
    </form>
    </>
  )
};

export default ProfileForm;