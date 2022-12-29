import { Fragment, useContext } from "react";
import { InputTextContext } from "./context/input-text-context";
import "./to-do-list.css";
import SingleList from "./single-list";
export const ToDoList = () => {
  const { inputTextArray, setInputTextArray } = useContext(InputTextContext);
  // console.log(inputTextArray);
  return (
    <div className="list-container">
      {inputTextArray.map((each) => (
        <SingleList list={each} key={each.id} />
      ))}
    </div>
  );
};
export default ToDoList;
