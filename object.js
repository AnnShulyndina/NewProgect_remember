//1
// let user =   {
//     name: "John",
//     surname: "Smith",
// };
//
// user.name = "Pete";
//
// delete user.name
//
// console.log(user)

//2
// function isEmpty(obj) {
//     for (let key in obj) {
//         return false
//     }
//     return true
// }
//
// let schedule = {};
// alert (isEmpty(schedule));
//
// schedule["8:30"] = "get up";
// alert(isEmpty(schedule))

//3
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
//
// let sum = 0
// for (let key in salaries) {
//     sum += salaries[key];
// }
// alert(sum)

//4



//not working
function multiplyNumeric() {
    
    let menu = {
        width: 200,
        height: 600,
        title: "My menu"
    }
    
    for (let key in menu) {
        if (typeof menu[key] == 'number') {
            menu[key] *= 2;
        }
    }
}

multiplyNumeric();


