class Person{


    constructor(public nom: string,
        public age: number,
        public adresse: string){
        
    }
}

let p1: Person = new Person("michel", 10 ,"nice");
let p2: Person = p1;
p2.nom = "Edouard";
console.log(p1); // Edouard
p2 = Object.assign({}, p1);
p2.nom = "Didier";
console.log(p1); // Edouard c'est bon

// Peut etre utilisé lorsque l'on ne veut pas modifier un @Input dans un composant 

