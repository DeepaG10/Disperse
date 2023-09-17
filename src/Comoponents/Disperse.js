import React, { useState } from "react";
import "../Comoponents/Disperse.css";

const Disperse = () => {
  const [inputText, setInputText] = useState("");
  const [error, setError] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [amounts, setAmounts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const lines = inputText.trim().split("\n");
    const newAddresses = [];
    const newAmounts = [];
    let newError = null;

    lines.forEach((line, index) => {
      const [address, amount] = line.trim().split(" ");

      if (!isValidAddress(address)) {
        newError = `Error on line ${index + 1}: Invalid address format`;
        return;
      }

      if (isNaN(amount)) {
        newError = `Error on line ${index + 1}: Invalid amount format`;
        return;
      }

      newAddresses.push(address);
      newAmounts.push(parseFloat(amount));
    });

    if (newError) {
      setError(newError);
    } else {
      setError(null);
      setAddresses(newAddresses);
      setAmounts(newAmounts);
    }
  };

  const keepFirstOne = () => {
    const uniqueAddresses = [];
    const uniqueAmounts = [];

    addresses.forEach((address, index) => {
      if (!uniqueAddresses.includes(address)) {
        uniqueAddresses.push(address);
        uniqueAmounts.push(amounts[index]);
      }
    });

    setAddresses(uniqueAddresses);
    setAmounts(uniqueAmounts);
  };

  const combineBalances = () => {
    const combinedBalances = {};

    addresses.forEach((address, index) => {
      if (combinedBalances[address]) {
        combinedBalances[address] += amounts[index];
      } else {
        combinedBalances[address] = amounts[index];
      }
    });

    const uniqueAddresses = Object.keys(combinedBalances);
    const uniqueAmounts = uniqueAddresses.map(
      (address) => combinedBalances[address]
    );

    setAddresses(uniqueAddresses);
    setAmounts(uniqueAmounts);
  };

  const isValidAddress = (address) => {
    // Replace this with your address validation logic (e.g., using a regular expression)
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  };

  return (
    <div>
      <h2>Disperse Component</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          id="textarea"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter addresses and amounts (e.g., 0x8B3392483BA26D65E331dB86D4F430E9B3814E5e 15)"
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {error && <p id="error">{error}</p>}
      <div>
        <button onClick={keepFirstOne}>Keep First Occurrence</button>
        <button onClick={combineBalances}>Combine Balances</button>
      </div>
      <h3>Address:</h3>
      <ul>
        {addresses.map((address, index) => (
          <li key={index}>
            {address}: {amounts[index]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Disperse;
