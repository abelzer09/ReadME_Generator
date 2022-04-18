// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
This project is licensed under the ${license} license.`;
  }
  return '';
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description
  ${data.description}
  Deployment video: [Video](https://drive.google.com/file/d/12ovBGktyW9_fAdSISn5YAk18j6RJP60A/view)

  ## Installation
  ${data.installation}

## Usage
  ${data.usage}

${renderLicenseSection(data.license)}

## Contributing
  ${data.contribute}

## Tests
  ${data.tests}

## Questions
  If you have any addtional questions, please send them to following address.
  ### Email Address:  ${data.questions}
  ### GitHub profile: [${data.gitHub}](https//github.com/${data.gitHub})
`;
}

module.exports = generateMarkdown;
