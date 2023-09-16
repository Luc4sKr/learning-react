import { AvatarProps } from "../../models/props/avatarProps";

import "./style.css";

function Avatar({avatar, size}: AvatarProps) {
    return (
        <img 
        className="avatar"
        src={avatar.url}
        alt={avatar.name}
        width={size}
        height={size}
        />
    )
}

export default Avatar;