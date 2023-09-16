export const ListGroup = () => {
    const items = ["Brasil", "Canadá", "EUA"];

    return (
        <>
            <h1>List</h1>

            {items.length === 0 ? <p>No intem found</p> : null}
            <ul>
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </>
    )
}
