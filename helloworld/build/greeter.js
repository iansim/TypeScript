/// <reference path="../mylib/my-module.d.ts" />
var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        var sc = new SomeClass();
        return "<h1>" + this.greeting + sc.method1() + "</h1>";
    };
    return Greeter;
}());
;
var greeter = new Greeter("Hello, world!");
document.body.innerHTML = greeter.greet();
