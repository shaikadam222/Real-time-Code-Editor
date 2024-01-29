const express = require("express");
const app = express();
const port = 3000;



function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    
    return result;
}


app.post('/code',(req,res) => {
  var x = generateRandomString(10);
    const cmd = `${x}.cpp`;
    exec(cmd)

    
})

app.listen(port, () => {
    console.log("Listening on 3000");
})