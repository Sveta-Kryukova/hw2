# Data Transformer Library
The Data Transformer is a JavaScript library that provides advanced data transformation functions to handle various data types. The library offers a set of utility functions to perform addition, type conversions, boolean inversion, object merging, binary-to-decimal conversion, and more.

## Features
<ul>
<li>addValues: Accepts two arguments of any type and performs the appropriate addition operation based on their types. It returns the result of the addition. If the addition is not possible, it throws an error.</li>

<li>stringifyValues: Accepts a single argument of any type and converts it to a string representation. For objects and arrays, it uses JSON.stringify() for serialization. For other types, it uses the appropriate built-in methods or operations to convert them to strings.</li>

<li>invertBoolean: Accepts a single boolean argument and returns its inverted value. If the argument is not a boolean, it throws an error.</li>

<li>convertToNumber: Accepts a single argument of any type and attempts to convert it to a number. For strings, it uses parseFloat() or parseInt() for conversion. For other types, it uses appropriate operations or functions to perform the conversion. If the conversion is not possible, it throws an error.</li>

<li>coerceToType: Accepts two arguments: value and type. It attempts to convert the value to the specified type using type coercion. The function returns the coerced value if successful. If the coercion is not possible, it throws an error.</li>
</ul>

## Additional Functions
The library also provides some additional functions to handle specific use cases:
<ul>
<li>convertToArray: Accepts a single argument and converts it to an array. If the argument is not an array, it creates a new array with the argument as the only element. If the argument is already an array, it returns a shallow copy of the array.</li>
Accepts two objects as arguments and merges them into a single object. If there are overlapping keys, the later object's values overwrite the earlier ones.</li>

<li>binaryToDecimal: Accepts a binary string (e.g., "101010") and converts it to a decimal number.</li>

<li>convertToStringArray: Accepts an argument and converts it to a string representation. For arrays, it returns a comma-separated string representation. For other types, it uses the appropriate built-in method or operation to convert them to strings.</li>
</ul>

## Example usage of addValues
```
try {
  console.log(dataTransformer.addValues(5, 10)); // Output: 15
  console.log(dataTransformer.addValues("5", "10")); // Output: "510" (string concatenation)
  console.log(dataTransformer.addValues(true, 1)); // Output: 2 (boolean true is coerced to 1)
} catch (error) {
  console.error(error.message);
}

// ... (similarly use other functions)
```
