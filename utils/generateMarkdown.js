const licenseBadgeLinks = require('./licenseLinks');

// TODO: Create a function to generate markdown for README
function generateMarkdown(reply) {
  reply.licenseBadge = licenseBadgeLinks[reply.license];

  return `${reply.licenseBadge}
  # ${reply.title}
  ${reply.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Testing](#testing)

  ## Installation
  ${reply.installation}

  ## Usage
  ${reply.usage}

  ## Contribution
  ${reply.contribution}

  ## Testing
  ${reply.test}

  ## Questions?
  ### Please feel free to reach out to me here:
  Github: <a href="https://github.com/${reply.github}">${reply.github}</a>
  Email: <a href="mailto:${reply.email}">${reply.email}</a>
`;
}



module.exports = generateMarkdown;