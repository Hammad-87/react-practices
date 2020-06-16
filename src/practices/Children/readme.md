#React.Children
React.Children provides utilities for dealing with the this.props.children opaque data structure.

React.Children.map
```
React.Children.map(children, function[(thisArg)])

```
Invokes a function on every immediate child contained within children with this set to thisArg. If children is an array it will be traversed and the function will be called for each child in the array. If children is null or undefined, this method will return null or undefined rather than an array.

[Source](https://reactjs.org/docs/react-api.html)