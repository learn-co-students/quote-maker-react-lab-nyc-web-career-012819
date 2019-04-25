export default function quoteReducer(state = [], action) {
  let i, newState;

  switch (action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote];
    case 'REMOVE_QUOTE':
      i = state.findIndex(quote => quote.id === action.id);
      return [...state.slice(0, i), ...state.slice(i + 1)];
    case 'UPVOTE_QUOTE':
      newState = [...state];
      newState.find(quote => quote.id === action.id).votes += 1;
      return newState;
    case 'DOWNVOTE_QUOTE':
      newState = [...state];
      newState.find(quote => quote.id === action.id).votes -= 1;
      return newState;
    default:
      return state;
  }
}
