// 1.
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    let list = [];
    for( let i = 0; i < dog_names.length; i++) {
        if(dog_names[i][0] == dog_names) {
            list.push(dog_names[i])
        }
    }
    return 'Matched dog_names'
}
console.log(findWords())

// 2.
arr=["Max","Basketball","Rebot","Goku","Trucks","Rodger"];
function replaceEvens(arr){
    for(let i = 0; i < arr.length; i++) {
        if(i % 2 === 0){
            arr.splice(i, 1, "even index");
        }
    }
    console.log(arr);
}
console.log(replaceEvens(arr))