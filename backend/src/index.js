const app = require('./app');


app.listen(4000, ()=> console.log('on port 4000'))

async function main() {
    await app.listen(4000);
    console.log('Server on port 4000');
}

main()