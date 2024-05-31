const monthlySavings = (earnings, cost) => {
  if (Array.isArray(earnings)) {
    earningsAfterTax = earnings.map((earn) => {
      if (earn >= 3000) {
        return earn - (20 * earn) / 100;
      } else {
        return earn;
      }
    });
    const totalIncome = earningsAfterTax.reduce(
      (earn, total) => earn + total,
      0
    );
    if (totalIncome - cost < 0) return "Earn More";
    else return totalIncome - cost;
  } else {
    return "Invalid Input!";
  }
};

const payments = 4;
// const payments = [1000, 2000, 2500];
const livingCost = 50000;
const result = monthlySavings(payments, livingCost);
console.log(result);
