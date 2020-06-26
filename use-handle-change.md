<a name="useHandleChange"></a>

## useHandleChange(initialState) ⇒ [<code>useHandleChange</code>](#useHandleChange)
React hook for managing state objects

**Kind**: global function  
**Returns**: [<code>useHandleChange</code>](#useHandleChange) - output  

| Param | Type | Description |
| --- | --- | --- |
| initialState | <code>Object</code> | The initial object to store form values |

<a name="useHandleChange"></a>

## useHandleChange : <code>function</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| storedState | <code>Object</code> | The current state of the form object |
| setState | [<code>setState</code>](#setState) | Function to pass event and config options to state |

<a name="setState"></a>

## setState : <code>function</code>
`setState` property of useHandleChange

**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>Object</code> | The event object from the DOM element (input) |
| config | <code>Object</code> | Middleware functions and keys for injecting actions throughout the state change lifecycle |

