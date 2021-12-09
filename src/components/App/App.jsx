import { Component } from "react";
import Section from "../Section/Section";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (nameState) => {
    return this.setState((prevState) => ({
      [nameState]: prevState[nameState] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { state, countTotalFeedback } = this;
    return (state.good * 100) / countTotalFeedback();
  };

  render() {
    const {
      state,
      addFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const { good, neutral, bad } = this.state;
    const total = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions options={state} onLeaveFeedback={addFeedback} />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        ></Statistics>
      </Section>
    );
  }
}

export default App;
