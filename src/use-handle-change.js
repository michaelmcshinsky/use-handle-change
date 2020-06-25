import { useState } from 'react';
import { setObjectValue } from './utils';

/**
 * @typedef {Object} useHandleChangeOutput
 * @property {Object} storedState - The current state of the form object
 * @property {setStateFunc} setState - Function to pass event and config options to state
 */

/**
 * `setState` property of useHandleChangeOutput
 * @typedef {function} setStateFunc
 * @param {Object} event - The event object from the DOM element (input)
 * @param {Object} config - Middleware functions and keys for injecting actions throughout the state change lifecycle
 */

/**
 * React hook for managing state objects
 * @param {Object} initialState - The initial object to store form values
 * @returns {storedState, setState} output
 */
function useHandleChange(initialState = {}) {
  if (typeof initialState !== 'object') {
    initialState = {};
  }

  const [storedState, setStoredState] = useState(initialState);

  const setState = (event, config = {}) => {
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

    // if (config.validate && typeof config.validate === 'function') {
    //   await config
    //     .validate(name, value)
    //     .then((newState) => {
    //       if (newState && typeof newState === 'object') {
    //         obj = { ...newState };
    //       }
    //     })
    //     .catch(() => {
    //       return;
    //     });
    // }

    if (
      config.keys &&
      typeof config.keys === 'array' &&
      config.keys.length > 0
    ) {
      obj = setObjectValue(keys, obj, value);
    } else {
      obj[name] = value;
    }

    setStoredState(obj);

    if (config.callback && typeof config.callback === 'function') {
      config.callback(obj);
    }
  };

  return [storedState, setState];
}

export default useHandleChange;
