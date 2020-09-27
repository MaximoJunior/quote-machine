import React, { Component } from "react";
import "../styles/wrapper.css";

const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

class Wrapper extends Component {
    constructor(props){
        super(props);

        this.state = {
           color: '#16a085'
        }

        this.newQuote =  this.newQuote.bind(this);
    }

    newQuote(){
        console.log(this.quotes);
        let quote = getRandomItem(this.quotes);
        this.props.changesQuote(quote); 
        this.newColor();
    }

    newColor(){
        const color = getRandomItem(colors);
        this.setState({
            color: color
        });
    }

    async componentDidMount(){
        const URL = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
         let response = await fetch(URL);
         response = await response.json();
         response = await response.quotes;
         //Store quotes from call to web service
         this.quotes = response;
         let quote = getRandomItem(response);
         this.props.changesQuote(quote);
    }

    render(){
        const quote = this.props.quote.quote;
        const author = this.props.quote.author;
        const style = {
            color: this.state.color
        }
        return (
          <div id="quote-box">
              <h1 id="text" style={style}>{quote}</h1>
              <p id="author">{author}</p>
            <div className="container-options">
                 <a id="tweet-quote" href={`twitter.com/intent/tweet`} target="_blank">Twitter</a>
                 <NewQuoteButton onClick={this.newQuote} color={this.state.color}/>
            </div>   
          </div>
        );
    }
}

function NewQuoteButton (props){
    return (
       <button 
             onClick={props.onClick} 
             id="new-quote"
             className="new-quote-btn"
             style={{backgroundColor: props.color}}>
             New
       </button>
    );
}

function getRandomItem(array){
    let length =  array.length;
    let index = Math.floor(Math.random() * length);
    return array[index];
}

export default Wrapper;

