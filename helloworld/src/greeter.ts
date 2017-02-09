/// <reference path="../mylib/my-module.d.ts" />

class Greeter {
    constructor(public greeting: string) { }
    greet() {
		var sc = new SomeClass();
        return "<h1>" + this.greeting+sc.method1() +"</h1>";
    }
};

var greeter = new Greeter("Hello, world!");
    
document.body.innerHTML = greeter.greet();