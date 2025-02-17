export const SmallAuthorListItem = ({ author }) => {
    const { name, age } = author
    return (
        <>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
        </>
    )
}