const http = require('http');
// const axios = require('axios')

// axios.get('https://naver.com')
    // .then((response) => {console.log(response)})
    // .catch((error) => {console.log(error)})

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Hello world</h1>');
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`);
    
})