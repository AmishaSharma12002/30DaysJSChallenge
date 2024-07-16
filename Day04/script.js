// Write a program to calculate the sum of numbers from x to (x * 10) using a while loop.
const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let sum = 0;
rl.question(`Input:`, x => {
    for(let i = 1;i<=10;i++)
    {
      let pro = x*i;
      sum = sum + pro;
    }
    console.log(sum);
  rl.close();
});
