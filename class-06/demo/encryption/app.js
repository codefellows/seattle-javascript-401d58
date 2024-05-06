let base64 = require('base-64');
let bcrypt = require('bcrypt');

console.log('\n--------------- BASE 64 --------------------\n');

let string = "someusername:P@s5w0rD";
let encoded = base64.encode(string);
let decoded = base64.decode(encoded);

console.log('String:', string);
console.log('Encoded:', encoded);
console.log('Decoded:', decoded);



console.log('\n--------------- HASHING --------------------\n');

let password = "P@s5w0D";
let complexity = 5;

encrypt(password, complexity);

async function encrypt(string, complexity) {
    let hashed = await bcrypt.hash(string, complexity);
    console.log(hashed);

    let h1 = "$2b$05$7uHl0sLZUSoWynyo7VOCE.wK7cLFz0nWVSgfv9TzsahEs9S3FNEU6";
    let h2 = "$2b$05$YKFPdDwMpvL98uhxblKBnuyDyR0pIS91M2GkBUTh/9txu/qetGlK.";
    let h3 = "$2b$05$cz0rl/90po6cEKitVHPxr.V.c.W15X.R/D3WQhydQmCuVQ3UDyHK";

    let isValid = await bcrypt.compare(string, hashed);
    console.log("String", isValid);

    let isValidH1 = await bcrypt.compare(string, h1);
    console.log('h1', isValidH1);

    let isValidH2 = await bcrypt.compare(string, h2);
    console.log('h2', isValidH2);

    let isValidH3 = await bcrypt.compare(string, h3);
    console.log('h3', isValidH3);


}