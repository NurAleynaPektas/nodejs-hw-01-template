import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('All contacts have been removed.');
      return;
    }

    contacts.pop(); // Son elemanı çıkar
    await writeContacts(contacts);

    console.log('Last contact has been removed.');
  } catch (error) {
    console.error(
      'Something went wrong while generating contacts:',
      error.message,
    );
  }
};

removeLastContact();
