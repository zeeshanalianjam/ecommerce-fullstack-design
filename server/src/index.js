import { app } from './app.js';
import dotenv from 'dotenv';
import { connectDB } from './db/dbConnection.js';

dotenv.config({
  path: './.env',
});

const Port = process.env.PORT || 5000;

connectDB()
  .then(() => {
    app.on('error', err => {
      console.error(`Server error: ${err.message}`);
      process.exit(1); // Exit the process with failure
    });

    app.listen(Port, () => {
      console.log(`Server is running at http://localhost:${Port}`);
    });
  })
  .catch(error => {
    console.error(`Failed to connect to the database: ${error.message}`);
    process.exit(1); // Exit the process with failure
  });
