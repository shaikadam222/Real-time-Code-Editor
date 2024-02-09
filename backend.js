const bodyParser = require("body-parser");
const { exec, spawn } = require("child_process");
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
const allowedOrigin = 'https://codeswift-git-main-shaikadam222s-projects.vercel.app/'
app.use(cors({
    origin: allowedOrigin,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // enable set cookie
}))
app.use(bodyParser.json());
app.post('/code', async (req, res) => {
  var fileName = generateRandomString(12);
  await fs.writeFile(`./outputs/${fileName}.cpp`, req.body.code, (err) => {
      if (err) {
          console.log("error in writing code");
          res.sendStatus(401);
      }
  })

  const compileProcess = spawn('g++', [`./outputs/${fileName}.cpp`, '-o', `./outputs/${fileName}`]);
  compileProcess.stderr.on('data', (data) => {
      console.error(`Compile error: ${data}`);
      res.status(500).send(`Compile error: ${data}`);
  });
  compileProcess.on('close', (compileCode) => {
      if (compileCode === 0) {

          const runProcess = spawn(`./outputs/${fileName}`, { stdio: ['pipe', 'pipe', 'pipe'] });

          const userInput = req.body.input;

          runProcess.stdin.write(userInput);
          runProcess.stdin.end();

          let output = '';
          let errorOutput = '';

          runProcess.stdout.on('data', (data) => {
              output += data;
          });

          runProcess.stderr.on('data', (data) => {
              errorOutput += data;
          });

          runProcess.on('close', () => {
              res.send({ stdout: output, stderr: errorOutput });
          });
      }
  });
});

app.listen(port, () => {
    console.log("Listening on 3000");
})