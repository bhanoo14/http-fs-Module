const http = require('http');
const fs = require('fs');

fs.writeFile("test2.txt", "Hello I am just sample file ", (err)=>{
    if(err) throw new err
    console.log("file is saved");

})

fs.appendFile("test.txt", "Hello I am just adding some text here file", (err) => {
    if (err) {
        // Handle error if file appending fails
        throw err;
    }
    console.log("File is updated");
});

fs.unlink("test.txt", (err) => {
    if (err) {
        // Handle error if file removing fails
        throw err;
    }
    console.log("File is removed");
});


const app = http.createServer((req, res) => {
    console.log("Server is listening at 3000");

    // Set the content type to HTML
    res.writeHead(200, { "Content-Type": 'text/html' });

    // Read the contents of the HTML file
    fs.readFile('modify.txt', (err, data) => {
        if (err) {
            // Handle error if file reading fails
            console.error("Error reading file:", err);
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Internal Server Error");
        } else {
            // Send the contents of the HTML file to the client
            res.write(data);
            res.end(); // Move res.end() here
        }
    });
});

app.listen(3000);
