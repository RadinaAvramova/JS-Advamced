class Textbox {
    constructor(selector, regEks) {
      //this.value = value;
      this._elements = Array.from(document.querySelectorAll(selector));
      this._value = this._elements[0].value;
      this._invalidSymbols = regEks;
      let s = 1;
      this._elements.forEach((el) => {
        el.value = `this is ${s++}`;
        el.addEventListener("input", () => {
          //console.log(el.value, "fromEvent");
          this._value = el.value;
          this._elements.forEach((item) => {
            item.value = this._value;
          });
        });
      });
    }
   
    get elements() {
      return this._elements;
    }
   
    get value() {
      //return this._elements[0].value;
      return this._value;
    }
   
    set value(txt) {
      console.log("from setter");
      this._value = txt;
      this._elements.forEach((el) => {
        el.value = txt;
      });
    }
   
    isValid() {
      if (this._invalidSymbols.exec(this.value) === null) {
        return true;
      } else {
        return false;
      }
    }
  }

