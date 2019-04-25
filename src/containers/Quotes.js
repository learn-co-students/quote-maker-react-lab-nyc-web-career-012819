import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {
  render() {
    const quoteCards = this.props.quotes.map(
      quote => <QuoteCard 
        quote={quote} 
        removeQuote={this.props.removeQuote} 
        upvoteQuote={this.props.upvoteQuote}
        downvoteQuote={this.props.downvoteQuote}
      />
    );

    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {quoteCards}
              {this.props.quotes.length > 0 ? this.props.quotes[0].votes : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { quotes: state.quotes };
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeQuote: (id) => {
      dispatch(removeQuote(id));
    },
    upvoteQuote: (id) => {
      dispatch(upvoteQuote(id));
    },
    downvoteQuote: (id) => {
      dispatch(downvoteQuote(id));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
