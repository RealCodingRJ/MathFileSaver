import fs from "fs";

let randomNum1 = Math.floor(Math.random() * 10 + 1);
let randomNum2 = Math.floor(Math.random() * 5 + 1);
const text2 = `What is ${randomNum1} + ${randomNum2} = ${
  randomNum1 + randomNum2 + "\n"
}`;

fs.appendFileSync("./Main.txt", text2, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("written to file");
  }
});
