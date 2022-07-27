import "./style.css";
const TotalMoney = ({ listTransactions }) => {
  function total() {
    const valueTotal = !listTransactions.length
      ? "0"
      : listTransactions
          .map((transaction) => transaction.value)
          .reduce((accumulator, currentValue) => accumulator + currentValue)
          .toString();

    let changeValue = "";
    if (valueTotal.length >= 4) {
      for (let i = 0; i < valueTotal.length; i++) {
        if (i === 0 && valueTotal[0] !== "-") {
          changeValue += `${valueTotal[i]}.`;
        } else {
          changeValue += valueTotal[i];
        }
      }
    } else {
      changeValue = valueTotal;
    }

    return !listTransactions.length ? "0,00" : `${changeValue},00`;
  }

  return (
    <div className="ContainerPrecoTotal">
      <div>
        <p className="TituloValorTotal">Valor total:</p>
        <p>O valor se refere ao saldo</p>
      </div>
      <div>
        <p className="Total">R$ {total()}</p>
      </div>
    </div>
  );
};

export default TotalMoney;
