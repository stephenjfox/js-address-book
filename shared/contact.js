/**
Type definition:
- A name
- Optional Address
- Optional Phone number
*/
function Contact({ name, address, phoneNumber  }) {
  // validate
  // name.trim(), address.trim(), phone against USA Regx
  const newName = safeTrim(name);

  const newAddress = safeTrim(address);

  const newPhone = safeTrim(phoneNumber);

  if (!/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}/g.test(newPhone)) {
    throw Error("Only accepts USA valid phone numbers: (xxx) xxx-xxxx");
  }

  // return POJO
  return Object.freeze({
    name: newName,
    address: newAddress,
    phone: newPhone
  });
}

function safeTrim(stringish) {
  if (stringish !== undefined && typeof(stringish) === "string") {
    return stringish.trim();
  }
  return "";
}


module.exports = {
  Contact,
};
