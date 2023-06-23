function createSortedList() {
    const instance = {
      numbersList: [],
      size: 0,
  
      // methods
      add: function (element) {
        this.numbersList.push(element);
        this.numbersList.sort(this._comparor);
        this.size += 1;
  
        return instance;
      },
  
      remove: function (index) {
        this._validate(index);
        this.numbersList.splice(index, 1);
        this.size -= 1;
  
        return instance;
      },
  
      get: function (index) {
        this._validate(index);
  
        return this.numbersList[index];
      },
  
      // Helper methods
      _validate: function (index) {
        if (index < 0 || index >= this.numbersList.length) {
          throw new Error("Index is out of bounds");
        }
      },
  
      _comparor: function (a, b) {
        return a - b;
      },
    };
  
    return instance;
  }
  
function sortedList() {
    const collection = [];

    const result = {
        add,
        remove,
        get,
        size: 0,
    };

    return result;

    function add(num) {
        collection.push(num);
        this.size++;
        collection.sort((a, b) => a - b);
    }

    function remove(index) {
        const valid = checkIndex(index);
        if (valid) {
            collection.splice(index, 1);
            this.size--;
        }
    }

    function get(index) {
        const valid = checkIndex(index);

        if (valid) {
            return collection[index];
        }
    }

    function checkIndex(index) {
        return index >= 0 && index < collection.length;
    }
}

function createSortedList() {
    const list = [];
    return {
        add(num) {
            if (typeof(num) === 'number') {
                list.push(num);
                list.sort((a, b) => a - b);
            } else {
                console.log('The array takes only numbers.')
            }
        },
        remove(index) {
            if (index >= 0 && index < list.length) {
                list.splice(index, 1);
            } else {
                console.error('The index is outside the bounds of the array');
            }
        },
        get(index) {
            if (index >= 0 && index < list.length) {
                return list[index];
            } else {
                console.error('The index is outside the bounds of the array');
            }
        },
        get size() {
            return list.length
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

            throw new Error('Index otside boundary');

        }
    }
 
}


sortedList(let list = createSortedList();
list.add(5);
list.add(6);list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));)