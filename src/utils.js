/**
 *
 * @param {string[]} arr - Array of keys to set deeply nested key's value on resulting object.
 * @param {Object} obj - Object to find deeply nested key on and set it's value.
 * @param {*} val - The value from the Event object to be set on the object key.
 * @return {Object} The new object with the new key value pair assigned.
 */
export function setObjectValue(arr, obj, val) {
  let schema = obj;

  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];

    if (schema[key] === null || schema[key] === undefined) {
      schema[key] = {};
    }

    if (arr.length - 1 === i) {
      schema[key] = val;
    } else {
      schema = schema[key];
    }
  }

  return obj;
}
