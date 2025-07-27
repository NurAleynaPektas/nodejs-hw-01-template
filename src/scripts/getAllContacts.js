import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error('Something went wrong while getting all contacts:', error.message);
    return [];
  }
};

console.log(await getAllContacts());
