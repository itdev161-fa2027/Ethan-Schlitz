import mongoose from 'mongoose';
import config from 'config';

const db = config.get('mongoURI');

const connectDatabase = async () => {
    try {
        await mongoose.connect(db);
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error(err.message);
    }
};

export default connectDatabase;