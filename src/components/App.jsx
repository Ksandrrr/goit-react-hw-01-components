import Profile from './ProfileFolder/Profile';
import Statistics from './StatisticsFolder/Statistics';
import FriendList from './FriendListFolder/FriendList';
import TransactionHistory from './TransactionHistoryFolder/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions';
export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </>
  );
};
