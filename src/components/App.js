import  React, { Component } from "react";
import Wrapper from "./Wrapper";
import /*Redux, */{ createStore } from "redux";
import /*ReactRedux,*/ { Provider, connect } from "react-redux";
import { QUOTES } from "../data/quotes";

const NEW_NOTE = "NEW_NOTE";

function getRandomItem(array){
    let length =  array.length;
    let randomIndex = Math.floor(Math.random() * length);
    return array[randomIndex];
}

function quotesReducer(state = {}, action){
    switch(action.type){
       case NEW_NOTE:
           console.log(QUOTES);
           return getRandomItem(QUOTES);
       default: 
           return state;
    }
}

const changeQuote = ()=>({type: NEW_NOTE});

const store = createStore(quotesReducer);

function mapStateToProps(state){
    return {
        quote : state
    }
}

function mapDispatchToProps(dispatch){
    return {
        changesQuote:()=>{
            dispatch(changeQuote())
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