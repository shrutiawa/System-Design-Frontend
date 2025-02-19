export const logProps = (Component) =>{
return (props) => { //this props is the original props coming with the component
    console.log(props) 
    return <Component {...props}/>
}
}