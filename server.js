import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('API Running');
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});