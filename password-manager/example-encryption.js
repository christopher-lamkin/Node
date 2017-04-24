var crypto = require('crypto-js');

var secretMessage = {
  name: 'Andrew',
  secretName: '007'
};
var secretKey = '123abc';

// Encrypt

var secretMessageJSON = JSON.stringify(secretMessage);
var encryptedMessage = crypto.AES.encrypt(secretMessageJSON, secretKey);
console.log('Encrypted message: ' + encryptedMessage);

//Decrypt
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = bytes.toString(crypto.enc.Utf8);
var decryptedMessageObject = JSON.parse(decryptedMessage);

console.log("Decrypted Message Object: " + decryptedMessageObject.secretName);
