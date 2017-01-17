# js-address-book
Simple address book, with client and server. Project as part of #100DaysOfCode

## Requirements

1. User must be able to keep track of various contacts
    - A contact is defined as having
        - A name
        - At least one point of contact (phone or email)
        - Some amount of emails
        - Some amount of phone numbers
2. User can take notes on the contact
    - These notes are associated with the Contact, but aren't owned by them (logically nor architecturally)
3. User can organize several contacts into groups
    - Groups are simply an association of contacts
    - Groups have a name
4. User can view contacts by group
