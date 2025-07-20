
document.getElementById('entryForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const date = document.getElementById('date').value;
    const description = document.getElementById('description').value;
    const income = parseFloat(document.getElementById('income').value) || 0;
    const expense = parseFloat(document.getElementById('expense').value) || 0;
    const balance = income - expense;

    const table = document.getElementById('recordTable').querySelector('tbody');
    const row = table.insertRow();
    row.innerHTML = `<td>${date}</td><td>${description}</td><td>${income}</td><td>${expense}</td><td>${balance}</td>`;

    updateReport(income, expense);
});

let totalIncome = 0;
let totalExpenses = 0;

function updateReport(income, expense) {
    totalIncome += income;
    totalExpenses += expense;
    const profit = totalIncome - totalExpenses;
    const profitDisplay = document.getElementById('netProfit');

    document.getElementById('totalIncome').textContent = totalIncome.toFixed(2);
    document.getElementById('totalExpenses').textContent = totalExpenses.toFixed(2);
    profitDisplay.textContent = profit.toFixed(2);

    profitDisplay.className = profit >= 0 ? 'profit' : 'loss';
}
