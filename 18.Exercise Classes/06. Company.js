class Company {
 
    constructor() {
        this.departments = {};
        this.aveSalaries = {};
    }
 
    addEmployee(username, salary, position, department) {
 
        if ([...arguments].some(a => a === null || a === undefined || a === '') || salary < 0) {
            throw new Error('Invalid input!');
        }
 
        let user = {
            username: username,
            salary: salary,
            position: position
        };
 
        if (!this.departments.hasOwnProperty(department)) {
 
            this.departments[department] = [];
 
            this.aveSalaries[department] = {
                totalEmployees: 0,
                totalSalaries: 0,
                averageSalary: 0
            };
        } 
 
        this.departments[department].push(user);
        this.aveSalaries[department].totalEmployees += 1;
        this.aveSalaries[department].totalSalaries += salary;
        
        this.aveSalaries[department].averageSalary = 
            this.aveSalaries[department].totalSalaries / 
            this.aveSalaries[department].totalEmployees;
        
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }
 
    bestDepartment() {
 
        let result = '';
        let bestDepartment = Object
            .entries(this.aveSalaries)
            .sort((a, b) => b[1].averageSalary - a[1].averageSalary)
            .shift();
 
        result += `Best Department is: ${bestDepartment[0]}`;
        result += `\nAverage salary: ${bestDepartment[1].averageSalary.toFixed(2)}`;
 
        this.departments[bestDepartment[0]]
            .sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));
 
        this.departments[bestDepartment[0]].forEach(user => {
            result +=`\n${user.username} ${user.salary} ${user.position}`;
        });
 
        return result;
    }
}

class Company {
    constructor() {
        this.departments = [];
    }
 
    addEmployee(username, salary, position, department) {
        if ([...arguments].some(a => a === null || a === undefined || a === '') || salary < 0) {
            throw new Error('Invalid input!');
        }
 
        let currentDepartment = this.departments.find(d => d.name === department);
 
        if (currentDepartment === undefined) {
            currentDepartment = {
                name: department,
                employees: []
            };
 
            this.departments.push(currentDepartment);
        }
 
        currentDepartment.employees.push({
            username,
            salary,
            position
        });
        
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }
 
    bestDepartment() {
        const copyOfDepartments = this.departments.map(d => {
            const department = Object.assign({}, d);
            department.averageSalary = d.employees.reduce((previous, current) => previous + current.salary, 0) / d.employees.length;
            return department;
        });
 
        copyOfDepartments.sort((a, b) => b.averageSalary - a.averageSalary);
        
        const bestDepartment = copyOfDepartments[0];
 
        if (bestDepartment !== undefined) {
            bestDepartment.employees.sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));
            const result = [`Best Department is: ${bestDepartment.name}`,
                            `Average salary: ${bestDepartment.averageSalary.toFixed(2)}`,
            ];
 
            bestDepartment.employees.forEach(employee => 
                result.push(`${employee.username} ${employee.salary} ${employee.position}`));
            
            return result.join('\n');
        }
    }
}

class Company {
    constructor() {
        this.departments = new Map();
    }
    addEmployee(username, salary, position, department) {
 
        if (!username || !salary || salary < 0 || !position || !department) {
            throw new Error("Invalid input!");
        }
 
        let newEmployee = { username, salary, position, department };
 
        if (this.departments.has(department)) {
            this.departments.get(department).push(newEmployee);
        } else {
            this.departments.set(department, [newEmployee]);
        }
 
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }
 
    bestDepartment() {
        let totalSalary = (department) => {
            let totalSalary = department[1].reduce((acc, b) => { return acc += b.salary }, 0);
            let averageSalary = (totalSalary / department[1].length).toFixed(2);
            department.push(averageSalary);
            return averageSalary;
        };
        let bestDepartment = [...this.departments].sort((a, b) => totalSalary(b) - totalSalary(a))[0];
        let sortBySalaryAndName = bestDepartment[1].sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));
 
        let result = `Best Department is: ${bestDepartment.shift()}\n`;
        result += `Average salary: ${bestDepartment.pop()}\n`;
        sortBySalaryAndName.forEach(e => result += `${e.username} ${e.salary} ${e.position}\n`);
 
        return result.trim();
    }
}

class Company {
    #departments;
    constructor() {
        this.#departments = [];
    }
 
    addEmployee(username, salary, position, department) {
        if (!username || !position || !department || !salary || salary < 0) {

            throw new Error("Invalid input!");
        
        }        
 
        let newEmploy = {
            username: username,
            salary: Number(salary),
            position: position
        }
 
        if (!this.#departments[department]) {
            this.#departments[department] = [];
        }
        this.#departments[department].push(newEmploy);
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }
 
