import useForm from '../../shared/hooks/useForm';
import { initialState } from './initialState';
import { useMemo } from 'react';
import { nanoid } from 'nanoid';
import styles from './LoginForm.module.css';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    onSubmit,
    initialState,
  });

  const emailId = useMemo(() => nanoid(), []);
  const passwordId = useMemo(() => nanoid(), []);

  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.block}>
        <label htmlFor={emailId} className={styles.label}>
          Email:
          <input
            className={styles.input}
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Input email"
            type="email"
            required
          />
        </label>
      </div>
      <div className={styles.block}>
        <label htmlFor={passwordId} className={styles.label}>
          Password:
          <input
            className={styles.input}
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Input password"
            type="password"
            required
          />
        </label>
      </div>
      <button>Login</button>
    </form>
  );
};

export default RegisterForm;
