const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

function readMeTemplate(res) {
  return `
# ${res.title}\n

[![GitHub package.json version](https://img.shields.io/github/package-json/v/noobatl/README-Generator?style=flat)](https://github.com/noobatl/README-Generator) [![npm](https://img.shields.io/npm/v/npm?style=flat)](https://www.npmjs.com/) [![node](https://img.shields.io/node/v/inquirer?style=flat)](https://nodejs.org/en/) [![License](https://img.shields.io/static/v1?label=License&message=MIT&color=brightgreen)](https://www.mit.edu/~amini/LICENSE.md) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)clear

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
  
## CREDITS\n
${res.credits1}
${res.credits2}
${res.credits3}
  
## LICENSE\n
${res.license}
  
## CONTRIBUTING\n
${res.contributing}
  
## TESTS\n
${res.tests}`;
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
      name: "installation"
    },
    {
      // CREDITS - 3 questions
      type: "input",
      message:
        "Credits: If you had any collaborators, list their names and/or github usernames?",
      name: "credits1"
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
      type: "confirm",
      message: "License: Do you want to add a standard MIT License?",
      name: "license"
    },
    {
      // CONTRIBUTING
      type: "confirm",
      message:
        "Contributing: Do you want to add a Contributor Code of Conduct?",
      name: "contributing"
    },
    {
      // TESTS
      type: "input",
      message: "Tests: How do you run tests for your application?",
      name: "tests"
    }
  ])
  .then(answers => {
    let readMeText = readMeTemplate(answers);

    fs.appendFile("newREADME.md", readMeText, err => {
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
        console.log(response.data);
        console.log(answers.username);
        console.log(response.data.name);
        console.log(response.data.avatar_url);
        console.log(response.data.html_url);
        console.log(answers.email);
      })
      .catch(error => {
        console.log(error);
      });
  });


// function questionTemplate (data) {
//   return `
// #QUESTIONS
  
//   `
// }

// const addBadges = () => {
//   inquirer.prompt([
//     {
//       type: "confirm",
//       message: "Would you like to add some badges?",
//       name: "addbadge"
//     },
//     {
//       type: "checkbox",
//       message: "Which badges would you like to add?",
//       name: "badges",
//       when: function(answers) {
//         return answers.addbadge;
//       }
//     }
//   ]).then(data => {
//     console.log(data)
//   })
//   .catch(err => {
//     return console.log(err);
//   })
// }

// * At least one badge
// Add list of 4 badges: [![License](https://img.shields.io/static/v1?label=License&message=MIT&color=brightgreen)](https://www.mit.edu/~amini/LICENSE.md)

// * Table of Contents - Add with ## ("h2") [Optional]
// Add a table of contents to make it easy for users to find what they need.
//   * Installation
//   * Usage
//   * Credits
//   * License
//   * Contributing
//   * Tests
//   * Questions

// * Usage - Add with ## ("h2")
// Provide instructions and examples for use
// Include screenshots as needed.

// * License
// The last section - let developers know what they can and cannot do with your project.
// MIT License
// Copyright (c) [year] [fullname]
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// ```
// AS A developer

// I WANT a README generator

// SO THAT I can easily put together a good README for a new project

// GIVEN the developer has a GitHub profile and a repository

// WHEN prompted for the developer's GitHub username and repo specific information

// THEN a README for the repo is generated

// ```

// ## Minimum Requirements
// * Functional, deployed application.
// * GitHub repository with a unique name and a README describing project.
// * The generated README includes a bio image from the user's GitHub profile.
// * The generated README includes the user's email.
// * The generated README includes the following sections:
//   * Title
//   * Description
//   * Table of Contents
//   * Installation
//   * Usage
//   * License
//   * Contributing
//   * Tests
//   * Questions
// * The generated README includes 1 badge that's specific to the repository.

// ## Commit Early and Often
// One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:
// * Your commit history is a signal to employers that you are actively working on projects and learning new skills.
// * Your commit history allows you to revert your code base in the event that you need to return to a previous state.

// ## Submission on BCS
// You are required to submit the following:
// * An animated GIF demonstrating the app functionality
// * A generated README.md file for a project repo.
// * The URL of the GitHub repository
