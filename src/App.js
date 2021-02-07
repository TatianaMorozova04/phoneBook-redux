import React from 'react';
import './App.css';
import Filter from './Filter/Filter'
import ContactList from './ContactList/ContactList'
import ContactForm from './ContactForm/ContactForm'

// Шаблон пробный
// {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
// {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
// {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
// {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},

//
// const CONTACTS = 'contacts';


const App = () => (
    <>
        <h1>Phonebook</h1>
        <ContactForm/>

        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
    </>
);

export default App;



//Код с использованием хуков
// const CONTACTS = 'contacts';
//
// export default function App() {
//     const [contacts, setContacts] = useState([]);
//     const [filter, setFilter] = useState('');
//
//
//     useEffect(() => {
//         const contacts = localStorage.getItem(CONTACTS);
//         if (contacts) {
//             const parsedContacts = JSON.parse(contacts);
//             if (parsedContacts) {
//                 setContacts(parsedContacts);
//             }
//         }
//     }, [])
//
//     useEffect(() => {
//         localStorage.setItem(CONTACTS, JSON.stringify(contacts));
//     }, [contacts])
//
//
//     const handleSubmit = (event, name, number) => {
//         event.preventDefault()
//
//         if (name.length > 0 && number.length > 0) {
//             const sameContact = contacts.find(contact => name === contact.name);
//
//             if (!sameContact) {
//                 setContacts(prevContacts => ([...prevContacts, {name, number, id: shortid.generate()}]
//                 ));
//             } else {
//                 alert(`${name} is already in contacts`)
//             }
//         }
//     }
//
//
//     const changeFilter = e => setFilter(e.currentTarget.value);
//
//     const getVisibleContacts = () => {
//         const normalizedFilter = filter.toLowerCase();
//         return contacts.filter(contact =>
//             contact.name.toLowerCase().includes(normalizedFilter),
//         );
//     };
//
//
//     const deleteContact = contactId => {
//         setContacts(prevContacts => (
//             prevContacts.filter(contact => contact.id !== contactId)));
//     };
//
//
//     return (
//         <>
//             <h1>Phonebook</h1>
//             <ContactForm handleSubmit={handleSubmit}/>
//
//             <h2>Contacts</h2>
//             <Filter value={filter} onChange={changeFilter}/>
//             <ContactList contacts={getVisibleContacts()} deleteContact={deleteContact}/>
//         </>
//     );
// }
//


// Код с использованием классов
// class App extends Component {
//     state = {
//         contacts: [],
//         filter: '',
//     }
//
//     componentDidMount() {
//         const contacts = localStorage.getItem(CONTACTS);
//         if(contacts) {
//             const parsedContacts = JSON.parse(contacts);
//             if (parsedContacts) {
//                 this.setState({ contacts: parsedContacts });
//             }
//         }
//     }
//
//     componentDidUpdate(prevProps, prevState) {
//         const newContacts = this.state.contacts;
//         const prevContacts = prevState.contacts;
//
//         if (newContacts !== prevContacts) {
//             localStorage.setItem(CONTACTS, JSON.stringify(newContacts));
//         }
//     }
//
//     handleSubmit = (event, name, number) => {
//         event.preventDefault()
//
//         if (name.length > 0 && number.length > 0) {
//             const sameContact = this.state.contacts.find(contact => name === contact.name);
//
//             if (!sameContact) {
//                 this.setState(prevState => ({
//                     contacts: [...prevState.contacts, {name, number, id: shortid.generate()}]
//                 }));
//             } else {
//                 alert(`${name} is already in contacts`)
//             }
//         }
//     }
//
//     changeFilter = e => this.setState({filter: e.currentTarget.value});
//
//     getVisibleContacts = () => {
//         const {filter, contacts} = this.state;
//         const normalizedFilter = filter.toLowerCase();
//
//         return contacts.filter(contact =>
//             contact.name.toLowerCase().includes(normalizedFilter),
//         );
//     };
//
//     deleteContact = contactId => {
//         this.setState(prevState => ({
//             contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//         }));
//     };
//
//     render() {
//         const visibleContacts = this.getVisibleContacts();
//         const {filter} = this.state;
//
//         return (
//             <>
//                 <h1>Phonebook</h1>
//                 <ContactForm handleSubmit={this.handleSubmit}/>
//
//                 <h2>Contacts</h2>
//                 <Filter value={filter} onChange={this.changeFilter}/>
//                 <ContactList contacts={visibleContacts} deleteContact={this.deleteContact}/>
//             </>
//         );
//     }
// }
//
// export default App;
