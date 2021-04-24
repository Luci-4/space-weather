export const FLRClasses = [
    "A",
    "B",
    "C",
    "M",
    "X"

]

export function calculateFLRPowerFullScore(flrClass, score){
    if(!(flrClass && score)){
        return null;
    }
    console.log(flrClass, score);
    let end = Math.pow(10, FLRClasses.indexOf(flrClass) + 1);
    let start = Math.pow(10, FLRClasses.indexOf(flrClass));
    let range = end - start;
    let relativeScore = 0.1*score*range;
    let absoluteScore = start + relativeScore;
    let max = Math.pow(10, FLRClasses.length);
    return absoluteScore / max; 
}

console.log("A3 : <0.2", calculateFLRPowerFullScore("A", 3));
console.log("X9 : >0.8", calculateFLRPowerFullScore("X", 10));
