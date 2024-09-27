import { useEffect } from "react";

type onClickType = () => void;

interface ChildProps {
  onClick: onClickType;
  values: string[];
}

const Child: React.FC<ChildProps> = ({ onClick, values }) => {
  useEffect(() => {
    console.log("rerender");
  }, [onClick]);

  useEffect(() => {
    console.log("rerender values");
  }, [values]);

  return (
    <div>
      <p>Child</p>
      <button onClick={onClick}>Thrice</button>
      <h3>List of items</h3>
      {values.map((value, index) => {
        return <p key={index}>{` ${value}`}</p>;
      })}
    </div>
  );
};

export default Child;
