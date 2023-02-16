import Style from '../FriendList.module.css';
const listItem = ({ ...friend }) => {
  return (
    <li className={Style.item}>
      <span
        name={friend.id}
        className={friend.isOnline ? Style.status : Style.statusFalse}
      ></span>
      <img
        className={Style.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={Style.name}>{friend.name}</p>
    </li>
  );
};
export default listItem;
