function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const creatStatisticsElm = ({...stats}) => {
return <li className="item" style={{ backgroundColor: getRandomHexColor()}} >
      <span className="label2">{stats.label}</span>
      <span className="percentage">{stats.percentage}%</span>
    </li>
}
export default creatStatisticsElm