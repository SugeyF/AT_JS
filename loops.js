
let sum = 0;
let i = 0;

//while

while (i < 5) {
    i++;
    sum += i;
}

//do while

do {
    i++;
    sum += i;
} while (i < 5);

//console.log(sum);

//for

let sum1 = 0;

for (let s = 0; s < 6; s++) {
    sum1 += s;
}
//console.log(sum1);

const arr = [1,2,3,4,5];

for (let d = 1; d < 6; d++) {
    //console.log(arr[d]);    
}

const arr1 = [1,2,3,4,5];
let sum2 = 0;

for (let j = 1; j < 6; j++) {
    sum2 += arr1[j];    
}

//console.log(sum2);

//for...in

const obj = {
    name: 'John',
    lastName: 'Duo'
};

for (const key in obj) {
    //console.log(key);
    //console.log(obj[key]);
}

//for...of

const arr2 = [1,2,3,4,5];
let sum3 = 0;

for (let el of arr2) {
    //console.log(el);
    sum += el;
}
console.log(sum);
