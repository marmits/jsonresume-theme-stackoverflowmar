const {SafeString} = require("handlebars");
const namepersonSplit = (val, type) => {

  let namepersonHelpers = {};
  let output = '';
  if (val != null) {

    let array = val.split(' ');
    namepersonHelpers = {
        givenName: array[0],
        familyName: array[1]
    };
    output = namepersonHelpers.familyName;
    if(type === 'givenName'){
      output = namepersonHelpers.givenName;
    }
  }

  return new SafeString(output);

};

module.exports = { namepersonSplit };
