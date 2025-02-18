import React from "react";

export const UnControlledForm = () => {
    const nameInputRef =React.createRef();
    const ageInputRef =React.createRef();

    const submitHandler = (e) => {
        console.log("name",nameInputRef.current.value);
        console.log("age",ageInputRef.current.value);
        e.preventDefault();
    }
    return <>
        <form onSubmit={submitHandler}>
            <input name="name" placeholder="Name" type="text" ref={nameInputRef}/>
            <input name="age" placeholder="Age" type="number" ref={ageInputRef}/>
            <input type="submit" value="Submit" />
        </form>
    </>
}