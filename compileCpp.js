// netlify/functions/compileCpp.js

const { spawn } = require('child_process');
const fs = require('fs').promises;
function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  
  return result;
}
exports.handler = async function (event, context) {
  console.log("ASdasdasdasdqweqwe");
  try {
    const fileName = generateRandomString(12);
    console.log(fileName);

    await fs.writeFile(`./outputs/${fileName}.cpp`, event.body.code);

    const compileProcess = spawn('g++', [`./outputs/${fileName}.cpp`, '-o', `./outputs/${fileName}`]);

    let compileErrorOutput = '';

    compileProcess.stderr.on('data', (data) => {
      compileErrorOutput += data;
    });

    await new Promise((resolve) => {
      compileProcess.on('close', (compileCode) => {
        if (compileCode !== 0) {
          console.error(`Compile error: ${compileErrorOutput}`);
          resolve({
            statusCode: 500,
            body: JSON.stringify({ error: `Compile error: ${compileErrorOutput}` }),
          });
        } else {
          resolve();
        }
      });
    });

    const runProcess = spawn(`./outputs/${fileName}`, { stdio: ['pipe', 'pipe', 'pipe'] });

    const userInput = event.body.input;

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

    await new Promise((resolve) => {
      runProcess.on('close', () => {
        resolve({
          statusCode: 200,
          body: JSON.stringify({ stdout: output, stderr: errorOutput }),
        });
      });
    });
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};

