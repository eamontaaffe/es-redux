/**
 * Actions
 */

const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

function incrementCounter() {
  return {
    type: INCREMENT_COUNTER,
  }
}

function decrementCounter() {
  return {
    type: DECREMENT_COUNTER,
  }
}

/**
 * Store
 */

function createStore(preloadedState = []) {

  /**
   * The current state is an array rather than a object. We know that is must only
   * ever have events appended.
   */
  currentState = preloadedState;

  function getState() {
    return currentState;
  }

  /**
   * Append the event to the state, notify any subscribers of the event.
   * 
   * Also do some checking stuff like type
   */
  function dispatch(action) {

  }

  return {
    dispatch,
    getState,
  }
}


/**
 * Reducers
 */

function counter(state, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        counter: state.counter + 1,
      };
    case DECREMENT_COUNTER:
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}