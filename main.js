// Define all html ids
// First Div
const hourlyRate = document.getElementById("hourlyRate");
const hoursPerWeek = document.getElementById("hoursPerWeek");
const accomodationCost = document.getElementById("accomodationCost");
const foodCost = document.getElementById("foodCost");
const miscCost = document.getElementById("miscCost");
// Second Div
const earningsPerMonth = document.getElementById("earningsPerMonth");
const earningsPerYear = document.getElementById("earningsPerYear");
const expensePerMonth = document.getElementById("expensePerMonth");
const savingsPerMonth = document.getElementById("savingsPerMonth");
const savingsPerYear = document.getElementById("savingsPerYear");

// Eventlistners

const btnClick = document.getElementById("calcBtn");
btnClick.addEventListener("click", () => {
  earningsPerMonth.value = hourlyRate.value * hoursPerWeek.value * 4;
  earningsPerYear.value = earningsPerMonth.value * 12;
  expensePerMonth.value = +accomodationCost.value + +foodCost.value + +miscCost.value;
  savingsPerMonth.value = earningsPerMonth.value - expensePerMonth.value;
  savingsPerYear.value = savingsPerMonth.value * 12;
});
