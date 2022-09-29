const express = require('express');
const app = express();

app.use(express.json());

app.get('/me', (req, res) => {
    res.json({ name: 'Martin', age: 20, country: 'Mexico' });
});

app.post('/metas', (req, res) => {
    res.json(['Programming', 'Games', 'Sleep']);
});

app.patch('/metas', (req, res) => {
    res.json(['Learn express', 'Keep studying english']);
});

app.put('/business', (req, res) => {
    res.json(['Cd Projekt Red', 'Academlo', 'Globant']);
});

app.listen(3000, () => console.log('Is listening at 3000'));