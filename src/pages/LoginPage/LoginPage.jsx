import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login } from '../../redux/auth/auth-operations';
import LoginForm from 'modules/LoginForm';
import useAuth from '../../shared/hooks/useAuth';
import styles from '../HomePage/HomePage.module.css';
const LoginPage = () => {
  const isLogin = useAuth();
  const dispatch = useDispatch();
  const onLogin = data => {
    dispatch(login(data));
  };

  if (isLogin) {
    return <Navigate to="/contacts" />;
  }

  return (
    <main>
      <div className={styles.container}>
        <h2>Login Page</h2>
        <LoginForm onSubmit={onLogin} />
      </div>
    </main>
  );
};

export default LoginPage;
