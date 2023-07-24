const addValues = (a, b) => {
  const allowedType = [ 'number', 'string']

 if(allowedType.includes(typeof(a)) && allowedType.includes(typeof(b))) {
  return a + b
 }
 throw new Error('Invalid input')
}

  const stringifyValues = (a) => {
      if (typeof a === 'object') {
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
        return stringifyValues(value);
      case 'number':
        return convertToNumber(value);
      case 'boolean':
        return Boolean(value);
      case 'object':
        return Object(value);
      case 'array':
        return convertToArray(value);
      default:
        throw new Error('Invalid type. Unable to coerce to the specified type.');
    }
  }

  //Additional functions
  const convertToArray = (arg) => {
    return Array.isArray(arg) ? arg : [arg];
  };

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


