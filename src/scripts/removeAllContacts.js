import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]); // Boş dizi yazarak tüm iletişimleri sil
    console.log('All contacts have been removed.');
  } catch (error) {
    console.error(
      'Something went wrong while generating contacts:',
      error.message,
    );
  }
};

removeAllContacts();
