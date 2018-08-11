const { random } = require('../utils');

class Feik {
  constructor (options = {}) {
    this.options = options;

    const locale = this.options.locale || 'en';
    const namespaces = require(`./locales/${locale}`);
    const methods = {};

    Object.keys(namespaces).map(namespace => {
      methods[namespace] = {};

      Object.keys(namespaces[namespace]).map(k => {
        methods[namespace][k] = () => random(namespaces[namespace][k]);
      });
    });

    Object.assign(this, methods);
  }
}

module.exports = Feik;
