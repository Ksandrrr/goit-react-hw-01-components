import PropTypes from 'prop-types';
import getRandomHexColor from '../../../utils/randomColor';
import Style from '../Statistics.module.css';
const StatisticsItem = ({ ...stats }) => {
  return (
    <li className={Style.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={Style.label}>{stats.label}</span>
      <span className={Style.percentage}>{stats.percentage}%</span>
    </li>
  );
};

StatisticsItem.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};

export default StatisticsItem;
