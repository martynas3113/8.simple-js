const one = 1;
console.log(one)
const two =2;
console.log(two)
const three = 3;
console.log(three)

// String

const you = 'you'
console.log(you)
const me ='me';
console.log(me)
const he = 'he';
console.log(he)

// Arrays

const array1 = [1,3,4,5,6];
console.log(array1);
const array2 = [3,4,5,6,7,7];
console.log(array2);
const array3 = [56,34,23,56,78];
console.log(array3);

// Arrays String

const array4 = ['labas','rytas','tau'];
console.log(array4);
const array5 = ['sveiki', 'atvyke' , 'cia'];
console.log(array5);
const array6 = ['ahoy', 'captain' , 'yarrr'];
console.log(array6);


// Math


const sum  = one + two + three;
console.log(sum);
const str = `${you} ${me} ${he}`;
console.log(str);
const sumArray = array1[0] - array1[1] + array1[2] - array1[3] + array1[4];
console.log(sumArray);


// 2 budas

let sumaArray = array1[0]
sumaArray = sumaArray - array1[1];
sumaArray = sumaArray + array1[2];
sumaArray = sumaArray - array1[3];
sumaArray = sumaArray + array1[4];
console.log(sumArray)


// array str sum

// const strSum = array6.concat(array5,array4)
// console.log(strSum);

const strSum = array6.join(', ')
console.log(strSum);
