const bodyParser = require("body-parser");
const { exec } = require("child_process");
const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const { stdin } = require("process");
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
app.use(cors())
app.use(bodyParser.json());
app.post('/code',async(req,res) => {
    var x = generateRandomString(12);
    // const cmd = `type nul > ${x}.cpp`;
    // exec(cmd);
    var tempcode = req.body.code
    // console.log(req.body.code)
   await fs.writeFile(`${x}.cpp`,(tempcode),(err)=>{
        if(err)
        {
            res.status(401).send("Error in writing file");
        }
    })
    const command = `g++ ${x}.cpp -o ${x} && ${x}.exe`;
    exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`Error: ${stderr}`);
          return;
        }
        if(stdin) {
          
          return;
        }
        console.log(`Output: ${stdout}`);
      })

})

app.listen(port, () => {
    console.log("Listening on 3000");
})