import React, {useState} from 'react'

const AddData = ({pFun}) => {
    const [newState,setNewState] = useState('')
    
     const handleChange = (e) =>{
    
        setNewState({
          [e.target.id]:e.target.value
        })
      }
    
      const handleSubmit = (e) => {
          e.preventDefault(); 
          pFun(newState)
        
        }
    
      
    
      
        return(
          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" onChange={handleChange}/>
              <label htmlFor="age">Age</label>
              <input type="text" id="age" onChange={handleChange}/>
              <button>submit</button>
    
            </form>
          </div>
        )
      
}


export default AddData