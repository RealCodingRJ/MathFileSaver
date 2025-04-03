import fs from "fs";
import readline from "readline-sync";

let randomNum1 = Math.floor(Math.random() * 10 + 1);
let randomNum2 = Math.floor(Math.random() * 5 + 1);
const text2 =
  `${randomNum1} + ${randomNum2} = ${randomNum1 + randomNum2} ` + "\n" + "\n";

const data = fs.readFileSync("Data.json");

const converted = JSON.parse(data);

const question = readline.question("Do You Want to Add a Check  Y | N: ");

if (question.startsWith("y")) {
  const checkMark = "\u2713 ";
  const stringStr = `${checkMark} Checked: ${text2}`;

  fs.appendFile("./Main.txt", stringStr, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("written to file");
    }
  });
} else {
  fs.appendFileSync("./Main.txt", text2, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("written to file");
    }
  });
}
