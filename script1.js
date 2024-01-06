// let fav = "Avatar";

// let answer=prompt("enter the movie name");

// while(answer!=fav){
//     answer = prompt("enter the movie name");
//     if(answer==fav){
//         console.log("you guessed it correct!");
//     }
// }

let fruits = ["apple","mango","banana","jackfruit","waterMelon"];

// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i]);
// }

let heroes = [["iron man","thor","captain America"],["hulk","black widow","hawkeye"]];

// for(let i=0;i<heroes.length;i++){
//     console.log(`#${i}`);
//     for(let j=0;j<heroes[i].length;j++){
//         console.log(heroes[i][j]);
//     }
// }

// for(list of heroes){
//     for(hero of list){
//         console.log(hero)
//     }
// }

let todo = [];


while(true){
    let choice = prompt("enter your choice");
    if(choice=="list"){
        console.log("-------------");
        for(task of todo){
            console.log(task);
        }
    }
    else if(choice=="quit"){
        console.log("--------------");
        break;
    }
    else if(choice=="add"){
        console.log("--------------");
        let task = prompt("add the task");
        todo.push(task);
        console.log("task added");
    }
    else if(choice=="delete"){
        console.log("---------------");
        let index = prompt("enter the task index you want to delete");
        todo.splice(index,1);
    }
}

