const { SafeString } = require('handlebars');

const soustraction = (value, nb) => {

  return new SafeString((parseInt(value) - nb).toString());


}

module.exports = { soustraction };
