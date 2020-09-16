import React, { Component } from "react";


function NewQuoteButton (props){
    return (
       <button onClick={props.onClick} id="new-quote">New Quote</button>
    );
}

class Wrapper extends Component {
    constructor(props){
        super(props);

        this.newQuote =  this.newQuote.bind(this);
    }

    newQuote(){
        this.props.changesQuote();
         console.log(this.props.quote);
    }

    render(){
        return (
          <div id="quote-box">
              <h1 id="text">{this.props.quote.quote}</h1>
              <p id="author">{this.props.quote.author}</p>
            <div>
                 <a id="tweet-quote" href="twitter.com/intent/tweet">Twitter</a>
                 <NewQuoteButton onClick={this.newQuote}/>
            </div>   
          </div>
        );
    }
}

export default Wrapper;

