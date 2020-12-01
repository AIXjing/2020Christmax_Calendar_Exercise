const fs = require('fs')

try {
    const data = fs.readFileSync('input.txt', 'utf8')

    let x = data.split("\n")
    let numbers = x.map(each => parseInt(each))
    var pairs = []

    for(let i = 0; i < numbers.length; i++){
        console.log(numbers[i])
        if((2020 - numbers[i]) in pairs){
            console.log((2020 - numbers[i])*numbers[i])
            return (2020 - numbers[i])*numbers[i];
        }
        else{
            pairs[numbers[i]] = '1';
        }
    }
    return 0 
} catch (err) {
  console.error(err)
}