// Import required modules
import express from 'express';
import bodyParser from 'body-parser';

//Load environment variables (populate process.env from .env file)
import * as dotenv from "dotenv";
dotenv.config();

// Create an instance of the Express application
const app = express();

// Configure the server to parse JSON data
app.use(bodyParser.json());

// Define a POST endpoint
app.post('/chat', async (req, res) => {
    // Retrieve data from the request body
    const { msg } = req.body;

    console.log('req.body; ======== ', msg)
    chatBot.myFunction(msg)

    res.json({ message: 'Data received successfully!', response });
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
