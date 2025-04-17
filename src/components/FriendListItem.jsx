export default function FriendListItem({props}) {
    const { avatar, name, isOnline } = props;
    const friendAvW = 48;
    return (
        <div>
            <img src={avatar} alt="Avatar" width={friendAvW} />
            <p>{name}</p>
            <p>{isOnline ? "Online" : "Offline"}</p>
        </div>
    )
    
}