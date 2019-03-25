const express = require('express');
const controller = require('./controller/controller');

const app = express();
const port = 4567;

app.use(express.json());

app.get('/api/SmashChars', controller.get);
app.get('/api/SmashChars/:search', controller.search);
app.post('/api/SmashChars', controller.create);
app.put('/api/SmashChars/:id', controller.update);
app.delete('/api/SmashChars/:id', controller.delete);

app.listen(port, () => console.log('listening on', port))