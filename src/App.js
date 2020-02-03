import React, {Component} from 'react';
import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state={
      string:"hello friend!",
    }
  }


render(){
  return(
    <div className="App">
<p>{this.state.string}</p>
      <button onClick={()=>this.setState({string:"Hello Baha!"})}>Change text</button>
    </div>
  )
}


}

export default App;
