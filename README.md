# use-handle-change

A `handleChange` react hook you don't need for managing object state against simple forms.

If you actually use this, I honestly want to know why this benefited you. So please, message me.

This would probably be better used as a utility function in your utilities folder.

## Examples

#### Full Component

```javascript
import React from 'react';
import useHandleChange from 'use-handle-change';

const DEFAULT_STATE = {
  name: '',
  email: '',
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
          onChange={(e) => handleChange(e, callbackFunc)}
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
    child: '',
  },
};

const [state, handleChange] = useHandleChange(DEFAULT_STATE);

return (
  <input
    type="text"
    name="child"
    value={state.parent.child}
    onChange={(e) => handleChange(e, null, 'parent', 'child')}
  />
);
```

#### Callback

```javascript
const DEFAULT_STATE = {
  name: '',
};

const [state, handleChange] = useHandleChange(DEFAULT_STATE);

function _callbackFunc(obj) {
  //... object from state
}

return (
  <input
    type="text"
    name="name"
    value={state.name}
    onChange={(e) => handleChange(e, _callbackFunc)}
  />
);
```
