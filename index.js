const redux = require('redux');
const legacy_createStore = redux.legacy_createStore; // Use legacy_createStore instead of createStore

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
function orderCake() {
  return {
    type: CAKE_ORDERED,
    quantity: 1,
  };
}

function restoreCake(qty = 1) {
  return {
    type: CAKE_RESTOCKED,
    payLoad: qty,
  };
}

const initialState = {
  numOfCakes: 10,
  anotherProperty: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    case CAKE_RESTOCKED:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payLoad,
      };
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

console.log('Initial State:', store.getState());

store.dispatch(restoreCake(3));
console.log('Updated State:', store.getState());