    bestDepartment() {
        let department = '';
        let maxSalary = 0;
        Object.entries(this.#departments).forEach(([key, value]) => {
            let salary = 0;
            value.forEach(e => {
                salary += e.salary;
            })
            salary = salary / value.length;
            if (salary > maxSalary) {
                department = key;
                maxSalary = salary;
            }
        });
        if (department != '') {
            let res = `Best Department is: ${department}\nAverage salary: ${maxSalary.toFixed(2)}\n`;
            Object.values(this.#departments[department]).sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username)).forEach(e => {
                let em = `${e.username} ${e.salary} ${e.position}\n`;
                res += em;
            })
            return res.trim();
        }
    }
}

class Company {
    constructor() {
        this.departments = [];
    }
 
    addEmployee(username, salary, position, department) {
        if ([...arguments].some(a => a === null || a === undefined || a === '') || salary < 0) {
            throw new Error('Invalid input!');
        } else {
            const newEmployee = {
                username: username,
                salary: salary,
                position: position,
                department: department,
            };
            if (this.departments.filter(function (e) {return e.name === department;}).length > 0) {
                for (let existingDepartment of this.departments) {
                    if (existingDepartment.name === department) {
                        existingDepartment.users.push(newEmployee);
                        existingDepartment.totalSalary += salary;
                    }
                }
            } else {
                let newDepartment = {
                    name: department,
                    users: [newEmployee],
                    totalSalary: salary,
                    averageSalary() {
                        return this.totalSalary / this.users.length;
                    },
                };
                this.departments.push(newDepartment);
            }
            return `New employee is hired. Name: ${username}. Position: ${position}`;
        }
    }
 
    bestDepartment() {
        let bestDepartment = this.departments.sort((a, b) => a.averageSalary - b.averageSalary)[0];
        bestDepartment.users = bestDepartment.users.sort(function (a, b) {
            if (a.username === b.username) {
                // Price is only important when cities are the same
                return b.username - a.username;
            }
            return a.salary < b.salary ? 1 : -1;
        });
        let result = `Best Department is: ${bestDepartment.name}\nAverage salary: ${bestDepartment.averageSalary().toFixed(2)}`;
        for (let user of bestDepartment.users) {
            result += `\n${user.username} ${user.salary} ${user.position}`;
        }
        return result;
    }
}


class Company {
    constructor() {
      this.departments = [];
    }
  
    getDepart(name) {
      const depart = this.departments.find((x) => x.name === name);
  
      if (!depart) {
        const temp = { name, employees: [], salaries: [], positions: [] };
        this.departments.push(temp);
        return temp;
      }
  
      return depart;
    }
  
    getSalariesSum(depart) {
      return depart.salaries.reduce((a, v) => a + v, 0);
    }
  
    bestSalaryDepart() {
      return this.departments.sort(
        (a, b) =>
          this.getSalariesSum(b) / b.salaries.length -
          this.getSalariesSum(a) / a.salaries.length
      )[0];
    }
  
    addEmployee(...args) {
      const [name, salary, position, departmentName] = args;
      const isInvalidInput =
        args.some((x) => x === undefined || x === null || x === "") || salary < 0;
  
      if (isInvalidInput) {
        throw new Error("Invalid input!");
      }
  
      const department = this.getDepart(departmentName);
      department.employees.push(name);
      department.salaries.push(salary);
      department.positions.push(position);
      return `New employee is hired. Name: ${name}. Position: ${position}`;
    }
  
    bestDepartment() {
      const best = this.bestSalaryDepart();
  
      const combinedEmployees = best.employees.reduce((a, v, i) => {
        a[i] = [];
        a[i].push(v, best.salaries[i], best.positions[i]);
        return a;
      }, []);
  
      const sorted = combinedEmployees.sort((a, b) => {
        return b[1] - a[1] === 0 ? a[0].localeCompare(b[0]) : b[1] - a[1];
      });
  
      const printData = sorted.map((x) => x.join(" ")).join("\n");
  
      const avgSalary = (
        this.getSalariesSum(best) / best.salaries.length
      ).toFixed(2);
      return `Best Department is: ${best.name}
  Average salary: ${avgSalary}
  ${printData}`;
    }
  }
  
  let c = new Company();
  c.addEmployee("Stanimir", 2000, "engineer", "Construction");
  c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
  c.addEmployee("Slavi", 500, "dyer", "Construction");
  c.addEmployee("Stan", 2000, "architect", "Construction");
  c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
  c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
  c.addEmployee("Gosho", 1350, "HR", "Human resources");
  console.log(c.bestDepartment());
  
  // OUTPUT:
  //       Best Department is: Construction
  //       Average salary: 1500.00
  //       Stan 2000 architect
  //       Stanimir 2000 engineer
  //       Pesho 1500 electrical engineer
  //       Slavi 500 dyer