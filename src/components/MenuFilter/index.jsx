import "./style.css";

const MenuFilter = ({ setListRender }) => {
  return (
    <div className="ContainerMenuFilter">
      <div>
        <p className="P-ResumoFinanceiro">Resumo financeiro</p>
      </div>
      <div className="ContainerButtons">
        <button onClick={() => setListRender("")}>Todos</button>
        <button className="btnFilter" onClick={() => setListRender("Entradas")}>
          Entradas
        </button>
        <button className="btnFilter" onClick={() => setListRender("Despesas")}>
          Despesas
        </button>
      </div>
    </div>
  );
};

export default MenuFilter;
