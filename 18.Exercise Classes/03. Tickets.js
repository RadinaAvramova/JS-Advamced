function solve(input, filterCriteria) {
 
    let tickets = [];
    input.forEach((line) => {
      [destination, price, status] = line.split("|");
      price = Number(price);
        tickets.push({ destination, price, status });
    });
    let sorted;
    if (filterCriteria === "destination") {
      sorted = tickets.sort((curr, next) =>
        curr.destination.localeCompare(next.destination)
      );
    } else if (filterCriteria === "price") {
      sorted = tickets.sort((curr, next) => curr.price - next.price);
    } else {
      sorted = tickets.sort((curr, next) =>
        curr.status.localeCompare(next.status)
      );
    }
    return sorted;
  }

  function solve(input, filterCriteria) {
    class Ticket {
      constructor(destination, price, status) {
        this.destination = destination;
        this.price = price;
        this.status = status;
      }
    }
    let tickets = [];
    input.forEach((line) => {
      [destination, price, status] = line.split("|");
      price = Number(price);
      tickets.push(new Ticket(destination, price, status));
    });
    let sorted;
    if (filterCriteria === "destination") {
      sorted = tickets.sort((curr, next) =>
        curr.destination.localeCompare(next.destination)
      );
    } else if (filterCriteria === "price") {
      sorted = tickets.sort((curr, next) => curr.price - next.price);
    } else {
      sorted = tickets.sort((curr, next) =>
        curr.status.localeCompare(next.status)
      );
    }
    return sorted;
  }

  function test(input, sort) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    let arr = [];
    for (const row of input) {
        let [destination, price, availability] = row.split('|');
        arr.push(new Ticket(destination, price, availability));
    }
    switch (sort) {
        case "destination":
            arr.sort(function(a, b) {
              if (a.destination < b.destination) {
                return -1;
              }
              if (a.destination > b.destination) {
                return 1;
              }
              return 0;}
            );
 
            break;
        case "price":
            arr.sort();
            break;
        case "status":
            arr.sort(function(a, b) {
              if (a.status < b.status) {
                return -1;
              }
              if (a.status > b.status) {
                return 1;
              }
              return 0;}
            );
 
            break;
        default:
            break;
    }
    return arr;
}

function solve(properties, criterion) {
    let result = [];
  
    class Ticket {
      constructor(destination, price, status) {
        this.destination = destination;
        this.price = Number(price);
        this.status = status;
      }
    }
  
    properties.forEach((line) => {
      let [destination, price, status] = line.split("|");
  
      let instance = new Ticket(destination, price, status);
  
      result.push(instance);
    });
  
    if (criterion == "destination") {
      result.sort((a, b) => {
        return Object.values(a)[0].localeCompare(Object.values(b)[0]);
      });
    } else if (criterion == "status") {
      result.sort((a, b) => {
        return Object.values(a)[2].localeCompare(Object.values(b)[2]);
      });
    } else {
      result.sort((a, b) => {
        return Object.values(a)[1] - Object.values(b)[1];
      });
    }
  
    return result;
  }

  function tickets(arr, str){
    let tickets = arr.map(e=>{
            let [destination,price,status] = e.split("|");
            price = Number(price);
            return {destination, price, status};
        }).sort((a,b)=>{
            if(str==="price"){
                return 0;
            }else{
                return a[str].localeCompare(b[str]);
            }
        });
    return tickets;
}

function tickets(input = [], criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
 
    let result = [];
    for (const line of input) {
        let [city, price, status] = line.split('|');
        let data = new Ticket(city, price, status);
        result.push(data);
    }
 
    switch (criteria) {
        case 'destination':
            result.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            result.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            result.sort((a, b) => a.status.localeCompare(b.status));
            break;
        default:
            break;
    }
    return result;
}


function solve(data, crit) {
  class Ticket {
    constructor(d, p, s) {
      this.destination = d;
      this.price = p;
      this.status = s;
    }
  }

  const clonedData = [...data];
  const splitedArrOfStr = clonedData.map((x) => x.split("|"));
  const ticketsLists = splitedArrOfStr.map(
    ([d, p, s]) => new Ticket(d, Number(p), s)
  );
  const sortedTickets = ticketsLists.sort((a, b) => {
    return typeof a[crit] === "number"
      ? a[crit] - b[crit]
      : a[crit].localeCompare(b[crit]);
  });

  return sortedTickets;
}

console.log(
  solve(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);
// Output
//      [ Ticket { destination: 'Boston',
//       price: 126.20,
//       status: 'departed' },

//       Ticket { destination: 'New York City',
//       price: 95.99,
//       status: 'available' },

//       Ticket { destination: 'New York City',
//       price: 95.99,
//       status: 'sold' },

//       Ticket { destination: 'Philadelphia',
//       price: 94.20,
//       status: 'available' } ]

console.log(
  solve(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "status"
  )
);
// Output
//      [ Ticket { destination: 'Philadelphia',
//       price: 94.20,
//       status: 'available' },

//      Ticket { destination: 'New York City',
//      price: 95.99,
//      status: 'available' },

//      Ticket { destination: 'Boston',
//      price: 126.20,
//      status: 'departed' },

//      Ticket { destination: 'New York City',
//      price: 95.99,
//      status: 'sold' } ]