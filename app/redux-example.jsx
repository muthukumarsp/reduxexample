var redux = require('redux');

var reducer = ( state ={name: "ananymouse"}, action) => {
    return state;
};


var reduxStore = redux.createStore(reducer);
var currentState = reduxStore.getState();

console.log('currentState', currentState);
