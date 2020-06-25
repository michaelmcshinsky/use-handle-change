import { useState } from 'react';

export const useHandleChange = (initialState = {}) => {
  const [storedState, setStoredState] = useState(initialState);

  const setState = (event, callback, ...keys) => {
    let obj = { ...storedState };
    let name = event.target.name ? event.target.name : event.target.type;
    let value;

    if (event.target.type === 'file') {
      value = event.target.files[0];
    } else {
      value =
        e.target.type === 'checkbox' || e.target.type === 'radio'
          ? e.target.checked
          : e.target.value;
    }

    if (keys.length > 0 && obj[keys]) {
      obj[keys] = value;
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

export default useHandleChange;
