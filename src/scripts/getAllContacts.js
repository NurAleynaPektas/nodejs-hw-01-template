import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    return contacts;
  } catch (error) {
    console.error('İletişimler okunurken hata oluştu:', error.message);
    return [];
  }
};

console.log(await getAllContacts());
