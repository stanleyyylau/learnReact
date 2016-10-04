// State argument is not application state, only the state
// this reducer is responsible for


// So reducer is simply a function that returns an object

// So this reducer will receive an action, if that action
// is the type of action this reducer cares about,
// this reducer will do something with that action



// All reducers get two arguments, the current state and action
// Reducers is only gonna call when an action occur

export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }

  // If it's not the action type that this reducer cares about,
  // It will just return state = null
  return state;
}
