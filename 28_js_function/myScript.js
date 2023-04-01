/* //default parametre
function myFunc(x,y){
    if(y==undefined)
    {
        y=2;
    }
    return x+y;
}
console.log(myFunc(4)); */


/* function myFunc(x,y=2){
    return x+y;
}
console.log(myFunc(5)); 

//birden fazla değer alabilir hepsini al ...args
function sum(...args){
    let sum=0;
    console.log(args)
    for(let arg of args) sum+=arg;
    return sum;
}
let x=sum(1,2,3,4) // dizi gibi işlem yapacaktır
console.log(x) */

/* //self invoke
function self1(){
    console.log("self invoke func1");
}
self1() */

(function self2(){
    console.log("self invoke func2")
})();