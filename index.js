import { useState } from 'react';

const useHandleChange = (initialState = {}) => {
  const [storedState, setStoredState] = useState(initialState);

  const setState = (event, callback, ...keys) => {
    let obj = { ...storedState };
    let name = event.target.name ? event.target.name : event.target.type;
    let value;

    if (event.target.type === 'file') {
      value = event.target.files[0];
    } else {
      value =
        event.target.type === 'checkbox' || event.target.type === 'radio'
          ? event.target.checked
          : event.target.value;
    }

    if (keys.length > 0) {
      setObjectValue(keys, obj, value);
    } else {
      obj[name] = value;
    }

    setStoredState(obj);

    if (callback && typeof callback === 'function') {
      callback(obj);
    }
  };

  return [storedState, setState];
};

function setObjectValue(arr, obj, val) {
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
}

export default useHandleChange;
