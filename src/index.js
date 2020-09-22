import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/container.css";

class Container extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="container">
              <App/>
            </div>
        );
       
    }
}


ReactDOM.render(<Container />, document.getElementById("root"));


