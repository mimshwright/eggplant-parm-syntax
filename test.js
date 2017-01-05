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

  abc: function () {
    return this;
  }
}

window.bar = "string";

jsx = <test name="value">
  Content
</test>;

// Comment

/*
  Block Comment
*/
