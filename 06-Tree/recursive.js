
//Factoriel With Loop

function factoriel(numb){

    let result=1;
    for(let i=numb;i>1 ; i--){
        result *= i
    }
    return result
}
console.log(factoriel(4))







//Recursive Factoriel

function RecursiveFactoriel(numb){
    //Base Condition ترمز
    if(numb < 0)return undefined;
    if(numb === 1 || numb === 0) return 1;

    return numb * RecursiveFactoriel(numb - 1)
    
}

console.log(RecursiveFactoriel(4))




