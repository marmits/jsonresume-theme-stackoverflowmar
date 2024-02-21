const { SafeString } = require('handlebars');
const markdown = require('markdown-it')();

const paragraphSplit = (text) => {
  const expr = /\r\n|\r|\n/g;


  if (text != null) {
    text = markdown.render(text);
  }

  const lines = Array.isArray(text) ? text.join('').split(expr) : text.split(expr);

  let output = lines.filter(line => line).reduce((a, b) => `${a}<p>${b}</p>`, '');
  output = output.replace("<p><p>", '<p>');
  output = output.replace("</p></p>", '</p>');

  return new SafeString(output);
};

module.exports = { paragraphSplit };
