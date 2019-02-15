'use strict';

const fs = require('fs');
const bencode = require('bencode');
const bignum = require('bignum');

//open torrent file 
module.exports.open = (filepath) => {
  return bencode.decode(fs.readFileSync(filepath));
};


//calculate torrent size
module.exports.size = torrent => {
    const size = torrent.info.files ?
    //for torrents with one file
    torrent.info.files.map(file => file.length).reduce((a, b) => a + b) :
    //for torrents with multiple files
    torrent.info.length;
    
    //Call installed bignum node module command is: npm install –save bignum.
    //This is for file sizes larger than 32-bit.
    return bignum.toBuffer(size, {size: 8});
};

module.exports.infoHash = torrent => {
  // ...
};