import {thing} from 'abc'

class foo {
  constructor () {
    var a = "string";
    const b = 123;
    let c = (param) => {
      return b;
    }
    var d = {
      "name": "value"
    };
    var e = /regexp/g;
    var f = [a, b, c, d, e];
    var g = 0xFF00ff;
    var h = "#ffffff"
  }

  abc () {
    return this;
  }
}

function square (a = 1) {
  return a * a
}

const cube = (a = 1) => a * a * a

window.bar = "string";

jsx = <test name="value">
  Content
</test>;

// Comment

/*
  Block Comment
*/
