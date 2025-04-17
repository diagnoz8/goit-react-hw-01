// import clsx from "clsx";
// import css from "../components/App.module.css"
import Profile from "./Profile";
import userData from "../userData.json"
import FriendList from "./FriendList";
import friends from "../userFriends.json"
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
      <>
      <FriendList friends={friends} />
    </>
    </>
  );
}