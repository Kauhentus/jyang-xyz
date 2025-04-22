import express from 'express';
import path from 'path';
import basicAuth from 'express-basic-auth';
import { warp_creds, vidstr_creds } from './server_credentials.js';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 6000;

app.use((req, res, next) => {
    console.log('Request path:', req.path, 'from', req.ip);
    next();
});

app.use(
    '/iterative-design',
    basicAuth({
      users: warp_creds,
      challenge: true,
      realm: 'Protected Area',
    })
);
app.use(
    '/adobe-vidstr',
    basicAuth({
      users: vidstr_creds,
      challenge: true,
      realm: 'Protected Area',
    })
);

app.use(express.static(path.join(__dirname, '../client-build')));

app.get('*', (req, res) => {
    console.log(req.path)
    res.sendFile(path.join(__dirname, '../client-build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});