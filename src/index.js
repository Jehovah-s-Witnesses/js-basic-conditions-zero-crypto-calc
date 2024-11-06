const currency = {
  Bitcoin: 66988.57,
  Ethereum: 2489.74,
  TON: 4.98,
  USDT: 1,
};
let exchangeMoney;
let money;
let result;
const errorMessage = 'You entered an incorrect value!';
const currencyToExchange = prompt(
  'What amount of money do you want to exchange(Bitcoin, Ethereum, TON)?',
);

if (
  currencyToExchange === 'Bitcoin' ||
  currencyToExchange === 'Ethereum' ||
  currencyToExchange === 'TON') {
  const targetCurrency = prompt(
    'In what currency(Bitcoin, Ethereum, TON)?',
  );

  if (
    targetCurrency === 'Bitcoin' ||
    targetCurrency === 'Ethereum' ||
    targetCurrency === 'TON') {
    const amountCurrency = +prompt(
      'How much currency do you want to exchange?',
    );

    if (!isNaN(amountCurrency)) {
      money = currency[currencyToExchange];
      exchangeMoney = money * amountCurrency;
      result = exchangeMoney / currency[targetCurrency];
      alert(
        `The amount in the selected currency is ${result} ${targetCurrency}.`,
      );
    } else {
      alert(errorMessage);
    }
  } else {
    alert(errorMessage);
  }
} else {
  alert(errorMessage);
}
