import { actions } from './actions';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: []
};

function reducer(state = initialState, action) {
  switch (action.type) {

    case actions.GET_BOOKS: // TODO to implement the logic
      return {
        ...state,
        books: [...action.payload],
        originalData: [...action.payload]
      };

    case actions.ADD_TO_CART: // TODO to implement the logic
      return {
        ...state,
        bookSelected: [action.payload, ...state.bookSelected]
      };

    case actions.ADD_ITEM: // TODO to implement the logic
      return { 
        ...state,
        bookSelected: [...state.bookSelected].map(book => book.id == action.payload ? { ...book, quantity: ++book.quantity }: book )
      };

    case actions.REMOVE_ITEM: // TODO to implement the logic
      return { 
        ...state,
        bookSelected: state.bookSelected.filter(book => book.id !== action.payload ) };

    case actions.SEARCH_ITEM: // TODO to implement the logic
      const value = action.payload.toLowerCase();
      return { 
        ...state,
        books: [...state.originalData].filter(book => (
          book.name.toLowerCase().includes(value) ||
            book.author.toLowerCase().includes(value) ||
            book.year == action.payload ||
            book.summary.toLowerCase().includes(value))
        )
      };

    default:
      return state;
  }
}

export default reducer;
