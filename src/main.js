// Exact number of the series
const fibonExact = (n) =>{
    if(n === 1) return 0;
    if(n === 2) return 1;
    return fibonExact(n-1) + fibonExact(n-2);
}
console.log(fibonExact(20));

console.log('Series with for loop');
// Print x numbers of the series
const fibon = (n) => {
    let initial = 0;
    let second = 1;
    for(let i = 0; i<n; i++){
        console.log(initial);
        const value = initial + second;
        initial = second;
        second = value
    }
}

fibon(25);