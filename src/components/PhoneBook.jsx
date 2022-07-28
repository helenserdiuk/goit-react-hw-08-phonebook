import { useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList';
import { useSelector, useDispatch } from 'react-redux';
import Filter from './Filter';

import {
  addContact,
  removeContact,
  fetchContacts,
} from '../redux/contacts/contacts-operations';
import { toFilter } from '../redux/filter/filter-slice';
import { getContacts } from '../redux/contacts/contacts-selector';
import { getFilter } from '../redux/filter/filter-selector';
import styles from './PhoneBook.module.css';

export default function App() {
  const filter = useSelector(getFilter);
  const { items, loading, error } = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onAddContact = data => {
    dispatch(addContact(data));
  };

  const onRemoveContact = id => {
    dispatch(removeContact(id));
  };

  const handleFilter = ({ target }) => dispatch(toFilter(target.value));

  const getFilteredContact = () => {
    if (!filter) {
      return items;
    }
    const filterValue = filter.toLowerCase();
    const filterContact = items.filter(({ name }) => {
      const nameContact = name.toLowerCase();
      return nameContact.includes(filterValue);
    });
    return filterContact;
  };

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilter} />

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      <ContactList
        contacts={getFilteredContact()}
        removeContact={onRemoveContact}
      />
    </div>
  );
}
