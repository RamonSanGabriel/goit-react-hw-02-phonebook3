import { nanoid } from 'nanoid';
import { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };
  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleNumberChange = e => {
    setNumber(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const name = e.target.value;
    // this.props.onSubmit(name);
    console.log(name);
  };

  /* if (name.trim() === '' || number.trim() === '') {
    return <p>The phonebook list is empty.</p>;
  } else {
  } */

  if (existingContact) {
    alert(`${name} is already in your contact list.`);
    return;
  }

  const existingContact = contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
  /*  addContact({
    id: nanoid(),
    name: name.trim(),
    number: number.trim(),
  }); */
  // const { name, number } = state;
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              // pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
              required
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <label>
            <p>Number</p>
            <input
              type="tel"
              name="number"
              // pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
              pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
              required
              value={number}
              onChange={handleNumberChange}
            />
          </label>
        </form>
      </div>
    </>
  );
};

export default ContactForm;

/*  const contacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]; */
/*   const state = {
    name: '',
    number: '',
  }; */
/*  const handleNameChange = e => {
    this.setState({
      name: e.target.value,
    });
  }; */
