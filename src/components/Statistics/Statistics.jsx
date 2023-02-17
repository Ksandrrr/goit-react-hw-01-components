import PropTypes from 'prop-types';
import Style from './Statistics.module.css';
import StatisticsItem from './StatisticsItem/StatisticsItem';

const Statistics = ({ stats, title}) => {
  const elm = stats.map(stats => (
    <StatisticsItem key={stats.id} {...stats} />
  ));
  return (
    <section className={Style.statistics}>
    {title && <h2 className={Style.title}>{title}</h2>}
      <ul className={Style['stat-list']}>{elm}</ul>
    </section>
  );
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
export default Statistics;
