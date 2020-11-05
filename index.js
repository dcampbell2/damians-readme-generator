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
    message: "What's the title of your Project?",
    name: "title",
  },
  {
    type: "input",
    message: "Give a brief description of your project.",
    name: "description",
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
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) \n * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.";
      } else if (response.license === "GNU General Public License v2.0") {
        response.license =
          "[![License: GPLv2](https://img.shields.io/badge/License-GPLv2-yellow.svg)](https://opensource.org/licenses/GPL-2.0) \n * This License applies to any program or other work which contains a notice placed by the copyright holder saying it may be distributed under the terms of this General Public License. The 'Program', below, refers to any such program or work, and a 'work based on the Program' means either the Program or any derivative work under copyright law: that is to say, a work containing the Program or a portion of it, either verbatim or with modifications and/or translated into another language. (Hereinafter, translation is included without limitation in the term 'modification'.) Each licensee is addressed as 'you'.";
      } else if (response.license === "Apache") {
        response.license =
          "[![License: Apache](https://img.shields.io/badge/License-Apache-yellow.svg)](https://opensource.org/licenses/Apache-2.0) \n * Licensed under the Apache License, Version 2.0 (the License');you may not use this file except in compliance with the License.You may obtain a copy of the License athttp://www.apache.org/licenses/LICENSE-2.0Unless required by applicable law or agreed to in writing, softwaredistributed under the License is distributed on an 'AS IS' BASIS,WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.See the License for the specific language governing permissions andlimitations under the License."
      } else if (response.license === "GNU General Public License v3.0") {
        response.license =
          "[![License: GPLv3](https://img.shields.io/badge/License-GPLv3-yellow.svg)](https://opensource.org/licenses/GPL-3.0) \n * The GNU General Public License does not permit incorporating your program into proprietary programs. If your program is a subroutine library, you may consider it more useful to permit linking proprietary applications with the library. If this is what you want to do, use the GNU Lesser General Public License instead of this License. But first, please read <http://www.gnu.org/philosophy/why-not-lgpl.html>.";
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
