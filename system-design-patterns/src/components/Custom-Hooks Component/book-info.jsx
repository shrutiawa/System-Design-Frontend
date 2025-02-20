import { useResource } from "./resource-hook";

export const BookInfo =({bookId}) =>{
    const book = useResource(`/books/${bookId}`);
    const {name, price,pages,title} = book || {};
    return(
        <>
        <h1>{name}</h1>
        <p>Pages: {pages}</p>
        <p>Title: {title}</p>
        <h2>Price: {price}</h2>
        </>
    )
}