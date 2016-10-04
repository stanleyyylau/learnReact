
// This function provided by redux does what its name suggest
import { combineReducers } from 'redux';

// Import book and active book reducers and combine them into application state
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';


// The keys here will become global application state
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;


// Look, BooksReducer is responsible for the value of books
// ActiveBook is responsible for the value of activeBook
