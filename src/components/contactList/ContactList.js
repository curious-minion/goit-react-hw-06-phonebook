import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import contactsActions from '../../redux/contacts/contacts-actions';

import { contactItem, contactDelete } from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsActions.deleteContact(id));

  return (
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
};

export default ContactList;
