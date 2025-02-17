export const SmallBookListItem = ({ book }) => {
    console.log("book",book)
    const { name, price } = book
    return (
        <>
            <p>Name : {name}</p>
            <p>Price : {price}</p>
        </>
    )
}