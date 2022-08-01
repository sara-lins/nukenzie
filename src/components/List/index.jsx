import "./style.css";
import Card from "../Card";
import RetanguloUm from "../imgs/rectangle60.png";
import RetanguloDois from "../imgs/rectangle61.png";
import { FaAngleDoubleRight } from "react-icons/fa";
const List = ({
  listTransactions,
  setListTransactions,
  totalValue,
  setTotalValue,
}) => {
  return listTransactions.length === undefined ||
    listTransactions.length === 0 ? (
    <ul>
      <hr className="hr" />
      <p>
        <FaAngleDoubleRight className="icon" /> Você ainda não possui
        lançamentos
      </p>
      <li>
        <div className="divCardInvisible">
          <img
            className="divCardInvisible__imgRetangulo--Um"
            src={RetanguloUm}
            alt="retangulo 1"
          />
          <img
            className="divCardInvisible__imgRetangulo--Dois"
            src={RetanguloDois}
            alt="retangulo 1"
          />
        </div>
      </li>
      <li>
        <div className="divCardInvisible">
          <img
            className="divCardInvisible__imgRetangulo--Um"
            src={RetanguloUm}
            alt="retangulo 1"
          />
          <img
            className="divCardInvisible__imgRetangulo--Dois"
            src={RetanguloDois}
            alt="retangulo 1"
          />
        </div>
      </li>
      <li>
        <div className="divCardInvisible">
          <img
            className="divCardInvisible__imgRetangulo--Um"
            src={RetanguloUm}
            alt="retangulo 1"
          />
          <img
            className="divCardInvisible__imgRetangulo--Dois"
            src={RetanguloDois}
            alt="retangulo 1"
          />
        </div>
      </li>
    </ul>
  ) : (
    <ul>
      {listTransactions.map((transaction, index) => (
        <li>
          <Card
            transaction={transaction}
            key={index}
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            totalValue={totalValue}
            setTotalValue={setTotalValue}
          />
        </li>
      ))}
    </ul>
  );
};

export default List;
