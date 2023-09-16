import { MouseEvent } from "react";

export const MessageList = () => {
    const items = ["Brasil", "Canadá", "EUA"];

    const handleClick = (event: MouseEvent) => console.log(event);

    return (
        <>
            <h1>List</h1>

            {items.length === 0 ? <p>No intem found</p> : null}
            <ul>
                {items.map((item) => (
                    <li
                        key={item}
                        onClick={handleClick}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    )
}