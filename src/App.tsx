import "./styles.css";
import Child from "./Child";
import { useCallback, useState, useMemo } from "react";

/* 
  useCallback is used to prevent rerendering in child component
*/

/*
  useMemo is similar to useCallback only difference is it caches value of 
  the callback function instead of the function itself
*/

const values = ["Notepad", "child", "parent", "count", "app", "sandbox"];

export default function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  //if you remove this useMemo child component will re-render
  const filteredValues = useMemo(
    () => values.filter((_, index) => index % 2 == 0),
    []
  );

  //if you remove this useCallback here child component will rerender
  const incrementByThrice = useCallback(() => {
    setCount((prev) => prev * 30000);
  }, []);

  return (
    <div className="App">
      <h2>{`Count: ${count}`}</h2>
      <button onClick={increment}>Click</button>
      <Child onClick={incrementByThrice} values={filteredValues} />
    </div>
  );
}
