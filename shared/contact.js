/**
Type definition:
- A name
- Optional Address
- Optional Phone number
*/
function Contact({ name, address, phoneNumber  }) {
  // validate
  // name.trim(), address.trim(), phone against USA Regx
  const newName = name.trim();
  if (newName.length === 0) throw Error("No empty names allowed");

  const newAddress = address.trim();
  if (newAddress.length === 0) throw Error("No empty addresses allowed");

  const newPhone = phoneNumber.trim();
  if (newPhone.length === 0) throw Error("No empty phone numbers allowed");

  if (!/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/g.test(newPhone)) {
    throw Error("Only accepts USA valid phone numbers: (xxx) xxx-xxxx");
  }

  // return POJO
  return {
    name: newName,
    address: newAddress,
    phone: newPhone
  }
}
