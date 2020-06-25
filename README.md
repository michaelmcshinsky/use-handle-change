# use-handle-change

A `handleChange` function/hook you don't need for object states in react.

If you actually use this, I honestly want to know why this benefited you. So please, message me.

## Ridiculous Example

```javascript
import React from 'react';
import useHandleChange from 'use-handle-change';

const DEFAULT_FORM_OBJECT = {
  name: '',
  email: '',
  password: '',
};

const ReactForm = () => {
  const [state, handleChange] = useHandleChange(DEFAULT_FORM_OBJECT);

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
          type="text"
          name="email"
          value={state.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <div>
          <label htmlFor="inputPassword">Password</label>
        </div>
        <input
          id="inputPassword"
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
```
