const Handlebars = require('handlebars');
const { readFileSync, readdirSync } = require('fs');
const { join } = require('path');



const HELPERS = join(__dirname, 'theme/hbs-helpers');


const { birthDate } = require(join(HELPERS, 'birth-date.js'));
const { dateHelpers } = require(join(HELPERS, 'date-helpers.js'));
const { paragraphSplit } = require(join(HELPERS, 'paragraph-split.js'));
const { namepersonSplit } = require(join(HELPERS, 'nameperson-split.js'));
const { toLowerCase } = require(join(HELPERS, 'to-lower-case.js'));
const { spaceToDash } = require(join(HELPERS, 'space-to-dash.js'));
const { soustraction } = require(join(HELPERS, 'soustraction-helpers.js'));
const { infos } = require(join(HELPERS, 'infos.js'));

const { MY, Y, DMY } = dateHelpers;
const {AUTHOR} = infos;

Handlebars.registerHelper('birthDate', birthDate);
Handlebars.registerHelper('soustraction', soustraction);
Handlebars.registerHelper('MY', MY);
Handlebars.registerHelper('Y', Y);
Handlebars.registerHelper('DMY', DMY);
Handlebars.registerHelper('paragraphSplit', paragraphSplit);
Handlebars.registerHelper('namepersonSplit', namepersonSplit);
Handlebars.registerHelper('toLowerCase', toLowerCase);
Handlebars.registerHelper('spaceToDash', spaceToDash);
Handlebars.registerHelper('AUTHOR', AUTHOR);


function render(resume) {
  const css = readFileSync(`${__dirname}/style.css`, 'utf-8');
  const tpl = readFileSync(`${__dirname}/resume.hbs`, 'utf-8');
  //const js1 = readFileSync(`${__dirname}/theme/hbs-helpers/ryan.js`, 'utf-8');

  const ageJs = readFileSync(`${__dirname}/theme/hbs-helpers/age.js`, 'utf-8');

  const partialsDir = join(__dirname, 'theme/partials');
  const filenames = readdirSync(partialsDir);

  filenames.forEach((filename) => {
    const matches = /^([^.]+).hbs$/.exec(filename);
    if (!matches) return;
    const name = matches[1];
    const filepath = join(partialsDir, filename);
    const template = readFileSync(filepath, 'utf8');
    Handlebars.registerPartial(name, template);
  });

  return Handlebars.compile(tpl)({
    css,
    resume,
    AUTHOR,
    //js1,
    ageJs
  });
}

const marginValue = '0.8 cm';
const pdfRenderOptions = {
  mediaType: 'print',
  margin: {
    top: marginValue,
    bottom: marginValue,
    left: marginValue,
    right: marginValue,
  }
}

module.exports = { render, pdfRenderOptions };
