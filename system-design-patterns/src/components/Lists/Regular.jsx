export const RegularList = ({ items, sourceName, ItemComponent }) => {
    return (
        <>
            {items.map((item, i) =>{
                console.log(item) //object inside the array
                return <ItemComponent key={i} {...{[sourceName]: item}}/>
                // {...{[sourceName]: item}} each object ko author me daal dega 
                // sourceName is the dynamic prop name such as author or books
                // {...{ author: item }}
            }
            )}
        </>
    )
}
