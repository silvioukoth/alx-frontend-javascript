function getCurrentYear() {
  const date = newDate();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  budget[`income-${getCurrentYear()}`] = incoome;
  budget[`gdp-${getCurrentYear()}`] = gdp;
  budet[`capita-${getCurrentYear()}`] = capita;

  return budget;
}
