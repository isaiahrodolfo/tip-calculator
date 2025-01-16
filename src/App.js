import { useState } from "react";
// import './App.css';

function App() {
  const [billInitialCost, setbillInitialCost] = useState(100);
  const [howMuchYouEnjoyed, setHowMuchYouEnjoyed] = useState(20); // as percentage of tip
  const [howMuchFriendEnjoyed, setHowMuchFriendEnjoyed] = useState(20);

  const tip = roundToNearestCent(
    parseFloat(billInitialCost) *
    ((parseFloat(howMuchYouEnjoyed) + parseFloat(howMuchFriendEnjoyed)) / 2 / 100)
  );

  function roundToNearestCent(number) {
    return Math.round(number * 100) / 100;
  }

  return (
    <>
      <p>How much did you pay?</p>
      <input value={billInitialCost} onChange={e => setbillInitialCost(e.target.value)}></input>
      <ServiceEnjoyment howMuchEnjoyed={howMuchYouEnjoyed} setHowMuchEnjoyed={setHowMuchYouEnjoyed}>you</ServiceEnjoyment>
      <ServiceEnjoyment howMuchEnjoyed={howMuchFriendEnjoyed} setHowMuchEnjoyed={setHowMuchFriendEnjoyed}>you</ServiceEnjoyment>
      <h3>You pay ${Number(billInitialCost) + tip} (${billInitialCost} + ${tip})</h3>
      <button
        onClick={() => {
          setbillInitialCost(100);
          setHowMuchYouEnjoyed(20);
          setHowMuchFriendEnjoyed(20);
        }}
      >Reset</button>
    </>
  );
}

function ServiceEnjoyment({ howMuchEnjoyed, setHowMuchEnjoyed, children }) {
  return (
    <>
      <p>How much did {children} enjoy?</p>
      <select value={howMuchEnjoyed} onChange={e => setHowMuchEnjoyed(e.target.value)}>
        <option value="10">It was good (10%)</option>
        <option value="15">I really liked it (15%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </>
  );
}

export default App;
