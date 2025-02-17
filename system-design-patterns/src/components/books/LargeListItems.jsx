export const LargeBookListItem = ({ book }) => {
    const { name, price, title, pages} = book
    return (
        <>
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Title: {title}</p>
            <p>Pages: {pages}</p>
            {/* <h2>Books:</h2>
            {
                books.map((book)=>{
                    <li key={book}>{book}</li>
                })
            } */}
        </>
    )
}