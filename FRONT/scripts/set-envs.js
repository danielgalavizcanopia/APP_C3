const {writeFileSync, mkdirSync} = require('fs')
require('dotenv').config();

const targetPath = './src/environments/environments.ts'

const URLAPI = process.env['URL_APIDEV'];
const SECRETPWD = process.env['SECRETPWD'];

if( !URLAPI ){
    throw new Error('URLAPI is not set')
}

if( !SECRETPWD ){
    throw new Error('SECRETPWD is not set')
}

const envFileContent = `
    export const environment = {
        url: "${URLAPI}",
        secretPWD: "${SECRETPWD}",
    };
`;

mkdirSync('./src/environments', {recursive: true});

writeFileSync( targetPath, envFileContent);
