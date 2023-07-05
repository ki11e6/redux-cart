// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// items
import cartItems from './cart-items';
// redux stuff

//store -stores data, think of state
//reducer -function that used to update store
//two arguments -state, action
//state - old state/state before update
//action -what happened/ what update
//return updated or old state

import { createStore } from 'redux';
//dispatch method -send actions to the store
//actions (object) - must have type property -what kind of action
//Don't mutate the state -redux built on immutability (copy)
//store.getState()

//initial store
const initialStore = {
  count: 0,
  name: 'sharath',
};
//reducer
function reducer(state, action) {
  console.log({ state, action });
  if (action.type === 'DECREASE') {
    console.log('decreasing...');
    return { ...state, count: state.count - 1 };
  } else if (action.type === 'INCREASE') {
    console.log('increasing...');
    return { ...state, count: state.count + 1 };
  } else if (action.type === 'RESET') {
    console.log('increasing...');
    return { ...state, count: 0 };
  }
  if (action.type === 'CHANGE_NAME') {
    return { ...state, name: 'Anna' };
  }
  return state;
}

const store = createStore(reducer, initialStore);

store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'DECREASE' });
store.dispatch({ type: 'DECREASE' });
store.dispatch({ type: 'RESET' });
store.dispatch({ type: 'CHANGE_NAME' });
store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'INCREASE' });

console.log(store.getState());

function App() {
  // cart setup

  return (
    <main>
      <Navbar cart={store.getState()} />
      <CartContainer cart={cartItems} />
    </main>
  );
}

export default App;
