const isObject = data => typeof data === "object" && data !== null;
// Ensures that data is an object and not null.
//Why? Because typeof null returns "object", which could lead to errors.
export const RecursiveComponent = ({ data }) => {
    if (!isObject(data)) { //stoping condition of the recursion
        return <li>{data}</li>
    }
    const pairs = Object.entries(data); //return an array that contains key value pair of data object
    // Object.entries(data) returns an array of key-value pairs.
    // sirf first wwale hi array me h nested wale sb object me aaye h
    // [key,value], [key,value{nested object}]] for the first recursion 
    // fir se jb console.log call hua to nested object bhi key value pair me aagya
    // fir third recursion me aur uske andar wala nested be key value pair me aa gya
    console.log(pairs);

    return (
        <>
            {pairs.map(([key, value]) => {
                return (
                    <li >{key} :
                        <ul>
                            <RecursiveComponent data={value} />
                        </ul>
                    </li>
                )
            })}
        </>
    )

} 