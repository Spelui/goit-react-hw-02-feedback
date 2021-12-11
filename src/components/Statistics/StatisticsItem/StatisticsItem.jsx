import PropTypes from "prop-types";
import s from "./StatisticsItem.module.scss";

const StatisticsItem = ({ itemText, value }) => {
  return (
    <li className="s.item">
      <p className={s.text}>
        {itemText}: <span>{value}</span>
      </p>
    </li>
  );
};

StatisticsItem.propTypes = {
  itemText: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default StatisticsItem;
