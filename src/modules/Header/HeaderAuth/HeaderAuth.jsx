import { NavLink } from 'react-router-dom';

import styles from './header-auth.module.css';

const getClassName = ({ isActive }) => {
  return isActive ? `${styles.link} ${styles.linkActive}` : styles.link;
};

const HeaderAuth = () => {
  return (
    <div>
      <NavLink to="/login" className={getClassName}>
        Login
      </NavLink>{' '}
      |{' '}
      <NavLink to="/register" className={getClassName}>
        Register
      </NavLink>
    </div>
  );
};

export default HeaderAuth;
