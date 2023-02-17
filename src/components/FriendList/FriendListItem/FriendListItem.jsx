import Style from '../FriendList.module.css';
import PropTypes from 'prop-types';
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
listItem.protoType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
export default listItem;
