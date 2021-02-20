const { createServer } = require('http');
const app = require('./_SERVER/app');
const { PORT_SERVER } = require('./_CONFIG');
const server = createServer(app);
const environment = process.env.NODE_ENV

server.listen(PORT_SERVER, () => console.log(`Server listening on port ${PORT_SERVER}. Environment: ${environment}`));