let money = prompt("your budget for the month?");
console.log(money);
let time = prompt("Enter the date in the format YYYY-MM-DD");
console.log(time); 
 let AppData = {
          budget: money,
          timeData: time,
          expenses: {},
          optionalExpenses: {},
          income: [],
          savings: false

 }
 let a1 = prompt("Enter an expense");
  let a2 = prompt("How much is?");   
  let a3 = prompt("Enter an expense");
  let a4 = prompt("How much is?");   

  AppData.expenses.a1 = a2;
  AppData.expenses.a3 = a4;

  alert(AppData.budget/30);
  