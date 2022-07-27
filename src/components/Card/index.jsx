import { FaTrash } from "react-icons/fa";
import "./style.css";
const Card = ({ transaction, listTransactions, setListTransactions }) => {
  function deleteCard(description) {
    return setListTransactions(
      listTransactions.filter((elem) => elem.description !== description)
    );
  }

  return transaction.type === "Entradas" ? (
    <div className="CardEntrada">
      <div className="divDescriptionType">
        <h3>{transaction.description}</h3>
        <p className="PCard">{transaction.type}</p>
      </div>
      <div className="ContainerValueButton">
        <div>
          <p className="PCard">R$ {transaction.value},00</p>
        </div>
        <div>
          <button
            className="btnCard"
            onClick={() => deleteCard(transaction.description)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="CardSaída">
      <div className="divDescriptionType">
        <h3>{transaction.description}</h3>
        <p className="PCard">{transaction.type}</p>
      </div>
      <div className="ContainerValueButton">
        <div>
          <p className="PCard">R$ {transaction.value},00</p>
        </div>
        <div>
          <button
            className="btnCard"
            onClick={() => deleteCard(transaction.description)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
