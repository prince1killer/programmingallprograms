import React, { useState } from 'react';

function LoanCalculator() {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMonthlyPayment = () => {
    const monthlyInterestRate = interestRate / 1200;
    const numPayments = loanTerm * 12;
    const monthlyPayment =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numPayments)) /
      (Math.pow(1 + monthlyInterestRate, numPayments) - 1);
    setMonthlyPayment(monthlyPayment.toFixed(2));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    calculateMonthlyPayment();
  };

  return (
    <div>
      <h2>Loan Calculator</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Loan Amount:
          <input
            type="number"
            value={principal}
            onChange={(event) => setPrincipal(event.target.value)}
          />
        </label>
        <br />
        <label>
          Interest Rate:
          <input
            type="number"
            value={interestRate}
            onChange={(event) => setInterestRate(event.target.value)}
          />
        </label>
        <br />
        <label>
          Loan Term (years):
          <input
            type="number"
            value={loanTerm}
            onChange={(event) => setLoanTerm(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Calculate</button>
      </form>
      {monthlyPayment && (
        <p>Monthly Payment: ${monthlyPayment}</p>
      )}
    </div>
  );
}

export default LoanCalculator;
