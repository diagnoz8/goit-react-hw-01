import FriendListItem from "./FriendListItem";
export default function FriendList({ friends }) {
  return (
    <ul>
	{ friends.map((friend) => {
    return (
      <li>
		<FriendListItem props = {friend}/>
      </li>
    )
  })}
</ul>
  );
};