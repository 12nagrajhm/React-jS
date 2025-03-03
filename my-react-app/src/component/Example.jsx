import React,{useState} from 'react'

function Example(){
    const[count,setCount]=useState(0);

    const incrementCount=()=>{
        setCount(count+1)
    };

    return(<div className="Example">
        <header className="Example-header">
            <h1>Welcome to react</h1>
            <p>you clicked{count}times</p>
            <button onClick={incrementCount}>Click Me</button>

        </header>
        
    </div>);
}


export default Example;