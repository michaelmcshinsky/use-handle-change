import { useState } from "react";
import { setObjectValue } from "./utils";

function useHandleChange(initialState = {}, Model) {
  if (
    typeof initialState !== "object" ||
    typeof initialState === null ||
    Array.isArray(initialState) ||
    initialState?.constructor.name !== "Object"
  ) {
    initialState = {};
  }

  const [storedState, setStoredState] = useState({
    ...(Model ? new Model(initialState) : initialState),
  });

  const setState = (event, config = {}) => {
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

    if (
      config.keys &&
      typeof config.keys === "array" &&
      isArray(config.keys) &&
      config.keys.length > 0
    ) {
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
