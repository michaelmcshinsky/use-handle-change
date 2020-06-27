# Use Handle Change

A custom [React Hook](https://reactjs.org/docs/hooks-overview.html) that you probably don't need for managing form state as an object.

![](https://img.shields.io/bundlephobia/minzip/use-handle-change.svg)
[![npm](https://img.shields.io/npm/v/use-handle-change.svg)](http://npm.im/easy-peasy)
![](https://img.shields.io/badge/React-%5E16.8.0-green.svg)
![](https://img.shields.io/github/license/michaelmcshinsky/use-handle-change.svg)

## Motivation

Built both to satisfy an itch and to abstract away repetitive functions throughout react apps.

## Features

- Handles most if not all input types.
- Inject middleware functions for custom validation.
- Target deeply nested object values dynamically.
- Receive new state as a callback.
- Pass in a Constructor function to parse your initial state into a desired shape.
- Ability to reset state to initial state.

## Requirement

To use `use-handle-change`, you must use `react@16.8.0` or greater which includes hooks.

## Installation

`$ npm i use-handle-change`

## Event Object

When running your `handleChange` function against any input during the `onChange` event, you may pass in the two following arguments to the function.

If you do not pass any arguments, and place your `handleChange` function on the `onChange` attribute, it will behave normally with the passing of the event object to the function.

```javascript
/**
 * @param {Object} initialState - The object shape you want to start your form data as with key value pairs.
 * @param {function} Model - Optional, the constructor function used to format your initial state and state upon reset.
 */
useHandleChange(initialState, Model)
```

```javascript
/**
 * @param {Object} event - The event object from the DOM input
 * @param {Object} config - A list of configurations you can pass to the state manager to invoke actions
 */
handleChange(event, config)
```

```javascript
// Config Object
{
  callback: _myCallbackFunction, // A function that will receive the updated state for use after update
  keys: [] // Array of keys for settings the value of a deeply nested key within your state object
  reset: // Resets state to initial state passed into hook.
}
```

## Example

#### Full Component

```javascript
import React from "react";
import useHandleChange from "use-handle-change";

const DEFAULT_STATE = {
  name: "",
  email: "",
};

const ReactForm = () => {
  const [state, handleChange] = useHandleChange(DEFAULT_STATE);

  function _handleSubmit(e) {
    e.preventDefault();
    //... form submission logic
  }

  return (
    <form onSubmit={_handleSubmit}>
      <div>
        <div>
          <label htmlFor="inputName">Name</label>
        </div>
        <input
          id="inputName"
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <div>
          <label htmlFor="inputEmail">Email</label>
        </div>
        <input
          id="inputEmail"
          type="email"
          name="test"
          value={state.email}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
```

#### Checkbox

```javascript
const DEFAULT_STATE = {
  checkbox: false,
};

const [state, handleChange] = useHandleChange(DEFAULT_STATE);

return (
  <input
    id="inputCheckbox"
    type="checkbox"
    name="checkbox"
    checked={state.checkbox}
    onChange={handleChange}
  />
);
```

#### Nested Object

```javascript
const DEFAULT_STATE = {
  parent: {
    child: "",
  },
};

const [state, handleChange] = useHandleChange(DEFAULT_STATE);

return (
  <input
    type="text"
    name="child"
    value={state.parent.child}
    onChange={(e) => handleChange(e, { keys: ["parent", "child"] })}
  />
);
```

#### Callback

```javascript
const DEFAULT_STATE = {
  name: "",
};

const [state, handleChange] = useHandleChange(DEFAULT_STATE);

/**
 * @param {Object} obj - The object from the hooked state for you use as you please.
 */
function _callbackFunc(obj) {
  //... run other code here...
}

return (
  <input
    type="text"
    name="name"
    value={state.name}
    onChange={(e) => handleChange(e, { callback: _callbackFunc })}
  />
);
```

## License

[MIT Licensed](https://github.com/donavon/use-persisted-state/blob/develop/LICENSE)

## Contributors

[Michael McShinsky](https://github.com/michaelmcshinsky)
