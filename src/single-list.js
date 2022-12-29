import { useContext } from "react";
import { InputTextContext } from "./context/input-text-context";
import "./single-list.css";
const SingleList = ({ list }) => {
  // console.log(list);
  const { text, color, id } = list;
  const {
    inputTextArray,
    setInputTextArray,
    setBtnState,
    btnState,
    setEditListItem,
    editListItem,
  } = useContext(InputTextContext);

  // ====== edit list item ======//
  const editList = () => {
    // console.log("hello");
    const input = document.querySelector(".input");
    input.value = text;
    setBtnState(!btnState);
    setEditListItem(list);
  };

  // ===== remove list item =====//
  const removeList = () => {
    setInputTextArray(inputTextArray.filter((list) => list.id !== id));
  };

  return (
    <div style={{ borderColor: color }} key={id} className="single-list">
      <span>{text} </span>
      <div className="icon-container">
        <i onClick={editList} className="fas fa-edit btn btn-edit"></i>
        <i onClick={removeList} className="fas fa-trash-alt btn btn-remove"></i>
      </div>
    </div>
  );
};

export default SingleList;
