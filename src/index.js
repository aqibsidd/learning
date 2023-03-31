import React from 'react';
import ReactDom from 'react-dom';
// import './App';
import App from './App';
class Najeeb{
  
    gender = "male"

  gen = () =>{
    console.log(gender)
  }
}

class Aqib extends Najeeb{

    name = "Aqib"
  
  persion = ()=>{
    console.log(name)
  }
}
const a = new Aqib()
a.persion()
a.gen()

ReactDom.render(<App/>,document.getElementById('root'))