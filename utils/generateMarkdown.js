function generateMarkdown(data) {
  return `# ${data.title} 

## Description

${data.description}

## Table of Contents

- [Installation]
- [Usage]
- [License]
- [Contributing]
- [Tests]
- [Questions]

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.testing}

## Questions

If you have any questions, please reach out via email at: [${data['email']}]

GitHub: [${data['username']}](https://github.com/${data['username']})
Repo: [${data['repo-name']}](https://github.com/${data['repo-name']})`}



module.exports = generateMarkdown;
