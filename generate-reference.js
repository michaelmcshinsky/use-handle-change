const jsdoc2md = require('jsdoc-to-markdown');
const fs = require('fs');

function generateReferenceDoc(inputFl, outputFl) {
  jsdoc2md
    .render({
      files: inputFl,
      template: `{{>all-docs~}}`
    })
    .then(markdown => {
      fs.writeFileSync(outputFl, markdown);
    });
}

generateReferenceDoc('src/use-handle-change.js', 'use-handle-change.md');