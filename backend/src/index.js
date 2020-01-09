require('dotenv').config();  //before the application starts the variable starts .env

const app = require('./app');
require('./database');



async function main() {
    await app.listen(4000);
    console.log('Server on port 4000');
}

main()