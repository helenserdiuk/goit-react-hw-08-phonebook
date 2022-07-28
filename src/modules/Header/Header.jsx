import HeaderMenu from './HeaderMenu';
import HeaderAuth from './HeaderAuth';
import UserMenu from './UserMenu';
import useAuth from '../../shared/hooks/useAuth';

import styles from './header.module.css';

const Header = () => {
  const isLogin = useAuth();

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.row}>
          <HeaderMenu isLogin={isLogin} />
          {isLogin ? <UserMenu /> : <HeaderAuth />}
        </div>
      </div>
    </header>
  );
};

export default Header;
