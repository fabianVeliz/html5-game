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

  compile(str) {
    let newStr = str;

    if (!newStr || typeof newStr !== 'string') {
      throw new Error(`Empty or invalid value.`);
    }

    const matches = newStr.match(/\{(.*?)\}/g);
    if (!matches) {
      return newStr;
    }

    matches.forEach(match => {
      const originalPath = match.substr(1, match.length -2);
      const splitPath = originalPath.split('.');
      const method = this[splitPath[0]][splitPath[1]];
      newStr = newStr.replace(match, method);
    });

    return newStr;
  }
}

module.exports = Feik;
