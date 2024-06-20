export const ContactListItem = ({ contacts }) => {
  // const { name, id } = this.state;
  return (
    <ul>
      {contacts.map(contact => (
        <li>{contact.name}</li>
      ))}
    </ul>
  );
};
