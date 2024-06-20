import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactListItem } from './ContactListItem/ContactListItem';
// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contact: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm name={this.name} id={this.id} />
        <h2>Contacts</h2>
        <ContactListItem />
      </div>
    );
  }
}
