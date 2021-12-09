import PropTypes from "prop-types";

const StatisticsItem = ({ itemText, value }) => {
  return (
    <li>
      <p>
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
