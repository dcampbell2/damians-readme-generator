// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Testing

  ${data.tests}

  ## Contributors

  ${data.contributors}

  ## License

  ${data.license}

  ## Questions

${data.github}
${data.contact}


`;
}

module.exports = generateMarkdown;
