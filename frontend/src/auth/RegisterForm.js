import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const initialData = {
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  email: '',
}

const RegisterForm = ({ register }) => {
  const [formData, setFormData] = useState(initialData);
  const history = useHistory();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(data => ({...data, [name]: value}));
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    register(formData);
    history.push('/login');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
        <label htmlFor='firstName'>First Name</label>
        <input
          name='firstName'
          value={formData.firstName}
          onChange={handleChange}
        />
        <label htmlFor='lastName'>Last Name</label>
        <input
          name='lastName'
          value={formData.lastName}
          onChange={handleChange}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
        />
        <button>Register</button>
      </form>
    </>
  );
};

export default RegisterForm;