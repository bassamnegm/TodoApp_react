import React, { useState } from "react";
import './style.css'
const Todo = () => {
    const [input, setinput] = useState({
        name: ""
    })
    const [task, settask] = useState([
        {  
        title:"problem",
        clas:""
        },
        
        {
            title:"java",
            clas:""
        }])
    const change = (e) => {
        if (e.target.name === "text") {
            setinput({
                ...input,
                name: e.target.value,
            });
        }
    }
    const add = () => {
        if (input.name.length == 0) {
            alert("enter title")
        }
        else {
            console.log(input.name)
            settask(
                task=>[
                    ...task,{
                  title:input.name,
                   clas:""
                    }
                   
                ]
            )

        }

    }
    const delet=(val)=>
    {
        settask(task.filter(item => item !== val));
    }
    const check=(e,val)=>
    {
        const ind=task.findIndex(item=>item==val);
        if(task[ind].clas==='')
        {
            task[ind].clas='checked';
            settask([...task]);

        }

     
    }
    console.log(task)
    return (
        <>
            <div  className="header">
                <h2>My To Do List</h2>
                <input type="text" placeholder="Title..."
                    value={input.name}
                    name="text"
                    onChange={change} />
                <span onClick={add} className="addBtn">Add</span>
            </div>

            <ul>

                {task.map((value, index) => {
                    return <li className={value.clas} name={index}onClick={(e)=>check(e,value)} key={index}>{value.title}<span onClick={()=>delet(value)} className="close">x</span></li>
                })}

            </ul>
        </>
    )

}
export default Todo;