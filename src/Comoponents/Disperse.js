import React, { useState, useEffect } from "react";
import "../Comoponents/Disperse.css";

const Disperse = () => {
  const [inputText, setInputText] = useState([]);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [amounts, setAmounts] = useState([]);

  useEffect(() => {
    let duplicate = [];
    for (let i = 0; i < addresses.length; i++) {
      for (let j = i + 1; j < addresses.length; j++) {
        if (addresses[i] === addresses[j]) {
          setIsError(true);
          let dup = `Address ${addresses[i]} Encountered Duplicate at Line: ${
            i + 1
          }, ${j + 1}   `;
          duplicate.push(dup);
        }
      }
    }
    if (duplicate.length > 0) {
      setError(duplicate);
    }
  }, [addresses]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let lines;
    if (inputText.includes(",")) {
      lines = inputText.trim().split(",");
    }
    if (inputText.includes(",")) {
      lines = inputText.trim().split("=");
    } else {
      lines = inputText.trim().split("\n");
    }

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

      newAddresses.push(`${address}`);
      newAmounts.push(parseFloat(amount));
    });

    if (newError) {
      setError(newError);
    } else {
      setError("");
      setIsError(false);
      setAddresses(newAddresses);
      setAmounts(newAmounts);
    }
  };

  const keepFirstOne = () => {
    setError(null);
    setIsError(false);
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
    setError(null);
    setIsError(false);
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

        {isError && isError !== null && (
          <div className="outer">
            <p className="">Duplicated</p>
            <div className="btn_one">
              <button onClick={keepFirstOne} className="btn">
                Keep the First One
              </button>
              <hr />
              <button onClick={combineBalances} className="btn">
                Combine Balances
              </button>
            </div>
          </div>
        )}
        {error && (
          <p id="error">
            {"ⓘ"}
            <div style={{ textAlign: "center", margin: "auto" }}>{error}</div>
          </p>
        )}
        {!error && error !== null && <p id="success">SUCCESS ✅</p>}

        {!error && inputText.length > 0 && (
          <div>
            <ol>
              {addresses.map((address, index) => (
                <li key={index}>
                  {address}: {amounts[index]}
                </li>
              ))}
            </ol>
          </div>
        )}
        <div>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
};

export default Disperse;

        
      

  

    
