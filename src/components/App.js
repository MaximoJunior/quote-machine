import  React, { Component } from "react";
import Wrapper from "./Wrapper";
import /*Redux, */{ createStore } from "redux";
import /*ReactRedux,*/ { Provider, connect } from "react-redux";


//Action to dispatch
const NEW_NOTE = "NEW_NOTE";

function quotesReducer(state = {}, action){
    switch(action.type){
       case NEW_NOTE:
              return action.newQuote;
       default: 
           return state;
    }
}

const changeQuote = quote=>({type: NEW_NOTE, newQuote: quote});

const store = createStore(quotesReducer);

function mapStateToProps(state){
    return {
        quote : state
    }
}

function mapDispatchToProps(dispatch){
    return {
        changesQuote:(quote)=>{
            dispatch(changeQuote(quote));
        }
    }
}


const Container = connect(mapStateToProps, mapDispatchToProps)(Wrapper);



class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
          <Provider store={store}>
             <Container/>
          </Provider>
        );
    }
}

export default App;