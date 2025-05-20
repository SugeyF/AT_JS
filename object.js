//how to create an object
const jonh = {
    //properties
    name: "Jonh",
    age: 25
}

//add a new property
jonh.language = "JS";

//remove a property
delete jonh.age;

//console.log(jonh)
//console.log(jonh.name)
//console.log(jonh["age"])

//objects methods
const sarah = {
    name: "Sarah",
    age: 25,
    //function
    getOlder() {
        this.age++
    }
}

sarah.getOlder();

console.log(sarah)