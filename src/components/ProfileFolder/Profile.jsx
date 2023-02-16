import PropTypes from 'prop-types';
import Style from './ProfileStyle.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={Style.profile}>
      <div className={Style.description}>
        <img src={avatar} alt="User avatar" className={Style.avatar} />
        <p className={Style.name}>{username}</p>
        <p className={Style.tag}>@{tag}</p>
        <p className={Style.location}>{location}</p>
      </div>

      <ul className={Style.stats}>
        <li>
          <span className={Style.label}>Followers</span>
          <span className={Style.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={Style.label}>Views</span>
          <span className={Style.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className="Style.label">Likes</span>
          <span className={Style.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
