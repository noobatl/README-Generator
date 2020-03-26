const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

// # Unit 09 Node.js and ES6+ Homework: Good README Generator
// Create a command-line application that dynamically generates a README.md 
// from a user's input. The application will be invoked with the following command:
// The user will be prompted for their GitHub username, 
// which will be used to make a call to the GitHub API 
// to retrieve their email and profile image. 
// They will then be prompted with questions about their project.
console.log ("Hello World!")

// The README will be populated with the following:

// * Project title - Add with # ("h1") 

// * At least one badge
// Add list of 4 badges: [![License](https://img.shields.io/static/v1?label=License&message=MIT&color=brightgreen)](https://www.mit.edu/~amini/LICENSE.md)

// * Description - Add with ## ("h2")
// Add a short description explaining the what, why, and how. 
// What was your motivation?
// Why did you build this project? 
// What problem does it solve? 
// What did you learn? 
// What makes your project stand out? 

// * Table of Contents - Add with ## ("h2") [Optional]
// Add a table of contents to make it easy for users to find what they need. 
//   * Installation
//   * Usage
//   * Credits
//   * License
//   * Contributing
//   * Tests
//   * Questions

// * Installation - Add with ## ("h2") 
// What are the steps required to install your project? 

// * Usage - Add with ## ("h2") 
// Provide instructions and examples for use
// Include screenshots as needed. 

// * Credits - Add with ## ("h2") 
// List your collaborators, if any. 
// links to their GitHub profiles. 
// If you used any third-party assets, list the creators. 
// If you followed tutorials, include links to those here as well. 

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

// * Contributing

// * Tests

// * Questions
//   * User GitHub profile picture
//   * User GitHub email

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

// Follow these guidelines for committing:
// * Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.
// * Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.
// * Don't commit half-done work, for the sake of your collaborators (and your future self!).
// * Test your application before you commit to ensure functionality at every step in the development process.
// We would like you to have more than 200 commits by graduation, so commit early and often!

// ## Submission on BCS
// You are required to submit the following:
// * An animated GIF demonstrating the app functionality
// * A generated README.md file for a project repo.
// * The URL of the GitHub repository