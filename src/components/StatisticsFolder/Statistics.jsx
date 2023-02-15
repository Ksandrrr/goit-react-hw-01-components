import PropTypes from 'prop-types';
import "./Statistics.css"
import CreatStatisticsElm from "./StatisticsRender/StatisticsRender";

const Statistics = ({ title, stats }) => {
  const elm = stats.map(stats => 
    <CreatStatisticsElm  key={stats.id} {...stats}  />
  );
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">{elm}</ul>
    </section>
  );
};
Statistics.propTypes = {
    title: PropTypes.string ,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number
    }))
    
}
export default Statistics;
