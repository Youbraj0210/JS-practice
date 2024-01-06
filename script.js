let color = "purple";

switch (color) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("ready");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log(`invalid color ${color}`);
        break;
}

// alert("this is a alert msg");
// console.error("this is an error message");
// console.warn("this is a warn message");

// let name1 = prompt("this is a promt message");
// let name2 = prompt("this is a promt message");
// alert(`your name is ${name1+ " "+name2}`);

// str = " hellow    string     ";
// console.log(str.trim());

// n = "      HelLLO"
// console.log(n.toLowerCase().trim())

//str = "Love of Devil";
// console.log(str.indexOf("love"));
// str1=str.replace("Love","deed");
// console.log(str1)


// console.log(str.repeat(3))

let students = ["a","b","c"];
let student1 = ["x","y","z"];
// students.push("jel");
// students.pop();
// students.shift();
// students.shift();
// students.unshift("hello");

console.log(students.includes(1));
let newstu= students.concat(student1);
console.log(newstu.reverse());
console.log(newstu.slice(2,5));

console.log(students.splice(0,0,"t","e","bmw"))
console.log(students.sort())


// for(let i = 1;i<=10;i++){
//     console.log(i*5)
// }

let i=1;
while(i<=10){
    console.log(i*5);
    i++;
}