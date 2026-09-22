import express from 'express';
import { check, validationResult } from 'express-validator';
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
app.post(
  '/api/users',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
  ],
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } else {
        return res.send(req.body);
    }
  }
);
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});