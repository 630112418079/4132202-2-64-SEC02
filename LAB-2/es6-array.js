let groups =["akatsuki","Konoha","7swords"];
let characters = [];
characters[0] = "Naruto";
characters[3] = "Hinata";

let positions = new Array("Hokage","Junin","jonin");
console.log(positions);

let popgroups = groups.pop();
console.log(popgroups);
console.log(groups);

groups.unshift("Animaltail");
console.log(groups);
groups.shift();
console.log(groups);

groups.splice(1, 0, "Orochimaru Group","team 7");
console.log(groups);
const groupsslide = groups.slice(1, 2);
console.log(groupsslide);


const newArr = groups.concat(positions);

console.log(newArr);
const newArr2 = [...groups, ...positions]; //spread Operator
console.log(newArr2);

console.log(newArr.toString());