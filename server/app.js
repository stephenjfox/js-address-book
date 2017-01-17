/*
The core function of the server is to persist anything done
by a client. It doesn't enforce rules beyond making sure requests
go to their desired end points.

There may be a "database" plugged in at a later time, but that will be
healthily behind an interface (hidden from even me, the developer)
*/
const express = require('express');
const app = express();
const SERVER_PORT = 3030;


// show all contacts : GET
// show filtered contacts : GET
// create a new contact : POST/PUT
// update an existing contact : PUT/PATCH
  // sub-set: delete an existing contact : DELETE


app.listen(SERVER_PORT, () => {
  console.log("Address book server has started");
});
