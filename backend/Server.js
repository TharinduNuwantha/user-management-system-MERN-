const app = require('./App');

const server = app.listen(3001,'127.0.0.1',()=>{
    console.log(`node server is listening to ${server.address().port}`);
});