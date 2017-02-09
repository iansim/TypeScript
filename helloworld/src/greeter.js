"use strict";
///<reference path="MyModule.d.ts"/>
var my_module_js_1 = require("../mylib/my-module.js");
//import * as mylib from 'MyModule'
var Greeter = (function () {
    function Greeter(greeting) {
        this.greeting = greeting;
    }
    Greeter.prototype.greet = function () {
        var sc = new my_module_js_1.SomeClass();
        return "<h1>" + this.greeting + sc.method1() + "</h1>";
    };
    return Greeter;
}());
;
var greeter = new Greeter("Hello, world!");
document.body.innerHTML = greeter.greet();
