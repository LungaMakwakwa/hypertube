
///read torrent file using bencode file 
'use strict';
const fs = require('fs');
const bencode = require('bencode');
const tracker = require('./src/tracker');
const torrentParser = require('./src/torrent-parser');
const download = require('./src/download');



//Sending messages with UDP proceedure


/////////////  1
// require the modules to be used from stdlib
const dgram = require('dgram');
const Buffer = require('buffer').Buffer;
const urlParse = require('url').parse;


///********CREATED A MODULE FOR THIS PROCESS BELOW IN TORRENT-PARSER.JS *************/
//const torrent = bencode.decode(fs.readFileSync('pupy.torrent'));
const torrent = torrentParser.open(process.argv[2]);
download(torrent);
//const torrent = torrentParser.open('puppy.torrent');

tracker.getPeers(torrent, peers => {
    console.log('list of peers: ', peers);
  });
/////////////  2
// use the url module’s parse method on our tracker url. This lets me easily extract different parts of the url like its protocol, hostname, port, etc.
const url = urlParse(torrent.announce.toString('utf8'));

/////////////  3
//dgram = module for udp
//create a new socket instance for network communication.
const socket = dgram.createSocket('udp4');

/////////////  4
// socket sends messages in buffer form 
const myMsg = Buffer.from('hello?', 'utf8');

/////////////  5
//"socket.send(messageAsbuff, bufferlength, portUrl, thecallBack)"
//The socket’s send method is used for sending messages.
socket.send(myMsg, 0, myMsg.length, url.port, url.host, () => {});

///////////// 6
//tell the socket how to handle incoming messages.
socket.on('message', msg => {
  console.log('message is', msg);
});


//console.log(torrent.announce.toString('utf8'));




