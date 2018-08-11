const { random } = require('../utils');

class Feik {
  constructor (options = {}) {
    this.options = options;

    const locale = this.options.locale || 'en';

    this.namespaces = require(`./locales/${locale}`);
    this.originalNamespaces = JSON.parse(JSON.stringify(this.namespaces));

    const methods = {};

    Object.keys(this.namespaces).map(namespace => {
      methods[namespace] = {};

      Object.keys(this.namespaces[namespace]).map(k => {
        methods[namespace][k] = () => random(this.namespaces[namespace][k]);
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
      const path = match.substr(1, match.length -2);
      const splitPath = path.split('.');
      const method = this[splitPath[0]][splitPath[1]];
      newStr = newStr.replace(match, method);
    });

    return newStr;
  }

  set(methodPath, values) {
    const splitPath = methodPath.split('.');

    // TODO: Improve this logic.
    if (!values || !values.length) {
      return this.namespaces[splitPath[0]][splitPath[1]] =
        this.originalNamespaces[splitPath[0]][splitPath[1]];
    }

    this.namespaces[splitPath[0]][splitPath[1]] = values;
  }
}

module.exports = Feik;
