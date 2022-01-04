//wow what a classic! If number is divided by 3 then we fizz, it 5 we bop, if both we fizzbop. What a knee slapper of a time. 

function fizzBop(num) {
    let fizzNumbers = [];
    for (let i = 1; i <= num; i++) {
        i % 3 == 0 && i % 5 == 0 ? fizzNumbers.push("FizzBop") :
            i % 3 == 0 && i % 5 != 0 ? fizzNumbers.push("Fizz") :
            i % 3 != 0 && i % 5 == 0 ? fizzNumbers.push("Bob") :
            fizzNumbers.push(i);
    }
    return fizzNumbers;
}