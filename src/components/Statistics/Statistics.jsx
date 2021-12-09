import PropTypes from "prop-types";
import StatisticsItem from "./StatisticsItem/StatisticsItem";
import Notification from "../Notification/Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <h2>Statistics</h2>
      {!total ? (
        <Notification />
      ) : (
        <ul>
          <StatisticsItem itemText="Good" value={good} />
          <StatisticsItem itemText="Neutral" value={neutral} />
          <StatisticsItem itemText="Bad" value={bad} />
          <StatisticsItem itemText="Total" value={total} />
          <StatisticsItem
            itemText="Positiv feedback"
            value={
              positivePercentage
                ? Math.round(positivePercentage) + "%"
                : 0 + "%"
            }
          />
        </ul>
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
