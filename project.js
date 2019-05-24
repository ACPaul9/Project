let money, time;
function start(){
   money = prompt("your budget for the month?");
   time = prompt("Enter the date in the format YYYY-MM-DD");
   
   while(isNaN(money) || money == null || money == ""){
      money = prompt("your budget for the month?");
   }
}
 start();
 let AppData = {
          budget: money,
          timeData: time,
          expenses: {},
          optionalExpenses: {},
          income: [],
          savings: true,
          chooseExpenses: function(){
            for(let i = 0; i < 2; i++)
            {
                let a = prompt("Введите обязательные расходы");
                let b = prompt("How much is?");  
                if ((typeof(a)) === 'string'  && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) 
                   {
                      console.log ("done");
                      AppData.expenses[a] = b;
                   } else {
                    i = i - 1;
                   }
            }
         },
         detectDayBudget:function ()
         {
            AppData.moneyPerDay = AppData.budget/30;
            alert(AppData.moneyPerDay);
         },
         detectLevel:function(){
            if (AppData.moneyPerDay < 100)
            console.log("Минимальный уровень достатка");
          else if (AppData.moneyPerDay > 100 && AppData.moneyPerDay < 2000)
             console.log("Cредний уровень достатка");
         else if (AppData.moneyPerDay > 2000)
            console.log("Высокий уровень достатка");
            else console.log ("error")
         },
         chooseOptExpenses: function(){
            for(let i = 0; i < 2; i++)
         {
            let opt = prompt("Необязательные расходы?");
            AppData.optionExpenses[i] = opt;
         
         }
         }
 }; 
      

    
     /*let arr = [1,3,3,4,5];
      arr [10] = 15;
      console.log (arr);
      for (let i = 0; i < arr.length; i++)
      {
         console.log(arr[i]);

      }*/