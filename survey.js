const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let name = "";
let colour = "";
let quest = "";
let swallow = "";

rl.question('What is your name?', (answer) => {
  name = answer;
  rl.question('What is quest?', (answer) => {
    quest = answer;
    rl.question('What is your favorite colour?', (answer) => {
      colour = answer;
      rl.question('What is the average flight speed of a swallow?', (answer) => {
        swallow = answer;
        rl.close();
        console.log(`${name}'s quest is ${quest}, and their favorite colour is ${colour}. They think the average flight speed of a swallow is ${swallow}, so they died.  Move along.`);
      });
    });
  });
});

// paired programming with @ScottRoberts