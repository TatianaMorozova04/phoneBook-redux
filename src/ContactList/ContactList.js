import React from 'react';
import {connect} from 'react-redux';
import appActions from "../redux/app/appActions";

const ContactList = ({contacts, deleteContact}) => (
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

    </ul>);

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
    deleteContact: id => dispatch(appActions.deleteContact(id))
});

export default connect(mapStateToProps, mapDispatchFromProps)(ContactList);
