const httpServer = require('http-server');
const path = require('path');

const server = httpServer.createServer({
    root: path.resolve(__dirname),
    mimeTypes: {
        'application/wasm': ['.wasm']
    }
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
