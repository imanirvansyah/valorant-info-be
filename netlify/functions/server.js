// netlify/functions/server.js
const serverless = require('serverless-http');
const app = require('../../app'); // <-- your existing Express app (no app.listen)

module.exports.handler = serverless(app);