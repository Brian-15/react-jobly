import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from './UserContext';

const initialData = { username: '', password: '' };

const LoginForm = ({ login }) => {
  const [formData, setFormData] = useState(initialData);
  const history = useHistory();
  const { token } = useContext(UserContext);

  if (token) history.push('/profile');

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(data => ({...data, [name]: value}));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    login(formData);
    history.push('/profile');
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          name='username'
          value={formData.username}
          onChange={handleChange}
        />
        <label htmlFor='password'>Password</label>
        <input
          name='password'
          value={formData.password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default LoginForm;