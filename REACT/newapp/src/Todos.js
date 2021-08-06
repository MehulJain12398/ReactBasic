import React from 'react';

const Todos = ({todos, markComplete, editTitle}) => {

    const showData = todos.map((todo,index) => {
        return(
            <div className="todo">
        <p style={{textDecoration : todo.isCompleted ? "line-through" : ""}}>
            <input type={"checkbox"} onChange={() => markComplete(index)} name={"completed"} id={todo.id}/>{' '}
            {todo.text}
        </p>
    </div>
        )
    })

    return(
        <div className="list-array">

            {showData}

        </div>
    
)
    // return (
    //     <div className={"todo-list"}>
    //             {
    //                 todos.map((todo, index) => (
                        
                     
    //                     <Todo todo={todo} key={index} index={index} markComplete={markComplete} editTitle={editTitle}/>
    //                 ))
    //             }
    //     </div>
    // );
};



export default Todos;
