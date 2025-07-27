import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();

    for (let i = 0; i < number; i++) {
      contacts.push(createFakeContact());
    }

    await writeContacts(contacts);
    console.log(`${number} new contact created.`);
  } catch (error) {
    console.error('Something went wrong while generating contacts:', error.message);
  }
};

generateContacts(5);
