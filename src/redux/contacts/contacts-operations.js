import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/api/contactsAPI';

export const fetchContacts = createAsyncThunk(
  'contacts/fetch',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.getContacts();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/add',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.addContact(data);
      return result;
    } catch (error) {
      const { data, status } = error.response;
      return rejectWithValue({ data, status });
    }
  },
  {
    condition: (data, { getState }) => {
      const { contacts } = getState();
      const { name, phone } = data;
      const isDublicate = contacts.items.find(
        item => item.name === name && item.phone === phone
      );
      if (isDublicate) {
        alert(`${name}. ${phone} is already in contacts.`);
        return false;
      }
    },
  }
);

export const removeContact = createAsyncThunk(
  'contacts/remove',
  async (id, { rejectWithValue }) => {
    try {
      const result = await api.removeContact(id);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
