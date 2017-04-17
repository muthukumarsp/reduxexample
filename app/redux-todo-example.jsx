var redux = require('redux');
var stateDefault = {
    searchText: "",
     showCompleted:false,
      tods:[]
};

var reducer = ( state =stateDefault, action) => {
    return state;
};


var reduxStore = redux.createStore(reducer);
var currentState = reduxStore.getState();

console.log('currentState', currentState);
