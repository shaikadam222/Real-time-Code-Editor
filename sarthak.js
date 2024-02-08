const fs = require('fs');

async function readFileAsync() {
    console.log("Start");

    try {
        // Asynchronous function to read a file using await
        const data = await fs.readFile('./outputs/sarthak.txt', 'utf-8');
        console.log("File content:", data);
    } catch (err) {
        console.error("Error reading file:", err);
        return;
    }

    // This part is executed after the file is read
    console.log("End");
}

// Call the asynchronous function
readFileAsync();
