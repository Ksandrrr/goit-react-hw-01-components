import PropTypes from 'prop-types';
import Style from './Statistics.module.css';
import CreatStatisticsElm from './StatisticsRender/StatisticsRender';

const Statistics = ({ stats }) => {
  const elm = stats.map(stats => (
    <CreatStatisticsElm key={stats.id} {...stats} />
  ));
  return (
    <section className={Style.statistics}>
      <h2 className={Style.title}>Upload stats</h2>
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
