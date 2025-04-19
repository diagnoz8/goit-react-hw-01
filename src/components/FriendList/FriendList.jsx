import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
import clsx from "clsx";
export default function FriendList({ friends }) {
  return (
    <ul className={clsx(css.friendsContainer)}>
	{ friends.map((friend) => {
    return (
      <li key={friend.id}>
		<FriendListItem props = {friend}/>
      </li>
    )
  })}
</ul>
  );
};