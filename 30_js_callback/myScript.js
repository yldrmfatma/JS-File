/* function myDisplayer(message){
    console.log(message);
}
function myFirst(){
    myDisplayer("Hello");
}
function mySecond(){
    myDisplayer("GoodBye");
}
myFirst();
mySecond();

// Hiyerarşik sıralama vermek istediğimiz zamanlarda callback method kullanılır */


/* function myDisplayer(some){
    console.log(some)
}
function myCalculator (num1,num2)
{
    let sum=num1+num2;
    myDisplayer(sum);
}
myCalculator(5,6); */

/* function myDisplayer (some)
{
    console.log(some);
}
function myCalculator(num1,num2){
    let sum =num1+num2;
    return sum;
}
let result =myCalculator(5,5);
myDisplayer(result); */
/* 
//callback funclarda içerisine parametre olarak method yazılabilir
function myDisplayer(some){
    console.log(some);
}
function myCalculator(num1,num2,myCallback)
{
    let sum=num1+num2;
    myCallback(sum);
}
myCalculator(5,5,myDisplayer); */

/* function myFunction(){
    console.log("function running "); 
}
setTimeout(myFunction,3000); */ // belirlenen sürede çalışır
/* function myFunction(){
    console.log("function running ");
}
setInterval(myFunction,3000); */ //sürekli çaalışır

