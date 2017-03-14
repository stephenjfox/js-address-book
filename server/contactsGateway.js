const dataStore = {
    contacts: []
};

// preload some data, for testing
(function() {
    const _contacts = require('fs').readFileSync('./shared/generated.json', 'utf-8')
    dataStore.contacts = JSON.parse(_contacts);
}());

/**
 * Get all Concacts given a search predicate
 * @param {Function} predicate - to filter the list of contacts, (Contact) => Boolean
 */
function getContacts(predicate) {
    if (typeof predicate !== 'function') throw new Error('Cannot use null filter predicate')

    return dataStore.contacts.filter(predicate);
}

module.exports = {
    getContactsFiltered: getContacts,
    getAllContacts: () => getContacts(() => true)
}