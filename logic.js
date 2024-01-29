const { exec } = require('child_process');
const { checkPrimeSync } = require('crypto');
const path = require('path');
function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  
  return result;
}
// var x = generateRandomString(10);
// const cmd = `type nul > ${x}.cpp`;
// exec(cmd,(err)=>{
//   if(err)
//   {
//     throw err;
//   }
// })

const example = "z0y28dP9vd";
const command = `g++ ${example}.cpp -o ${example} && ${example}.exe`
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
  }
  console.log(`Output: ${stdout}`);
})

