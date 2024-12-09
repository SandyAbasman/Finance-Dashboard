//income data start

export const totalIncomeData = async function () {
  const res = await fetch("http://localhost:3000/totalIncomeData");
  return res.json();
};

export const fiatIncomeData = async function () {
  const res = await fetch("http://localhost:3000/fiatIncomeData");
  return res.json();
};

export const cryptoIncomeData = async function () {
  const res = await fetch("http://localhost:3000/cryptoIncomeData");
  return res.json();
};
//income data finish

// expenses data start
export const totalExpensesData = async function () {
  const res = await fetch("http://localhost:3000/totalExpensesData");
  return res.json();
};

export const fiatExpensesData = async function () {
  const res = await fetch("http://localhost:3000/fiatExpensesData");
  return res.json();
};

export const cryptoExpensesData = async function () {
  const res = await fetch("http://localhost:3000/cryptoExpensesData");
  return res.json();
};
//expenses data finish

// investment data start
export const totalInvestmentData = async function () {
  const res = await fetch("http://localhost:3000/totalInvestmentData");
  return res.json();
};

export const fiatInvestmentData = async function () {
  const res = await fetch("http://localhost:3000/fiatInvestmentData");
  return res.json();
};

export const cryptoInvestmentData = async function () {
  const res = await fetch("http://localhost:3000/cryptoInvestmentData");
  return res.json();
};

// investment data finish

export function calTotal(data) {
  const total = data.reduce((sum, current) => sum + Number(current.amount), 0);

  return total;
}
