export const NumberedList = ({ items, sourceName, ItemComponent }) => {
    return (
        <>
            {items.map((item, i) => {
                return <>
                    <h3>{i + 1}</h3>
                    <ItemComponent key={i} {...{ [sourceName]: item }} />
                </>
            }
            )}
        </>
    )
}
