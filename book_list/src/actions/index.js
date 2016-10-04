export function selectBook(book) {
  // selectBook is an ActionCreator, it needs to return an action,
  // an object with a type property.

  // I need to understand what this payload means
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}

// An action usually has two properties, a type and a payload,
// The payload further describe the condidtions of the action that's being trigger
// Every action must have a type that describes the porpose of that action

// Payload is a piece of data that describs the actions that's being undertaken
