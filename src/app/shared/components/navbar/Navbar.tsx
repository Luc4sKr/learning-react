import { Link } from "react-router-dom";

import style from "./Navbar.module.css";
import Avatar from "../avatar/Avatar";

export const Navbar = () => {
    return (
        <header className={style.headerTop}>
            <nav className={style.navbar}>
                <ul>
                    <li>
                        <Link to={"/"} className={style.link}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/lessons"} className={style.link}>Lessons</Link>
                    </li>
                </ul>
                <div className={style.avatarContainer}>
                    <Avatar 
                        avatar={{
                            name: "Teste",
                            url: "/images/avatar.jpg"
                        }}
                        size={40}
                    />
                </div>
            </nav>
        </header>
    )
}