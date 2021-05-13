export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'KSH',
    minimumFractionDigits: 1,
  };

  // check if its a clean dollar amount
  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }

  const formatter = Intl.NumberFormat('en-US', options);

  return formatter.format(amount / 100);
}
