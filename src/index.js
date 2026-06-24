import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import dotenv from 'dotenv';
import connectDB from './db/index.js';
import app from './app.js'

dotenv.config({
  path: './.env'
});


connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`\nServer running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log('MongoDB connection failed:', error);
  })
;