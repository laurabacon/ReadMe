


function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return '';
  }
}

function renderLicenseLink(license) {
  if (license) {
    return `[License](https://opensource.org/licenses/${license})`;
  } else {
    return '';
  }
}

function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} license. ${renderLicenseLink(license)}`;
  } else {
    return '';
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.testing}

## Questions

If you have any questions, please reach out to the creator.

GitHub: [${data['repo-name']}](https://github.com/${data['repo-name']})`}



module.exports = generateMarkdown;
