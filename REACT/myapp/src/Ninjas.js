import React from 'react'

const Ninjas = ({nested, delId}) => {
    
    const nestedData = nested.map((x) => {
        return(
            <div className="first" key={x.id}>
                <div>name : { x.name }</div>
                <div>age : { x.age }</div>
                <button onClick={() => {delId(x.id)}}>delete data</button>
            </div>
        )
    }
    )

        
        
        return(
                <div className="list-array">

                    {nestedData}

                </div>
            
        )
}

export default Ninjas
