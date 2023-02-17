import PropTypes from 'prop-types';

const TransactionItem = ({ ...item }) => {
  return (
    <tr>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  );
};
TransactionItem.protoType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};
export default TransactionItem;
