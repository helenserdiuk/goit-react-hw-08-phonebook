import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../../redux/auth/auth-selectors';
import { logout } from '../../../redux/auth/auth-operations';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.link}>
      {name}{' '}
      <button className={styles.link} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
