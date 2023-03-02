import { createStore } from "redux";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

const store = createStore(reducer);

// subscribe is a method provided by the store. If there are no changes/updates to state, subscribe does nothing otherwise it will log the new state
store.subscribe(() => {
  console.log("current state", store.getState());
});

// Change the store by dispatching actions
store.dispatch({
  type: "INCREMENT",
  payload: 1
});

store.dispatch({
  type: "INCREMENT",
  payload: 5
});

store.dispatch({
  type: "DECREMENT",
  payload: 2
});