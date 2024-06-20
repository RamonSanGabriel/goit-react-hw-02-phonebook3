import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ContactForm extends Component {
  static propTypes = {};
  render() {
    return (
      <>
        <form action="">
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
              required
            />
          </label>
          <label>
            <p>Number</p>
            <input
              type="tel"
              name="number"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
              required
            />
          </label>
        </form>
        <button onClick={event => console.log(event)}>Add Contact</button>
      </>
    );
  }
}
