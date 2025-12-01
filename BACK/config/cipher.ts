import * as crypto from 'crypto';
const fs = require('fs');

// Carga las llaves
const privateKey = fs.readFileSync('private_key.pem', 'utf8');
const publicKey = fs.readFileSync('public_key.pem', 'utf8');

// Texto de prueba
const message = "Mensaje de prueba";

// Firma con llave privada
const signature = crypto.sign("sha256", Buffer.from(message), {
  key: privateKey,
  padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
});

// Verifica con llave pública
const isVerified = crypto.verify(
  "sha256",
  Buffer.from(message),
  {
    key: publicKey,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
  },
  signature
);

console.log("¿Las llaves coinciden?:", isVerified);
