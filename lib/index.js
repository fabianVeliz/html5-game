const { random } = require('../utils');

class Feik {
  constructor (options = {}) {
    this.options = options;

    const locale = this.options.locale || 'en';
    const selectedLocale = require(`./locales/${locale}`);

    this.name = {};

    Object.keys(selectedLocale.name).map(k => {
      this.name[k] = () => random(selectedLocale.name[k]);
    });
  }
}

module.exports = Feik;
