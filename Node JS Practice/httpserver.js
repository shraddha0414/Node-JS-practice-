const http = require('http'); // Fixed the typo

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req); // Log the request object
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>This is Shraddha</h1><p>This is the way to rock the world</p>'); // Fixed the HTML
});

server.listen(port, () => {
    console.log(`Server is listening on port ${port}`); // Fixed the template literal
});
