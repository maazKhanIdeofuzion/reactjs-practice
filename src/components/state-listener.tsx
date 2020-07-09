import * as React from "react";

interface Iprops {
  value: number;
  setMultipleByTwo: Function;
}
const StateListener: React.FunctionComponent<Iprops> = (props) => {
  const multipleByTwoOnClick = () => {
    props.setMultipleByTwo();
  };
  return (
    <div>
      <h1>State Listener Component</h1>
      <p>
        Increment: <span>{props.value}</span>
      </p>
      <button className="button-class" onClick={multipleByTwoOnClick}>
        MultipleByTwo
      </button>
    </div>
  );
};
StateListener.defaultProps = {};
export default StateListener;
