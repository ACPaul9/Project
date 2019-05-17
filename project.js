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
 };
   
            for(let i = 0; i < 2; i++)
            {
                let a = prompt("Enter an expense");
                let b = prompt("How much is?");  
                if ((typeof(a)) === 'string' && (typeof(b)) === 'string' && (typeof(a)) != null && (typeof(b)) != null 
                && a != '' && b != '' && a.length < 50 && a.length < 50 && b.length < 50) 
                   {
                      console.log ("done");
                      AppData.expenses[a] = b;
                   } else {
                    i = i - 1;
                   }
            }
    alert(AppData.budget/30);