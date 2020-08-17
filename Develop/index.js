const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
{ type: "input",
message: "What would you like the title of your ReadMe to be?",
name: "title"
},
{type: "input",
message: "What is the description of your ReadMe?",
name: "description"

//finish rest of questions

}

];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {

        if (err) {
          return console.log(err);
        }
        console.log("Success!");

    });
}

// function to initialize program
function init() {

    inquirer
  .prompt(questions)
  .then(function(response) {
      writeToFile("README.md", generateMarkdown({...response}))

 
  });
}



// function call to initialize program
init();
