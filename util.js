//to generate an id for me. 
//A peer id can basically be any random 20-byte string but most clients follow a convention detailed here. 
//Basically “AT” is the name of my client (allen-torrent), and 0001 is the version number.

'use strict';

const crypto = require('crypto');

let id = null;

module.exports.genId = () => {
  if (!id) {
    id = crypto.randomBytes(20);
    Buffer.from('-AT0001-').copy(id, 0);
  }
  return id;
};
