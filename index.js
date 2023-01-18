let arr = [1,2,3,4,5];
let noOfRotation = 2;
for(let i=0; i<noOfRotation; i++) {
    arr.unshift(arr.pop());
}

console.log(arr);