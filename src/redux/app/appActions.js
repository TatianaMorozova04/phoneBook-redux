import types from './appTypes'

const deleteContact = id => ({
    type: types.DELETE,
    payload: id,
})

const changeFilter = value=> ({
    type: types.FILTER,
    payload: value,
})

const addContact = value=> ({
    type: types.ADD,
    payload: value,
})

export default {deleteContact, changeFilter, addContact}
