import { useState } from "react";
const User=(props)=>{
    const {name,loc}=props;
    const [count,setcount]=useState(0);
    const [count2]=useState(1); //creating multiple state_var


    return (
        <div className="User">
            <button onClick={()=>{
                setcount(count+1);
            }}>Count +</button>
            <h1>Count : {count}</h1>
            <h1>Count2 : {count2}</h1>
            <h2>{name}</h2>
            <h3>{loc}</h3>
        </div>
    )
}

export default User;