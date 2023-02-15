import PropTypes from 'prop-types';
import "./TransactionHistory.css"
import CreatTransaction from "./TransactionRender/TransactionRender"
const TransactionHistory = ({ items }) => {
    const elmTransaction = items.map(item => 
    <CreatTransaction key={item.id} {...item}/>
        )
    return (
        <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
    <tbody className="tabelItem">
        {elmTransaction}
  </tbody>
</table>
    )
}
TransactionHistory.protoType = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        avatar: PropTypes.string,
        name: PropTypes.string

    }))
}
export default TransactionHistory