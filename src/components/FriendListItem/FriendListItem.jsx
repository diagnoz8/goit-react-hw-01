import css from "./FriendsListItem.module.css"
import clsx from "clsx";

export default function FriendListItem({ props }) {
    const { avatar, name, isOnline } = props;
    const friendAvW = 48;
    return (
        <div className= {clsx( css.friendCard )}>
            <img src={avatar} alt="Avatar" width={friendAvW} />
            <p>{name}</p>
            <p className={ clsx(isOnline  &&  css.isOnline , !isOnline &&  css.isNotOnline) }>{isOnline ? "Online" : "Offline"}</p>
        </div>
    )
    
}