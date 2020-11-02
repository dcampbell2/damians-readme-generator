const generatedMarkdown = require("./utils/generateMarkdown");

const inquirer = require("inquirer");

const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const axios = require("axios");

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What's the name of you're README file?",
    name: "userFileName",
  },
  {
    type: "input",
    message: "Give a brief description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "What's the title of your Project?",
    name: "title",
  },
  {
    type: "input",
    message: "What technology is needed to install your application?",
    name: "installation",
  },
  {
    type: "input",
    message: "How do you use your application?",
    name: "usage",
  },
  {
    type: "list",
    message: "What's the license for your application?",
    name: "license",
    choices: [
      "MIT",
      "GNU General Public License v2.0",
      "Apache",
      "GNU General Public License v3.0",
      "unlicense",
      "BSD 3-clause 'New' or 'Revised' license",
    ],
  },
  {
    type: "input",
    message: "Who all contributed to your project?",
    name: "contributors",
  },
  {
    type: "input",
    message: "How can someone test your application?",
    name: "tests",
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "github",
  },
  {
    type: "input",
    message:
      "What's your email along with some instructions to best reach you?",
    name: "contact",
  },
];

//function to create License Badge

function createLicense() {}

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, "utf8", (err) => {
    if (err) throw err;
    console.log("You're README file is now ready!");
  });
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)

    .then((response) => {
      console.log(response);

      if (response.license === "MIT") {
        response.license =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      } else if (response.license === "GNU General Public License v2.0") {
        response.license =
          "[![License: GPLv2](https://img.shields.io/badge/License-GPLv2-yellow.svg)](https://opensource.org/licenses/GPL-2.0)";
      } else if (response.license === "Apache") {
        response.license =
          "[![License: Apache](https://img.shields.io/badge/License-Apache-yellow.svg)](https://opensource.org/licenses/Apache-2.0)";
      } else if (response.license === "GNU General Public License v3.0") {
        response.license =
          "[![License: GPLv3](https://img.shields.io/badge/License-GPLv3-yellow.svg)](https://opensource.org/licenses/GPL-3.0)";
      } else if (
        response.license === "BSD 3-clause 'New' or 'Revised' license"
      ) {
        response.license =
          "[![License: BSD 3 Clause](https://img.shields.io/badge/License-BSD3Clause-yellow.svg)](https://opensource.org/licenses/BSD-3-Clause) \n * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS 'AS IS' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.";
      } else if (response.license === "unlicense") {
        response.license =
          "[![License: Unlicense](https://img.shields.io/badge/License-Unlicense-yellow.svg)]";
      }
      writeToFile(`${response.userFileName}`, generateMarkdown(response));
    });
}

// function call to initialize program
init();
