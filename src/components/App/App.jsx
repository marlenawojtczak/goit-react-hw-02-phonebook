// import './index.css';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Container, Content, AppTitle, ListTitle } from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleAddContact = contact => {
    const { contacts } = this.state;
    const normalizedContact = {
      ...contact,
      id: nanoid(),
      name:
        contact.name.toLowerCase().charAt(0).toUpperCase() +
        contact.name.slice(1),
    };

    const isContactExist = contacts.find(
      existingContact =>
        existingContact.name.toLowerCase() ===
        normalizedContact.name.toLowerCase()
    );

    if (isContactExist) {
      alert(`${normalizedContact.name} is already in contacts.`);
    } else {
      const updatedContacts = [...contacts, normalizedContact];
      this.setState({ contacts: updatedContacts });
    }
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handleDisplayContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  handleDeleteContact = id => {
    const { contacts } = this.state;
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    this.setState({ contacts: updatedContacts });
  };

  render() {
    const displayContacts = this.handleDisplayContacts();
    const { filter } = this.state;
    return (
      <Container>
        <Content>
          <AppTitle>Phonebook</AppTitle>
          <ContactForm onSubmit={this.handleAddContact} />

          <ListTitle>Contacts</ListTitle>
          <Filter value={filter} onChangeFilter={this.handleChangeFilter} />
          <ContactList
            contacts={displayContacts}
            onDeleteContact={this.handleDeleteContact}
          />
        </Content>
      </Container>
    );
  }
}
