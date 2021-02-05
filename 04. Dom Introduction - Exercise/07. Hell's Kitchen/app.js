function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let inputText = document.querySelector('#inputs textarea').value;
      let inputArr = JSON.parse(inputText);

      let restaurants = parseRestaurants(inputArr);
      let bestRestaurant = getBestRestaurant(restaurants);
      let bestEmployees = bestRestaurant.employees;

      let bestRestaurantString = `Name: ${bestRestaurant.restaurantName} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.highestSalary.toFixed(2)}`;

      let employeeInfos = [];
      Object.keys(bestEmployees)
         .forEach(x => employeeInfos.push(`Name: ${bestEmployees[x].name} With Salary: ${bestEmployees[x].salary}`));

      let bestEmployeesString = employeeInfos.join(' ');

      document.querySelector('#bestRestaurant p').textContent = bestRestaurantString;
      document.querySelector('#workers p').textContent = bestEmployeesString;

      function parseRestaurants(inputArray) {
         let result = {};
         for (const input of inputArray) {
            let [restaurantName, employeesInfo] = input.split(' - ').filter(x => x !== '');
            let employeeTokens = employeesInfo.split(', ').filter(x => x !== '');

            let employees = [];

            for (const employeeToken of employeeTokens) {
               let [employeeName, employeeSalary] = employeeToken.split(' ').filter(x => x !== '');

               employees.push({
                  name: employeeName,
                  salary: Number(employeeSalary)
               });
            }

            if (!result.hasOwnProperty(restaurantName)) {
               result[restaurantName] = {
                  employees: employees,
                  averageSalary: 0,
                  highestSalary: 0
               };
            } else {
               result[restaurantName].employees = employees.concat(result[restaurantName].employees);
            }

            result[restaurantName].employees = result[restaurantName].employees.sort((e1, e2) => {
               return e2.salary - e1.salary
            });

            let salarySum = result[restaurantName].employees.reduce((acc, emp) => {
               acc += emp.salary;
               return acc;
            }, 0);

            result[restaurantName].averageSalary = salarySum / result[restaurantName].employees.length;
            result[restaurantName].highestSalary = result[restaurantName].employees[0].salary;
         }

         return result;
      }

      function getBestRestaurant(restaurants) {
         let keys = Object.keys(restaurants);

         let bestRestaurantKey = '';
         let biggestAverageSalary = 0;

         for (const key of keys) {
            if (restaurants[key].averageSalary > biggestAverageSalary) {
               biggestAverageSalary = restaurants[key].averageSalary;
               bestRestaurantKey = key;
            }
         }

         restaurants[bestRestaurantKey].restaurantName = bestRestaurantKey;
         return restaurants[bestRestaurantKey];
      }

   }
}