// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(array,arg){
    return array.filter(element=> element.toLowerCase() === arg.toLowerCase())
}
console.log(findMatching(drivers, 'Bobby'))

function fuzzyMatch(array,arg){
    return array.filter(element=> element.startsWith(arg))
}
console.log(fuzzyMatch(drivers, 'Sa'))

function matchName(array,arg){
    return array.filter(driver => driver.name === arg)
}

console.log(matchName(drivers, 'Bobby'))