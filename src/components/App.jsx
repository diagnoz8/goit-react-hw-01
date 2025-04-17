// import clsx from "clsx";
// import css from "../components/App.module.css"

import Profile from "./Profile";
import FriendList from "./FriendList";
import TransactionHistory from "./TransactionHistory";

import friends from "../userFriends.json"
import transactions from "../transactions.json"
import userData from "../userData.json"

export default function App() {
  return (
     <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}