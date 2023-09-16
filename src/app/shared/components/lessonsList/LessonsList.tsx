import { Link } from "react-router-dom";

export const LessonsList = () => {
    return (
        <ul>
            <li>
                <Link to="/lessons/messageList">001 - Message List</Link>
            </li>
        </ul>
    )
}