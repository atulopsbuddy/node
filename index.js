const { exec } = require("child_process");

// ❌ Hardcoded secret (bad practice)
const API_KEY = "12345-SECRET-KEY";

// ❌ Command Injection (bad practice)
const userInput = process.argv[2];
exec(`ls ${userInput}`, (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

