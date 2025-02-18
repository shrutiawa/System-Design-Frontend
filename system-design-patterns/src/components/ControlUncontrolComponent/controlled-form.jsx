import { useEffect, useState } from "react"

export const ControlledForm =() =>{
    const [name,setName] = useState("");
    const [age,setAge] = useState("");
    const [error, setError] = useState("");

    useEffect(()=>{
        if(name.length<3){
            setError("Name cannot be empty")
            console.log("name cannot be empty")
        }
        else{
            setError("");
        }

    },[name]);
    return<>
    <form>
        {error ? <p>{error}</p> : " "}
        <input type="text" value={name} name="name" placeholder="Name" onChange={(e)=>{setName(e.target.value)}} />
        <input type="number" value={age} name="age" placeholder="Age" onChange={(e)=>{setAge(e.target.value)}}/>
        <button >Submit</button>
    </form>
    </>
}