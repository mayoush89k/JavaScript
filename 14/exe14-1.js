const nums = [547,55,85,178,415,548,345,15,145,86,99]

function getMax(numbers) {
    return numbers.reduce((acc , currN) => {
        return acc > currN ? acc : currN
    },0)
}
console.log('1. Max number: ', getMax(nums));

function SumOfEven(numbers){
    return numbers.reduce((acc , currN) => {
        return acc += (currN % 2 == 0) ? currN : 0
    },0)
}
console.log('2. Sum Of Even: ', SumOfEven(nums));


function Average(numbers){
    return (numbers.reduce((acc , currN) => {
        return acc + currN
    }, 0) / numbers.length).toFixed(2)
}
console.log('Average: ', Average(nums));