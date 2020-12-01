const fs = require('fs')

try {
    const data = fs.readFileSync('input.txt', 'utf8')

    let x = data.split("\n")
    let numbers = x.map(each => parseInt(each))
    var len = numbers.length

    for(let i = 0; i < (len - 1); i++){
        var pairs = []
        for(var j = (i + 1); j < len; j++){
            var a = 2020 - numbers[i] - numbers[j]
            if(!(a in pairs)) {
                pairs[numbers[j]] = '1'
                //console.log(pairs)
            }
            else{
                return console.log(numbers[i], a, numbers[j], numbers[i]*a*numbers[j])
            }           
        }
    }
    return console.log('not found')
} catch (err) {
  console.error(err)
}