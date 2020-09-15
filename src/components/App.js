import  React, { Component } from "react";

class App extends Component {
    constructor(props){
        super(props);

    }

    render(){
        return (
          <h1>This is a react {this.props.name}</h1>
        );
    }
}

export default App;