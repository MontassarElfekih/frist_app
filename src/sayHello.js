import React, {Component}   from "react";

const sayHello=() =>{
    console.log('Hello Monta');
    counter++;
  }

  const counter=0;

class Hello extends Component{
  

  render() {
    return(
    <div className="">
      <h1>Hello React</h1>
      <button class="btn-primary" onClick={sayHello}> Hello B</button>
    </div>
  )
}
}


export default Hello;