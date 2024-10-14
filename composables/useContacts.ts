//@ts-ignore
import { v4 as uuid } from 'uuid';

export default () => {
  const contactsList = () => useState('contacts_list', () => []);
  
  const createContact = ({ name, email, phone }) => {
    const id = uuid();

    contactsList().value.push({ id, name, email, phone});
  }

  const updateContact = (id, { name, email, phone }) => {
    contactsList().value = contactsList().value.map((contact) => {
      if (contact.id === id) {
        return {
          id,
          name,
          email,
          phone,
        }
      }
      return contact;
    });
  }

  const deleteContact = (id: string) => {
    contactsList().value = contactsList().value.filter((contact) => contact.id !== id);
  }

  const getContatcById = (id: string) => {
    return contactsList().value.find((contact) => contact.id === id);
  }

  return {
    contactsList,
    createContact,
    updateContact,
    deleteContact,
    getContatcById,
  }
}