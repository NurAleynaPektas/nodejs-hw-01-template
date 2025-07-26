import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('Silinecek iletişim yok.');
      return;
    }

    contacts.pop(); // Son elemanı çıkar
    await writeContacts(contacts);

    console.log('Son iletişim silindi.');
  } catch (error) {
    console.error('Son iletişim silinirken hata oluştu:', error.message);
  }
};

removeLastContact();
