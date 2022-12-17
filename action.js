// let n = Number(prompt("bir sayı giriniz"));
// for (let j = 1; j<=n; j++) {
//   const randomNum = Math.round(Math.random()*100)
//   console.log(`${j}. random number: ${randomNum}`);
// };
let n = Number(prompt("enter a number"));
let isPrime = true;
if(n<2){
    console.log("Number should be bigger than 1");
}else{
    for (let i = 2; i < n; i++) {
    if( n % i == 0){
        console.log(`${n} is not prime number`)
        isPrime= false;
        break
    }
    if (isPrime === true){
    console.log(`${n} is prime number`)}
    }
}


