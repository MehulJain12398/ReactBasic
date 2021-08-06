import React, { useState } from 'react'
import Ninjas from './Ninjas'
import AddData from './AddData'

function App(){

  
  // For Dynamic array data

  const [state , setState] = useState([
    {name:"Ninja",age:"22",id:"1"},
      {name:"Scorpion",age:"NIL",id:"2"},
      {name:"Hao",age:"20",id:"3"},
      {name:"XUAN",age:"92",id:"4"}
  ])

  // state = {
  //   dyna : [
      
  //   ]
  // }

  const propFun = (data) => {
    data.id = Math.random()
    let updatedData = [...state,data]
    setState({
      updatedData
    })
  }


  //now we also have to delete the data if we are inserting new ones in type text fields
  const dFeild = (id) =>{
    let deleteID = state.filter(y =>{
      return y.id !== id
    })
    setState({
      deleteID
    })
    
  }
 
    return(
      <div className="App">
      <h1>Hello there !!!!</h1>
      <Ninjas delId={dFeild} nested={state}/>
      <AddData pFun={propFun}/>
      {/* above nested class "Ninjas" can be dynamic , call this class again for multiple values to show  */}
        </div>
    )
  

  //closed
}


export default App;
