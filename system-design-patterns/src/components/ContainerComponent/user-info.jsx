export const UserInfo = ({ user }) => {
    const { name, age, country, books } = user;
    return user ? (
        <>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Country: {country}</p>
            <h2>Books</h2>
            <ul>
                {books.map((book) => {
                    return <li key={book}>{book}</li>
                })}

            </ul>
        </>)
        : (<h1>Loading...</h1>
        )


}