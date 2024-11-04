const amountMoney = +prompt(
  'What amount of money in USD do you want to exchange?',
);
const selectedCurrency = prompt(
  'In what currency(Bitcoin, Ethereum, TON, USDT)?',
);
const targetExchange = prompt('What is the purpose of the exchange?');
const currency = {
  Bitcoin: 66988.57,
  Ethereum: 2489.74,
  TON: 4.98,
  USDT: 1,
};
let money;
let result;

if (
  !isNaN(amountMoney) &&
  (selectedCurrency === 'Bitcoin' ||
    selectedCurrency === 'Ethereum' ||
    selectedCurrency === 'TON' ||
    selectedCurrency === 'USDT') &&
  targetExchange === 'Crypto'
) {
  money = currency[selectedCurrency];
  result = money * amountMoney;
  alert(`The amount in the selected currency is ${result}$.`);
} else {
  alert('You entered an incorrect value!');
}
