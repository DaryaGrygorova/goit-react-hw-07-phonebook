import { createSlice } from '@reduxjs/toolkit';

const initialContacts = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    { id: 'id-5', name: 'Sara Fisher', number: '485-12-34' },
    { id: 'id-6', name: 'Kris Dreams', number: '512-34-53' },
    { id: 'id-7', name: 'Grey Panda', number: '123-45-15' },
    { id: 'id-8', name: 'Foxy Reditt', number: '481-45-32' },
  ],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  reducers: {
      addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      return state.items.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
