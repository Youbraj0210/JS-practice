// function add2numbers(){
//     console.log("twinkle twinkle little star\nhow i wonder what u r \n up above the world so high");
// }

// function rollDice(){
//     return console.log(Math.floor(Math.random()*6)+1);
// }

// function p(name,age){
//     console.log(`${name} age is ${age}`);
// }


// function avg(a,b,c){
//     console.log(`the avg is =${(a+b+c)/3}`);
// }


// function mulTable(n){
//     for(i=1;i<=10;i++){
//         console.log(`${n}*${i}=${n*i}`);
//     }
// }

// function sum(n){
//     s=0;
//     for(i=1;i<=n;i++){
//         s+=i;
//     }
//     return s;
// }

// function concatinate(array){
//     newstr="";
//     for ( str of array) {
//         newstr+=str;
//     }
//     return newstr;
// }

// array=["a","p","p","l","e"];
// let ans=concatinate(array);
// console.log(ans);

// let as = sum(3);
// console.log(as);

// let roll = rollDice();
// console.log(roll);

// let h="hi";

// function hell(){
//     let h="no";
// }

// let name=function(n){
//     console.log(n);
// }

// name("youbraj");


// function multipleGreet(func,n){
//     for(i=0;i<n;i++){
//         func();
//     }
// }

// let greet = function(){
//     console.log("namaste");
// }

// multipleGreet(greet,5);

// function request(req){
//     if(req=="odd"){
//         return function (n){
//             console.log(!(n%2==0));
//         }
//     }
//     else if(req=="even"){
//         return function(n){
//             console.log(n%2==0);
//         }
//     }
//     else{
//         console.log("inavlid input");
//     }
// }

// let func1= request("even");

// const student ={
//     n:"youbraj",
//     a:45,
//     name(n){
//         console.log(n);
//     },
//     age(n){
//         console.log(n);
//     }
// }

// student.name(student.n);
// student.age(student.a)

// mulTable(2);
// p("youbraj",20);
// rollDice()
// add2numbers();
// avg(1,2,3);


// try {
//     console.log(a);
// }catch(e){
//     console.log(e );
// }

// const sum = (a,b)=>{
//     console.log(a+b);
// };

// sum(1,3);

// console.log("hi there");

// let id1=setTimeout(()=>{
//     console.log("Appna College");
// },2000);

// let id =setInterval(()=>{
//     console.log("Appna College");
// },2000);

// console.log(id1);
// console.log(id);
// clearInterval(id)

const square=(n)=>(
    n*n
)

console.log(square(5));


let id=setInterval(()=>{
    console.log("hello world");
},2000);

setTimeout(()=>{
    clearInterval(id);
},10000)