import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();
    contacts.push(createFakeContact());
    await writeContacts(contacts);
    console.log('Yeni iletişim eklendi.');
  } catch (error) {
    console.error('Yeni iletişim eklenirken hata oluştu:', error.message);
  }
};

addOneContact();
