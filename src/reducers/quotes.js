export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      let newQuotes = state.filter(quote => quote.id !== action.quoteId)
      return [...newQuotes]
    case 'UPVOTE_QUOTE':
      let allQuotes = state.filter(quote => quote.id !== action.quoteId)
      let quote = state.find(quote => quote.id === action.quoteId)
      quote.votes += 1
      return [...allQuotes, quote]
    case 'DOWNVOTE_QUOTE':
      let otherQuotes = state.filter(quote => quote.id !== action.quoteId)
      let downQuote = state.find(quote => quote.id === action.quoteId)
      if (downQuote.votes > 0) {
        downQuote.votes -= 1
      }
      return [...otherQuotes, downQuote]
    default:
      return state;
  }

}
