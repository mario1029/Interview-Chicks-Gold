import dotenv from 'dotenv';

// Read .env file
dotenv.config();

export default {
    PORT: process.env.PORT || 3000
}