const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

function readMeTemplate(res) {
  return `
# ${res.title}\n

${res.badges}\n

## DESCRIPTION\n 
${res.description1}
${res.description2}
${res.description3}
${res.description4}
${res.description5}   

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Credits](#credits)

* [License](#License)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)
      
## INSTALLATION\n
${res.installation}

## USAGE\n
${res.usage}
  
## CREDITS\n
${res.credits1}
${res.credits2}
${res.credits3}
  
## LICENSE\n
${res.license}
  
## CONTRIBUTING\n
${res.contributing}
  
## TESTS\n
${res.tests}

## QUESTIONS\n
Username: ${res.username}\n
Email: ${res.email}\n
`;
}

inquirer
  .prompt([
    {
      // GITHUB USERNAME
      type: "input",
      message: "Enter your GitHub username:",
      name: "username"
    },
    {
      // EMAIL address - not working in Github query
      type: "input",
      message: "Enter your email address:",
      name: "email"
    },
    {
      // TITLE of README.md
      type: "input",
      message: "Enter your project's title:",
      name: "title"
    },
    {
      // BADGES
      type: "checkbox",
      message: "Which badges would you like to add to your README.md?",
      name: "badges",
      choices: [
        {
          name: "Github",
          value:
            "[![GitHub package.json version](https://img.shields.io/github/package-json/v/noobatl/README-Generator?style=flat)](https://github.com/noobatl/README-Generator)",
          checked: true
        },
        {
          name: "npm",
          value: "[![npm](https://img.shields.io/npm/v/npm?style=flat)](https://www.npmjs.com/)",
          checked: true
        },
        {
          name: "node.js",
          value: "[![node](https://img.shields.io/node/v/inquirer?style=flat)](https://nodejs.org/en/)",
          checked: true
        },
        {
          name: "MIT",
          value: "[![License](https://img.shields.io/static/v1?label=License&message=MIT&color=brightgreen)](https://www.mit.edu/~amini/LICENSE.md)",
          checked: true
        },
        {
          name: "Contributor",
          value: "[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)",
          checked: true
        }
      ]
    },
    {
      // DESCRIPTION - 5 questions
      type: "input",
      message: "Description: What was your motivation?",
      name: "description1"
    },
    {
      type: "input",
      message: "Description: Why did you build this project?",
      name: "description2"
    },
    {
      type: "input",
      message: "Description: What problem does it solve?",
      name: "description3"
    },
    {
      type: "input",
      message: "Description: What did you learn?",
      name: "description4"
    },
    {
      type: "input",
      message: "Description: What makes your project stand out?",
      name: "description5"
    },
    {
      // INSTALLATION
      type: "input",
      message:
        "Installation: What are the steps required to install your project?",
      name: "installation",
      default: "npm install"
    },
    {
      // USAGE
      type: "input",
      message: "Usage: Can you provide instructions and examples for use? Include links to screenshots as needed.",
      name: "usage"
    },
    {
      // CREDITS - 3 questions
      type: "input",
      message:
        "Credits: If you had any collaborators, list their names and/or github usernames?",
      name: "credits1",
      default: "No collaborators in this version."
    },
    {
      type: "input",
      message:
        "Credits: If you used any third-party assets, list the creators?",
      name: "credits2"
    },
    {
      type: "input",
      message: "Credits: If you followed tutorials, list the links?",
      name: "credits3"
    },
    {
      // LICENSE
      type: "input",
      message: "License: Do you want to add a standard MIT License?",
      name: "license",
      default:
        "MIT License Copyright (c) 2020. Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE."
    },
    {
      // CONTRIBUTING
      type: "input",
      message:
        "Contributing: Do you want to add a Contributor Code of Conduct?",
      name: "contributing",
      default:
        "Please note that this project is released with a Contributor Code of Conduct. By participating in this project you agree to abide by its terms."
    },
    {
      // TESTS
      type: "input",
      message: "Tests: How do you run tests for your application?",
      name: "tests",
      default: "npm test"
    }
  ])
  .then(answers => {
    let readMeText = readMeTemplate(answers);

    fs.appendFile("GeneratedREADME.md", readMeText, err => {
      if (err) {
        return console.log(err);
      }
      console.log("You're README has been generated!");
      // addBadges ();
    });

    const queryUrl = `https://api.github.com/users/${answers.username}`;

    axios
      .get(queryUrl)
      .then(response => {
        // console.log(response.data);
        // console.log(answers.username);
        // console.log(response.data.name);
        // console.log(response.data.avatar_url);
        // console.log(response.data.html_url);
        // console.log(answers.email);
        let questionText = questionsTemplate(response.data);
        fs.appendFile("GeneratedREADME.md", questionText, err => {
          if (err) {
            return console.log(err);
          }
          console.log("You're README has been updated!");
      })
  }).catch(function(err){
    console.log(err);
  })

}).catch(function(err){
  console.log(err);
});


function questionsTemplate (data) {
return `

<img src="${data.avatar_url}" alt="avatar" style="border-radius:16px" width="50" />

If you have any questions about this repo, open an issue or contact [${data.name}](${data.html_url}) directly at the email above.
`
};

// ## Submission on BCS
// You are required to submit the following:
// * An animated GIF demonstrating the app functionality
// * A generated README.md file for a project repo.
// * The URL of the GitHub
