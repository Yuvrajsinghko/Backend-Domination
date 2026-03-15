import inquirer from "inquirer";
import fs from "node:fs";
import { type } from "node:os";
import qr from "qr-image";
inquirer
  .prompt([
    {
      type: "input",
      name: "url",
      message: "Enter the URL you want to create a QR code for:",
    },
  ])
  .then((answers) => {
    const url = answers.url;
    const svgImg = qr.imageSync(url, { type: "svg" });
    fs.writeFile("result.txt", svgImg, (err) => {
      if (err) throw err;
      console.log("your Qr generated successfully");
    });
  });
