//Loops

for(let i=0;i<5;i++){
    console.log(i)
}

for(let i=1; i<=5;i++){
    console.log("Hello Word" , i)
}

for(let i=1;i<=100;i=i+2){
    console.log(i)
}
for(let i=2;i<=100;i=i+2){
    console.log(i)
}

//while loops
let j=2;
while(j<=100){
    console.log(j)
    j=j+2;
}

let name =prompt("Enter your nmae:")
console.log(name)

while (name.length<3){
    name=prompt("Enter your correct name:")
}


//arrays

let usersnames = ["Amna" ,"Iqra", "Hamna", "Aliza", "Rihana"];
console.log(usersnames)
console.log(usersnames[4])
console.log(usersnames.length)

//End
usersnames.push("Hassan");
usersnames.push("Kashan");
usersnames.push("pakistan");
//start
usersnames.unshift("Laptop");
usersnames.unshift("wire");


usersnames.pop(); //end remove
usersnames.shift(); //start remove

console.log(usersnames)

 let ages =[12, 13, 14, 15, 16, 17, 18, 19 ,20];
 for (let i=0; i < ages.length; i++){
    console.log(ages[i]);
 }

//arrow function == name less function
let greet=() => {
    console.log("Greetings");
};

greet()

// arrow function tab pass hota argument

function pageStack(func1){
    func1();
}
pageStack(() => {
    console.log("This is arrow function");
}
);

//map function

ages.map((ag) =>{
console.log(ag * 5);
}
);

let refinedAges = ages.map((ag) => {
    return ag + 10;
});
console.log(refinedAges);

//filters

let eligibleAges = ages.filter((ag)=> {
    if (ag>=18){
        return ag;
    }
}
);
console.log(ages);
console.log(eligibleAges);

//objects

let student={
    name:"Ali" ,
    courses:["Maths" , "English" , "urdu"],
    age:20,
    isGraducated:true,
    carInfo: {
        nam: "honda",
    }
}
console.log(student);
console.log(student.name);
student.name = "Rukhsana";
student.institute = "Saylani";
console.log(student.courses);
console.log(student.carInfo.name);

//make an object of car

let car = {
      name: "benz",
      type: "mercedes",
      price: 5000,
}
console.log(car);

    

























