import React, { Component } from 'react';
import shortid from 'shortid';
import {
  contactEditor_form,
  placeholder,
  label,
  add_contact,
} from './ContactEditor.module.css';

class ContactEditor extends Component {
  state = {
    id: '',
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, number, value } = e.currentTarget;
    this.setState({ [name]: value, [number]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ id: '', name: '', number: '' });
  };

  render() {
    const nameId = shortid.generate();
    const numberId = shortid.generate();
    const { number, name } = this.state;

    return (
      <form className={contactEditor_form} onSubmit={this.handleSubmit}>
        <label className={label} htmlFor={nameId} aria-label="Name">
          Name
        </label>
        <input
          className={placeholder}
          type="text"
          id={nameId}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          onChange={this.handleChange}
          placeholder="Enter a name"
          autoComplete="off"
          value={name}
          required
        />
        <label className={label} htmlFor={numberId} aria-label="Number">
          Phone number
        </label>
        <input
          className={placeholder}
          type="tel"
          placeholder="Enter a phone number"
          autoComplete="off"
          id={numberId}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={this.handleChange}
          value={number}
        />
        <button type="submit" className={add_contact}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactEditor;
