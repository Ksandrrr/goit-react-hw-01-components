import PropTypes from 'prop-types';
import Style from './FriendList.module.css';
import ListItem from './FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  const elmFriend = friends.map(friend => (
    <ListItem key={friend.id} {...friend} />
  ));
  return <ul className={Style['friend-list']}>{elmFriend}</ul>;
};

FriendList.protoType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default FriendList;
