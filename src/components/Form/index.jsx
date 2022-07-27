import { useState } from "react";
import "./style.css";
const Form = ({ listTransactions, setListTransactions }) => {
  const [inputDescription, setInputDescription] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("");

  function changeFirstLetter(string) {
    let newString = "";
    for (let i = 0; i < string.length; i++) {
      if (i === 0) {
        newString += string[i].toUpperCase();
      } else {
        newString += string[i];
      }
    }
    return newString;
  }

  function setState(e) {
    e.preventDefault();
    !listTransactions.length
      ? inputType === "Despesas"
        ? setListTransactions([
            {
              description: changeFirstLetter(inputDescription),
              type: inputType,
              value: -parseInt(inputValue, 10),
            },
          ])
        : setListTransactions([
            {
              description: changeFirstLetter(inputDescription),
              type: inputType,
              value: parseInt(inputValue, 10),
            },
          ])
      : inputType === "Despesas"
      ? setListTransactions([
          ...listTransactions,
          {
            description: changeFirstLetter(inputDescription),
            type: inputType,
            value: -parseInt(inputValue, 10),
          },
        ])
      : setListTransactions([
          ...listTransactions,
          {
            description: changeFirstLetter(inputDescription),
            type: inputType,
            value: parseInt(inputValue, 10),
          },
        ]);

    setInputDescription("");
    setInputType("");
    setInputValue("");
  }

  return (
    <form className="ContainerForm" onSubmit={setState}>
      <div className="ContainerInputs">
        <label>Descrição</label>
        <input
          type="text"
          placeholder="Digite aqui sua descrição"
          value={inputDescription}
          onChange={(e) => setInputDescription(() => e.target.value)}
        />
        <p>Ex: Compra de roupas</p>
        <div className="ContainerValor">
          <div className="DivValor">
            <label>Valor</label>
            <input
              className="inputValor"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="R$"
            />
          </div>
          <div className="ContainerSelect">
            <label>Tipo de valor</label>
            <select onClick={(e) => setInputType(e.target.value)}>
              <option value="Entradas">Entradas</option>
              <option value="Despesas">Despesas</option>
            </select>
          </div>
        </div>
        <button type="submit">Inserir valor</button>
      </div>
    </form>
  );
};

export default Form;
