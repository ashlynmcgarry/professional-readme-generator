// Return the license badge, if there is no license return empty string
function renderLicenseBadge(license) {
  switch(license) {
    case "Apache License 2.0": 
    badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    break;
    case "GNU General Public License v3.0": 
    badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    break;
    case "MIT License": 
    badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    break;
    case "BSD 2-Clause Simplified Licence": 
    badge = "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    break;
    case "BSD 3-Clause New or Revised License": 
    badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    break;
    case "Boost Software License 1.0": 
    badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    break;
    case "Creative Commons Zero V1.0 Universal": 
    badge = "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)";
    break;
    case "Eclipse Public License 1.0": 
    badge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    break;
    case "GNU Affero General Public License v2.0": 
    badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    break;
    case "Mozilla Public License 2.0": 
    badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    break;
    case "The Unlicense": 
    badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    break;
    case "none":
    default: 
    badge = "";
    break;
  }
  return badge;
}

// Return the license link, if there is no license return empty string
function renderLicenseLink(license) {
  switch(license) {
    case "Apache License 2.0": 
    link = "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)";
    break;
    case "GNU General Public License v3.0": 
    link = "[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)";
    break;
    case "MIT License": 
    link = "[MIT License](https://opensource.org/licenses/MIT)";
    break;
    case "BSD 2-Clause Simplified Licence": 
    link = "[BSD 2-Clause Simplified Licence](https://opensource.org/licenses/BSD-2-Clause)";
    break;
    case "BSD 3-Clause New or Revised License": 
    link = "[BSD 3-Clause New or Revised License](https://opensource.org/licenses/BSD-3-Clause)";
    break;
    case "Boost Software License 1.0": 
    link = "[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)";
    break;
    case "Creative Commons Zero V1.0 Universal": 
    link = "[Creative Commons Zero V1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)";
    break;
    case "Eclipse Public License 1.0": 
    link = "[Eclipse Public License 1.0](https://opensource.org/licenses/EPL-1.0)";
    break;
    case "GNU Affero General Public License v2.0": 
    link = "[GNU Affero General Public License v2.0](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    break;
    case "Mozilla Public License 2.0": 
    link = "[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)";
    break;
    case "The Unlicense": 
    link = "[The Unlicense](http://unlicense.org/)";
    break;
    case "none":
    default: 
    link = "";
    break;
  }
  return link;
}

// Return the license section of README, if there is no license, return an empty string
function renderLicenseSection(license) {
  return `${renderLicenseBadge(license)}

This project is licensed under ${renderLicenseLink(license)}.`
  
  if (license === "none") {
  return "";
  }
}

// Generate README markdown
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contribution}

## Tests

${data.test}

## Questions

For any additional questions, please reach out to me on GitHub [here](https://github.com/${data.github}) or via email at ${data.email}.`;
}

//Export to index.js
module.exports = generateMarkdown;
