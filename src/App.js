import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCurrent } from './redux/auth/auth-operations';

import UserRoutes from './UserRoutes';

import Header from './modules/Header';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrent());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <UserRoutes />
    </div>
  );
}

export default App;
