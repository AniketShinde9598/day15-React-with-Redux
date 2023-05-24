import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "./redux/accountSlice";

function App() {
  return (
    <div>
      <DepositAccount />
      <hr />
      <WithdrawlAccount />
    </div>
  );
}

function DepositAccount() {
  // State is global here
  let { account } = useSelector((state) => state);
  let dispatch = useDispatch();

  let depositHandler = () => {
    dispatch(deposit());
  };

  return (
    <div>
      <h1>Account: Aniket Shinde</h1>
      <h1>Balance: {account.balance}</h1>
      <input
        className="btn btn-success"
        type="button"
        value="Deposit"
        onClick={depositHandler}
      />
    </div>
  );
}

function WithdrawlAccount() {
  // State is global here
  let { account } = useSelector((state) => state);
  let dispatch = useDispatch();

  let withdrawHandler = () => {
    dispatch(withdraw());
  };

  return (
    <div>
      <h1>Account: Aniket Shinde</h1>
      <h1>Balance: {account.balance}</h1>
      <input
        className="btn btn-primary"
        type="button"
        value="Withdraw"
        onClick={withdrawHandler}
      />
    </div>
  );
}

export default App;
