
const listItem = ({ ...friend }) => {
    return <li className="item">
          <span name={friend.id} className={friend.isOnline ? "status" : "statusFalse"}></span>
      <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
      <p className="name">{friend.name}</p>
    </li>
}
export default listItem