import PropTypes from 'prop-types';
import "./FriendList.css"
import ListItem from "./FriendListRender/FriendListRender"
const FriendList = ({ friends }) => {
  const elmFriend = friends.map(friend => (
    <ListItem key={friend.id} {...friend}  />
  ));
    return <ul className="friend-list">
      {elmFriend}
  </ul>;
};
FriendList.protoType = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        avatar: PropTypes.string,
        name: PropTypes.string

    }))
}
export default FriendList;
