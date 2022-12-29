import "./App.css";
import { useContext } from "react";
import ToDoList from "./to-do-list";
import { InputTextContext } from "./context/input-text-context";
import { createList } from "./create-list";

function App() {
  // === fetching state data=====//
  const {
    inputTextArray,
    setInputTextArray,
    btnState,
    setBtnState,
    editListItem,
    setEditListItem,
  } = useContext(InputTextContext);

  const addToList = () => {
    // ==== if btnstate is false add new data===//
    console.log(btnState);
    if (btnState === false) {
      const input = document.querySelector(".input");
      const inputText = input.value;
      const list = createList(inputText);
      inputText
        ? setInputTextArray([...inputTextArray, list])
        : alert("please enter valid text");
      input.value = "";
    } else {
      // ====if btnState is true edit existing list ====//
      console.log("hello");
      console.log(editListItem);
      console.log(btnState);
      const input = document.querySelector(".input");
      const inputText = input.value;
      inputText?
      inputTextArray.forEach((list) => {
        if (list.id === editListItem.id) {
          list.text = inputText;
        }
      }): alert('please enter valid text')
      setInputTextArray([...inputTextArray]);
      setBtnState(!btnState);
      input.value = "";
    }
  };

  return (
    <div className="to-do-app">
      <h1 className="heading"> To Do List </h1>
      <input
        type="text"
        name="text"
        required
        className="input"
        placeholder=" to do "
      />
      <label>
        <button className="btn" onClick={addToList}>
          Add
        </button>
      </label>
      <ToDoList />
    </div>
  );
}

export default App;
