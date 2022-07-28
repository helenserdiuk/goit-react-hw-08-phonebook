import { NavLink } from 'react-router-dom';

import styles from './header-menu.module.css';

import { items } from './items';

const getLinkClassName = ({ isActive }) => {
  return isActive ? styles.linkActive : styles.link;
};

const HeaderMenu = ({ isLogin }) => {
  const selectItems = isLogin ? items : items.filter(item => !item.private);
  const elements = selectItems.map(({ id, to, text }) => (
    <li key={id}>
      <NavLink className={getLinkClassName} to={to}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={styles.menu}>{elements}</ul>;
};

export default HeaderMenu;
