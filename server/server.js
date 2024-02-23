const http = require('http')
const quoteData = require('./data/quotes.json')

const SERVER_PORT = 4444

http.createServer((req, res) => {
    console.log("Server Started at", SERVER_PORT);
    res.write(JSON.stringify(quoteData))
    res.end()
}).listen(SERVER_PORT)