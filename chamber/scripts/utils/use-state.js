export function useState(initialState) {
  let state = initialState;

  function getState() {
    return state;
  }

  function setState(newState, onStateChange) {
    state = newState;
    if (typeof onStateChange === 'function') {
      onStateChange(state);
    }
  }

  return [getState, setState];
}
