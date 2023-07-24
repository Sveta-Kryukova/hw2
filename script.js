  const addValues = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Invalid input. Both arguments must be numbers.');
    }
    return a + b;
  }

  const stringifyValues = (a) => {
      if (typeof a === 'object' || Array.isArray(a)) {
        return JSON.stringify(a);
      } else {
        return String(a);
      }
    }

  const invertBoolean = (a) => {
    if (typeof a !== 'boolean') {
      throw new Error('Invalid input. Argument must be a boolean.');
    }
    return !a;
  }

  const convertToNumber = (a) => {
    let result = Number(a);
    if (typeof a === 'string') {
      result = parseFloat(a);
    }
    if (result === isNaN) {
      throw new Error('Invalid input');
    }
    return result;
  }

  const coerceToType = (value, type) => {
    switch (type) {
      case 'string':
        return String(value);
      case 'number':
        return dataTransformer.convertToNumber(value);
      case 'boolean':
        return Boolean(value);
      case 'object':
        return Object(value);
      case 'array':
        return Array.from(value);
      default:
        throw new Error('Invalid type. Unable to coerce to the specified type.');
    }
  }

  //Additional functions
  const convertToArray = (a) => {
    if (!Array.isArray(value)) {
      throw new Error('Invalid input. Argument must be an array.');
    }
    return Array.from(value);
  }

  const mergeObjects = (a, b) => {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      throw new Error('Invalid input. Both arguments must be objects.');
    }
    return Object.assign({}, obj1, obj2);
  }

  const binaryToDecimal = (a) => {
    if (!/^[0-1]+$/.test(binaryStr)) {
      throw new Error('Invalid input. Argument must be a binary string.');
    }
    return parseInt(binaryStr, 2);
  };

  const convertToStringArray = (a) => {
    const result = a.toString();
    if (result === isNaN) {
      throw new Error('Invalid input');
    }
    return result;
  }

  const dataTransformer = {
    addValues,
    stringifyValues,
    invertBoolean,
    convertToNumber,
    coerceToType,
    convertToArray,
    mergeObjects,
    binaryToDecimal,
    convertToStringArray
  };