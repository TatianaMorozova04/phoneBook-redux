import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import shortid from "shortid";
import appActions from "../redux/app/appActions";


class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }

    handleChange = event => {
        const {name, value} = event.currentTarget;
        this.setState({[name]: value})
    }


    submitForm = event => {
        const {name, number} = this.state;
        this.handleSubmit(event, name, number);
        this.reset()
    }

    handleSubmit = (event, name, number) => {
        event.preventDefault()

        if (name.length > 0 && number.length > 0) {
            const sameContact = this.props.contacts.find(contact => name === contact.name);

            if (!sameContact) {
                this.props.getAddContact({name, number, id: shortid.generate()})
            } else {
                alert(`${name} is already in contacts`)
            }
        }
    }

    reset = () => this.setState({name: "", number: ""});

    render() {
        const {name, number} = this.state;

        return (
            <form onSubmit={this.submitForm}>
                <p>Name</p>
                <label>
                    <input type="text"
                           name="name"
                           value={name}
                           onChange={this.handleChange}/>
                </label>
                <p>Number</p>
                <label>
                    <input type="number"
                           name="number"
                           value={number}
                           onChange={this.handleChange}/>
                </label>
                <button type="submit">Add contact</button>
            </form>
        )
    }
}


const mapStateToProps = state => ({
    contacts: state.app.contacts
});

const mapDispatchToProps = dispatch =>({
    getAddContact: (contact) => dispatch(appActions.addContact(contact))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);


//Код с использованием хуков
// export default function ContactForm ({handleSubmit}) {
//     const [name,setName] = useState('');
//     const [number,setNumber] = useState('');
//
//     const reset = () => {
//         setNumber('');
//         setName('');
//     }
//
//     const submitForm = (event) => {
//         handleSubmit(event, name, number);
//         reset()
//     }
//
//     return (
//         <form onSubmit={submitForm}>
//             <p>Name</p>
//             <label>
//                 <input type="text"
//                        name="name"
//                        value={name}
//                        onChange={(e) => {setName(e.currentTarget.value)}}/>
//             </label>
//             <p>Number</p>
//             <label>
//                 <input type="number"
//                        name="number"
//                        value={number}
//                        onChange={(e) => {setNumber(e.currentTarget.value)}}/>
//             </label>
//             <button type="submit">Add contact</button>
//         </form>
//     )
// }

// Код с использованием классов
// class ContactForm extends Component {
//     state = {
//         name: '',
//         number: '',
//     }
//
//     handleChange = event => {
//         const {name, value} = event.currentTarget;
//         this.setState({[name]: value})
//     }
//
//     submitForm = event => {
//         const {name, number} = this.state;
//         this.props.handleSubmit(event, name, number);
//         this.reset()
//     }
//
//     reset = () => this.setState({name: "", number: ""});
//
//     render() {
//         const {name, number} = this.state;
//
//         return (
//             <form onSubmit={this.submitForm}>
//                 <p>Name</p>
//                 <label>
//                     <input type="text"
//                            name="name"
//                            value={name}
//                            onChange={this.handleChange}/>
//                 </label>
//                 <p>Number</p>
//                 <label>
//                     <input type="number"
//                            name="number"
//                            value={number}
//                            onChange={this.handleChange}/>
//                 </label>
//                 <button type="submit">Add contact</button>
//             </form>
//         )
//     }
// }
//
// export default ContactForm;
