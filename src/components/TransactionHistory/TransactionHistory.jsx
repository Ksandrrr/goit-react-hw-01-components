import PropTypes from 'prop-types';
import Style from './TransactionHistory.module.css';
import CreatTransaction from './TransactionItem/TransactionItem';
const TransactionHistory = ({ items }) => {
  const elmTransaction = items.map(item => (
    <CreatTransaction key={item.id} {...item} />
  ));
  return (
    <table className={Style['transaction-history']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={Style.tabelItem}>{elmTransaction}</tbody>
    </table>
  );
};
TransactionHistory.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
export default TransactionHistory;
