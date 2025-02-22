import express from 'express';
import path from 'path';

import { dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 6000;

app.use((req, res, next) => {
    console.log('Request path:', req.path, 'from', req.ip);
    next();
});

app.use(express.static(path.join(__dirname, '../client-build')));

app.get('*', (req, res) => {
    console.log(req.path)
    res.sendFile(path.join(__dirname, '../client-build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});