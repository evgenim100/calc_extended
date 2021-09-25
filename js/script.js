'use strict';

let  startBtn = document.getElementById('start');

let incomePlus = document.getElementsByTagName('button')[0];
let expensesPlus = document.getElementsByTagName('button')[1];

let depositCheck = document.querySelector('#deposit-check');

let additionalIncomeItem = document.querySelectorAll('.additional_income-item');



let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let additionalTncomeValue = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodValue = document.getElementsByClassName('income_period-value')[0];
let targetMonthValue = document.getElementsByClassName('target_month-value')[0];


let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelectorAll('.income-title')[1];
// let incomeAmount = document.querySelector('.income-amount');
let additionalIncome1 = document.querySelectorAll('.additional_income-item')[0];
let additionalIncome2 = document.querySelectorAll('.additional_income-item')[1];
let expensesTitle = document.querySelectorAll('.expenses-title')[1];
let expensesItems = document.querySelectorAll('.expenses-items');
// let expensesAmount = document.querySelector('.expenses-amount');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');
let incomeItems = document.querySelectorAll('.income-items');

let periodAmount = document.querySelector('.period-amount');

// let money;


let isNumber = function(n){
  return !isNaN(parseFloat(n)) && isFinite(n)
};

let appData = {
  budget: 0,
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  addExpences: [],
  deposit: false,
  personDeposit: 0,
  moneyDeposit: 0,
 // mission: 50000,
 // period: 3,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,

  salaryAmountCheck: function(){  
  if (salaryAmount.value === ''){
    startBtn.disabled = true; 
    return;
  }
  else {
    startBtn.disabled = false;
    return; 
  };
  },

  start: function(){
  // do{
  //   money = prompt('Ваш месячный доход?', '100000');
  // }
  // while (!isNumber(money));

  // if (salaryAmount.value === ''){
  //   startBtn.disabled = true; 
  //   return;
  // }
  // else {
  //   startBtn.disabled = false; 
  // };
    appData.budget = +salaryAmount.value;
    appData.getExpenses();
    appData.getIncome();
    appData.getExpensesMonth();
    appData.getAddExpenses();
    appData.getAddIncome();
    appData.getBudget();
    appData.showResult();
  //// appData.asking();
  //// appData.budget = money;
  //// appData.getStatusIncome();
  },

  incomePeriodValueChange:function(){
    incomePeriodValue.value = appData.calcPeriod();
  },

  showResult: function (){
    budgetDayValue.value = appData.budgetDay;
    budgetMonthValue.value = appData.budgetMonth;
    expensesMonthValue.value = appData.expensesMonth;
    additionalExpensesValue.value = appData.addExpences.join(', ');
    additionalTncomeValue.value = appData.addIncome.join(', ');
    targetMonthValue.value = appData.getTargetMonth();
    incomePeriodValue.value = appData.calcPeriod();

    periodSelect.addEventListener('input', appData.incomePeriodValueChange);
  },

  

  addExpensesBlock: function (){
    // let expensesItems = document.querySelectorAll('.expenses-items');
    // console.log(expensesItem.parentNode);
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3){
      expensesPlus.style.display = 'none';
    };
  },
  
  addIncomeBlock: function (){
    // let expensesItems = document.querySelectorAll('.expenses-items');
    // console.log(expensesItem.parentNode);
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3){
      incomePlus.style.display = 'none';
    };
  },

  getExpenses: function (){
    expensesItems.forEach(function(item){
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;
    if (itemExpenses !== '' && cashExpenses !== '') {
      appData.expenses[itemExpenses] = cashExpenses;
    };
    });
  },

  getIncome: function (){
    incomeItems.forEach(function(item){
    let itemIncome = item.querySelector('.income-title').value;
    let cashIncome = item.querySelector('.income-amount').value;
    if (itemIncome !== '' && cashIncome !== '') {
      appData.income[itemIncome] = cashIncome;
    };
    });
    
    

    // if(confirm('Есть ли у вас дополнительный источник заработка?')){
    //    do{
    //       itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
    //     }
    //     while (isNumber(itemIncome));

    //    do{
    //       cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', '10000');
    //     }
    //     while (!isNumber(cashIncome));
      
    //   appData.income[itemIncome] = cashIncome;
    // };

    for (let key in appData.income){
      appData.incomeMonth += +appData.income[key];
    };
  },

  getAddExpenses: function (){
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
      item = item.trim();
      if (item !==''){
        appData.addExpences.push(item);
      }
    });
  },

  getAddIncome: function(){
    additionalIncomeItem.forEach(function(item){
      let itemValue = item.value.trim();
      if (itemValue !== ''){
        appData.addIncome.push(itemValue);
      }
    });
  },

  // asking: function (){

  //   if(confirm('Есть ли у вас дополнительный источник заработка?')){
  //      do{
  //         itemIncome = prompt('Какой у вас дополнительный заработок?', 'Таксую');
  //       }
  //       while (isNumber(itemIncome));

  //      do{
  //         cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', '10000');
  //       }
  //       while (!isNumber(cashIncome));
      
  //     appData.income[itemIncome] = cashIncome;
  //   }
    

  //   let keyForSum;
  //   let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'sEx, dRUGs, kaZantip'); 
  //   appData.addExpenses = addExpenses.toLowerCase().split(', ');
  //   console.log('appData.addExpenses: ', appData.addExpenses);
  //   for (let i = 0; i < appData.addExpenses.length; i++){
  //   appData.addExpenses[i] = appData.addExpenses[i][0].toUpperCase() + appData.addExpenses[i].substr(1);
  //   };
  //   console.log('appData.addExpenses.join(): ', appData.addExpenses.join(', '));

  //   appData.deposit = confirm('Есть ли у вас депозит в банке?');
  //   let sum = 0;
  // //   for (let i=0; i<2; i++){
  // //     do{
  // //         keyForSum = prompt('Введите обязательную статью расходов?', 'Квартплата');
  // //       }
  // //       while (isNumber(keyForSum));
  // //     do {
  // //     appData.expenses[keyForSum] = prompt('Во сколько это обойдется?');    
  // //     if (isNumber(appData.expenses[keyForSum])) {
  // //       sum += +appData.expenses[keyForSum];
  // //     }
  // //     else {
  // //       alert("Это не число");
  // //     };
  // //     }
  // //     while (!isNumber(appData.expenses[keyForSum]));
  // // }
  // // console.log(sum);
  // return(sum);
  
  // },

  getExpensesMonth: function(){
    let sum = 0;
    for (let prop in appData.expenses) {
    sum += +appData.expenses[prop];
  }
    appData.expensesMonth = sum;
    return(sum);
  },

  getBudget: function(){
    appData.budgetMonth = appData.budget + appData.incomeMonth - appData.getExpensesMonth();
    appData.budgetDay = Math.floor(appData.budgetMonth/30);
  
    
    return appData.budget - appData.budgetMonth;
  }, 

  getTargetMonth: function(){
    return Math.ceil(targetAmount.value/appData.budgetMonth);
  },
  
  getStatusIncome: function(){
  if (appData.budgetDay >= 1200){
    console.log('У вас высокий уровень дохода');
  } else if (600 <= appData.budgetDay) {
      console.log('У вас средний уровень дохода');
  } else if (0 <= appData.budgetDay) {
      console.log('К сожалению у вас уровень дохода ниже среднего');
  } else {
    console.log('Что-то пошло не так');
  }
  }, 

  calcPeriod: function(){
    return appData.budgetMonth * periodSelect.value;
  },

  getInfoDeposit: function(){
    if (appData.deposit) {
       do{
          appData.percentDeposit = prompt('Какой годовой процент?', '10');
        }
        while (!isNumber(appData.percentDeposit));

      do{
          appData.moneyDeposit = prompt('Какая сумма депозита?', '10000');
        }
        while (!isNumber(appData.moneyDeposit));
    };
  }, 

  periodChange: function(){
    periodAmount.textContent = periodSelect.value;
  }

};

startBtn.addEventListener('click', appData.start);

expensesPlus.addEventListener('click', appData.addExpensesBlock);

incomePlus.addEventListener('click', appData.addIncomeBlock);

periodSelect.addEventListener('input', appData.periodChange);

startBtn.disabled = true;

salaryAmount.addEventListener('input', appData.salaryAmountCheck);

//// console.log('Расходы за месяц: ', appData.getExpensesMonth()); 

// let periodToAim = appData.getTargetMonth();

// if (periodToAim < 0) console.log('Цель не будет достигнута')
//   else {
//   console.log('Цель будет достигнута за ' + periodToAim + ' месяцев');
//   };

// console.log('Цель будет достигнута за ' + Math.ceil(appData.mission/appData.budgetMonth) + ' месяцев');




// console.log('Наша программа включает в себя данные:' );
// for (let key in appData) {
//   console.log('Свойство: ' + key + ' Значение: ' + appData[key]);
   
// };


