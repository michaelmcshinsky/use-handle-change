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
  console.log('schema', schema);
  console.log('obj', obj);
  return obj;
}
