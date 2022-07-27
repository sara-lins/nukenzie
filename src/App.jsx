import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import MenuFilter from "./components/MenuFilter";
import TotalMoney from "./components/TotalMoney";
import Logo1 from "./components/imgs/nukenzieWhite.png";
import Logo2 from "./components/imgs/nukenzie.png";
import PicHomePage from "./components/imgs/image.svg";
import { RiHome2Fill } from "react-icons/ri";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [listRender, setListRender] = useState("");
  const [changeWindown, setChangeWindown] = useState(false);

  return changeWindown ? (
    <div className="App">
      <header>
        <img src={Logo2} alt="Logo Kenzie" />
        <div className="tooltip"></div>
        <button onClick={() => setChangeWindown(false)}>
          <RiHome2Fill />{" "}
          <span className="tooltiptext">Voltar para a Home</span>
        </button>
      </header>
      <main>
        <div>
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <div className="ContainerSecundário">
          <MenuFilter setListRender={setListRender} />
          {listRender === "" ? (
            <List
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          ) : listRender === "Entradas" ? (
            <List
              listTransactions={listTransactions.filter(
                (transactions) => transactions.type === "Entradas"
              )}
              setListTransactions={setListTransactions}
            />
          ) : (
            <List
              listTransactions={listTransactions.filter(
                (transactions) => transactions.type === "Despesas"
              )}
              setListTransactions={setListTransactions}
            />
          )}
        </div>
      </main>
    </div>
  ) : (
    <div className="App">
      <div className="MainHomePage">
        <div className="ContainerHomePage">
          <div className="ContainerInfoPages">
            <img src={Logo1} alt="Logo Kenzie" />
            <h1>Centralize o controle das suas finanças</h1>
            <p>De forma rápida e segura</p>
            <button onClick={() => setChangeWindown(true)}>Iniciar</button>
          </div>
          <div className="ContainerInfoPagesImg">
            <img src={PicHomePage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
