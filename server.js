import express from 'express';
import connectDatabase from './config/db.js';

const app = express();
connectDatabase();

// Configure Middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send('API Running');
});
/**
 * @route POST api/users
 * @desc Register user
 */
app.post('/api/users', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});