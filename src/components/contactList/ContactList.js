import React from 'react';
import PropTypes from 'prop-types';

import { contactItem, contactDelete } from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="contactList">
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={contactItem}>
        <span>
          {name}: {number}
        </span>
        {/* <span>{number}</span>  */}
        <button
          type="button"
          className={contactDelete}
          onClick={() => onDeleteContact(id)}
        ></button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;
