class SortedList {
    constructor(list = []) {
        this.list = list.sort((a, b) =>  a - b);
        this.size = this.list.length;
    }

    add(element) {
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        this.size++;
        return;
    }

    remove(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error(`Index doesn't exist`);
        } else {
            this.list.splice(index, 1);
            this.size--;
            return;
        }
    }

    get(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error(`Index doesn't exist`);
        } else {
            return this.list[index];
        }
    }
}

class List {
    constructor() {
        this.elements = [];
        this.size = 0
    }
 
 
    add(num) {
        this.elements.push(num)
        this.size++;
        return this.elements.sort((a, b) => a - b);
    }
 
    remove(index) {
        if (index >= 0 && index < this.elements.length) {
            this.elements = this.elements.filter((x, y) => y !== index)
            this.size--;
        } else {
            return 'throw an error'
        }
 
        return this.elements.sort((a, b) => a - b);
    }
 
    get(index) {
        if (index >= 0 && index < this.elements.length) {
            return this.elements[index];
        } else {
            throw new Error('Index otside boundary')  //return ;
        }
    }
}


class List {
    constructor() {
      this.list = [];
      this.size = 0;
    }
  
    // helper methods
    updateSize() {
      this.size = this.list.length;
    }
  
    orderList() {
      this.list.sort((a, b) => a - b);
    }
  
    // main functionalities
    add(e) {
      this.list.push(e);
      this.updateSize();
      this.orderList();
    }
  
    remove(i) {
      if (this.list[i] === undefined) {
        return;
      }
  
      this.list.splice(i, 1);
      this.updateSize();
      this.orderList();
    }
  
    get(i) {
      if (this.list[i] === undefined) {
        return;
      }
  
      return this.list[i];
    }
  }