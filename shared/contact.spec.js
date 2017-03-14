const test = require('tape')
const { Contact } = require('./contact')

test('Contact factory is good', (assert) => {
  assert.true(typeof Contact === 'function', 'should be factory function')
  assert.end()
})

test('Contact factory should produce object', (assert) => {
  const contact = Contact({
    name: 'Jason', address: '1 Home Lane', phoneNumber: '801-326-9273'
  })
  assert.true(typeof contact === 'object', 'should produce an object')

  assert.end()
})

test('Contact() should fail without a "name" property', (assert) => {
  assert.throws(() => Contact({}), 'should fail without name and give clear error message')

  assert.end()
})

test('Contact() with just a "name"', (assert) => {
  const test = Contact({ name: "Jack" })
  assert.pass('should successfully construct a Contact')
  assert.end()
})

