const dataTransformer = {
  addValues: (a, b) => {
    const result = a + b;
    if (result === isNaN) {
      throw new Error('Invalid input');
    }
    return result;
  },

  stringifyValues: (a) => {
    const result = JSON.stringify(a);
    if (result === isNaN) {
      throw new Error('Invalid input');
    }
    return String(result);
  },

  invertBoolean: (a) => {
    const result = !a;
    if (result === isNaN) {
      throw new Error('Invalid input');
    }
    return result;
  },

  convertToNumber: (a) => {
    let result = Number(a);
    if (typeof a === 'string') {
      result = parseFloat(a);
    }
    if (result === isNaN) {
      throw new Error('Invalid input');
    }
    return result;
  },

  coerceToType: (value, type) => {
    switch (type) {
      case 'string':
        return String(value);
      case 'number':
        return Number(value);
      case 'boolean':
        return Boolean(value);
      case 'object':
        return Object(value);
      case 'array':
        return Array(value);
      default:
        throw new Error('Invalid type');
    }
  },

  //Additional functions
  convertToArray: (a) => {
    const result = Array(a);
    if (result === isNaN) {
      throw new Error('Invalid input');
    }
    if (typeof a === 'array') {
      result = a;
    }
    return result;
  },

  mergeObjects: (a, b) => {
    const result = Object.assign(a, b);
    if (result === isNaN) {
      throw new Error('Invalid input');
    }
    return result;
  },

  binaryToDecimal: (a) => {
    const result = parseInt(a, 2);
    if (result === isNaN) {
      throw new Error('Invalid input');
    }
    return result;
  },

  convertToStringArray: (a) => {
    const result = a.toString();
    if (result === isNaN) {
      throw new Error('Invalid input');
    }
    return result;
  }
}
console.log(dataTransformer.addValues(null, 2));