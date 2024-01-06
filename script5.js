// let arr=[1,2,3,4,10,5,6,7,8];

// arr.forEach(element => {
//     console.log(element);
// });

// let arr1 = [
//     {
//         name:"youbraj",
//         marks:99
//     },
//     {
//         name:"rohan",
//         marks:80
//     }
// ]

// arr1.forEach(element=>{
//     console.log(element.marks)
// })

// let double = arr.map(e=>(
//     e*2
// ))

// let even = arr.filter((e)=>(
//     e%2==0
// ))


// // .every() is logical and
// // .some() is logical or 

// console.log(arr.reduce((res,el)=>(res+el)));

// let maximum=arr.reduce((max,el)=>{
//     if(max>el){
//         return max;
//     }
//     else if(max<el){
//         return el;
//     }
//     else{
//         return max;
//     }
// })

// console.log(maximum)

let arr1=[10,20,30,40,50];

console.log(arr1.every((el)=>(el%10==0)));
console.log(...arr1);

function sums(...args){
    for(let i=0;i<args.length;i++){
        console.log(args[i]);
    }
}

sums(1,2,3,4,5)