import { useDispatch } from 'react-redux';
import { signup } from '../../redux/auth/auth-operations';
import RegisterForm from 'modules/RegisterForm';
import { Navigate } from 'react-router-dom';
import useAuth from '../../shared/hooks/useAuth';
import styles from '../HomePage/HomePage.module.css';
const RegisterPage = () => {
  const isLogin = useAuth();

  const dispatch = useDispatch();

  const onSignup = data => {
    dispatch(signup(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <main>
      <div className={styles.container}>
        <h2>Register Page</h2>
        <RegisterForm onSubmit={onSignup} />
      </div>
    </main>
  );
};

export default RegisterPage;
