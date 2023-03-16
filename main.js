const menu = [  ["Coffee", "$3.00"],
  ["Latte", "$4.00"],
  ["Espresso", "$2.50"],
  ["Tea", "$2.50"],
  ["Pastry", "$2.00"],
  ["Sandwich", "$5.00"]
];

function averageCost(menu) {
  let sum = 0;
  for (let i = 0; i < menu.length; i++) {
    sum += parseFloat(menu[i][1].replace("$", ""));
  }
  return (sum / menu.length).toFixed(2);
}

function maxCost(menu) {
  let max = 0;
  for (let i = 0; i < menu.length; i++) {
    let cost = parseFloat(menu[i][1].replace("$", ""));
    if (cost > max) {
      max = cost;
    }
  }
  return max.toFixed(2);
}

function minCost(menu) {
  let min = Infinity;
  for (let i = 0; i < menu.length; i++) {
    let cost = parseFloat(menu[i][1].replace("$", ""));
    if (cost < min) {
      min = cost;
    }
  }
  return min.toFixed(2);
}

const button = document.querySelector('button');
button.addEventListener('click', function() {
  const average = averageCost(menu);
  const max = maxCost(menu);
  const min = minCost(menu);
  const menuStats = `Average cost of products: $${average}\nMaximum cost: $${max}\nMinimum cost: $${min}`;
  const resultElement = document.getElementById('menu-stats');
  resultElement.textContent = menuStats;
});



const client1 = {
    name: "John",
    arrivedDate: "2022-02-01",
    bill: 1000.50
  };
  
  const client2 = {
    name: "Mary",
    arrivedDate: "2022-01-15",
    bill: 750.00
  };
  
  const client3 = {
    name: "David",
    arrivedDate: "2022-03-10",
    bill: 1250.75
  };
  
  const client4 = {
    name: "Sarah",
    arrivedDate: "2022-02-28",
    bill: 500.25
  };
  
  const client5 = {
    name: "Alex",
    arrivedDate: "2022-01-20",
    bill: 1500.00
  };
  
  // Combine client objects into array
  const clients = [client1, client2, client3, client4, client5];
  let totalIncome = 0;
for (let i = 0; i < clients.length; i++) {
  totalIncome += clients[i].bill;
}

// Find most valuable client
let mostValuableClient = clients[0];
for (let i = 1; i < clients.length; i++) {
  if (clients[i].bill > mostValuableClient.bill) {
    mostValuableClient = clients[i];
  }
}

// Display results in HTML
const resultElement = document.getElementById("result");
resultElement.innerHTML = `Total income: $${totalIncome.toFixed(2)}<br>Most valuable client: ${mostValuableClient.name} ($${mostValuableClient.bill.toFixed(2)})`;