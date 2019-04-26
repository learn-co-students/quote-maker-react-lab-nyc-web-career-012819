export default function quoteReducer(state = [], action) {
  let index, newState;

  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];
    case 'REMOVE_QUOTE':
      index = state.findIndex(quote => quote.id === action.id);
      return [...state.slice(0, index), ...state.slice(index + 1)];
    case 'UPVOTE_QUOTE':
      // Method #1
      index = state.findIndex(quote => quote.id === action.id);
      return [
        ...state.slice(0, index - 1),
        Object.assign({}, state[index], { votes: state[index].votes + 1 }),
        ...state.slice(index + 1)
      ];
    case 'DOWNVOTE_QUOTE':
      // Method #2
      newState = state.map(quote => ({...quote}));
      newState.find(quote => quote.id === action.id).votes -= 1;
      return newState;
    default:
      return state;
  }
}

// Method #3:
// index = state.findIndex(quote => quote.id === action.id);
// newState = [...state];
// newState[index] = Object.assign({}, newState[index], { votes: state[index].votes - 1 });
// return newState;