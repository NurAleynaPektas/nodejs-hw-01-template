import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    await writeContacts([]); // Boş dizi yazarak tüm iletişimleri sil
    console.log('Tüm iletişimler silindi.');
  } catch (error) {
    console.error('İletişimler silinirken hata oluştu:', error.message);
  }
};

removeAllContacts();
