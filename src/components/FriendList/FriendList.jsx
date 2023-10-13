import PropTypes from "prop-types";
import css from '../FriendList/FriendList.module.css';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendlist}>
            {friends.map(({ id, name, isOnline, avatar }) => (
                <FriendListItem
                    key={id}
                    name={name}
                    isOnline={isOnline}
                    avatar={avatar}
                />
            ))}
        </ul>
    );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ).isRequired,
};