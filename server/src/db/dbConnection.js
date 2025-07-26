import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const connectionHost = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB Connected Successfully to: ${connectionHost.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to the database: ${error.message}`);
        process.exit(1); // Exit the process with failure
        
    }
}

export { connectDB };