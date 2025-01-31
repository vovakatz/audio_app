import dotenv from 'dotenv';
dotenv.config(); // Load .env variables

import app from './app';

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});