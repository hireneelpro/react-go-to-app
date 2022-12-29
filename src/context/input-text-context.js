import { children, createContext, useState } from "react";

export const InputTextContext = createContext({
  inputTextArray: [],
  setInputTextArray: () => { },
  editListItem: null,
  setEditListItem: () => { },
  btnState: false,
  setBtnState:()=>{}
  
});

export const InputTextProvider = ({ children }) => {
  const [inputTextArray, setInputTextArray] = useState([]);
  const [editListItem, setEditListItem] = useState(null)
  const [btnState,setBtnState]=useState(false)

  const value = {
    inputTextArray, setInputTextArray, editListItem, setEditListItem,btnState,setBtnState};
  return (
    <InputTextContext.Provider value={value}>
      {children}
    </InputTextContext.Provider>
  );
};
