import express from 'express';
import connectDatabase from './config/db.js';

const app = express();
connectDatabase();

app.get('/', (req, res) => {
    res.send('API Running');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});