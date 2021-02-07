import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import appOperators from "../redux/app/appOperators";

const ContactList = ({contacts, deleteContact, getContacts}) => {
    useEffect(() => {
        getContacts();
    }, [])

    return (
        <ul>
            {contacts.map(({name, number, id}) => (
                <li key={id}>
                    <span>{name}: </span>
                    <span>{number}</span>
                    <button type="button"
                            onClick={() => deleteContact(id)}
                    >Delete
                    </button>
                </li>))}

        </ul>)
};

const getVisibleContacts = ( contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter),
    );
};

//Без рефакторинга
// const mapStateToProps = state => {
//     const {contacts, filter} = state.app;
//     const visibleContacts = getVisibleContacts(contacts, filter);
//
//     return {
//         contacts: visibleContacts
//     }};


const mapStateToProps = ({app:{contacts, filter}}) => ({
    contacts: getVisibleContacts(contacts, filter)
});

const mapDispatchFromProps = dispatch => ({
    deleteContact: id => dispatch(appOperators.deleteContact(id)),
    getContacts: () => dispatch(appOperators.getContacts()),
});

export default connect(mapStateToProps, mapDispatchFromProps)(ContactList);
