class Greeter {
    
    constructor(public greeting: string) { }
    
    greet(): string {
        
        return "<h1>" + this.greeting + "</h1>";
        
    }
    
};


var greeter: Greeter = new Greeter("Hello, world!");

var str: string = greeter.greet();

document.body.innerHTML = str;