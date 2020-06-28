import { useState } from "react";
import { setObjectValue } from "./utils";

/**
 *
 * @typedef {Object[]} HandleChangeOutput
 * @property {Object} storedState - The current objects referenced as state.
 * @property {function} setState - The object function that updates the state object.
 */

/**
 *
 * @param {Object} initialState - The object that we will manipulate as the user passes actions to form inputs.
 * @return {Object[]} HandleChangeOutput The state object and object function to pass and set new key values pairs on the object.
 */
export function useHandleChange(initialState = {}, Model) {
  if (
    typeof initialState !== "object" ||
    typeof initialState === null ||
    Array.isArray(initialState)
  ) {
    initialState = {};
  }

  const [storedState, setStoredState] = useState({
    ...(Model ? new Model(initialState) : initialState),
  });

  const setState = (event, config) => {
    if (typeof config !== "object") {
      config = {};
    }

    let obj = config.reset
      ? Model
        ? new Model(initialState)
        : initialState
      : { ...storedState };

    let name = event.target.name ? event.target.name : event.target.type;
    let value;

    if (event.target.type === "file") {
      if (event.target.files.length > 0) {
        value = event.target.files;
      } else {
        value = event.target.files[0];
      }
    } else {
      value =
        event.target.type === "checkbox" || event.target.type === "radio"
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

    if (config.keys && Array.isArray(config.keys)) {
      obj = setObjectValue(keys, obj, value);
    } else {
      obj[name] = value;
    }

    setStoredState(obj);

    if (config.callback && typeof config.callback === "function") {
      config.callback(obj);
    }
  };

  return [storedState, setState];
}

export default useHandleChange;
