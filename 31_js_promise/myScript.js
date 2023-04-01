// callback kullanmak yerine promise objesi hem üretim hem de tüketim yapmaya yardımcı olur
/* 
let Promise =new Promise(function(myResolve,myReject){
    //some code;
    myResolve();//başarılı ise
    myReject();// başarısız ise
});
myPomise.then(
    function(value){//başarılı},
    function(error){//başarısız}
       
) */

/* myPromise.state -> pending-fulfilled-rejected
pending durumunda  -- undefined 
fullfilled -- value 
rejected -- error */

/* function myDisplayer(some)
{
    console.log(some);
}
let myPromise=new Promise(
   /*  function(myResolve,myReject){
        let x=0;
        if(x==0){
            myResolve("ok")
        }
        else(
            myReject("error mesage")
        )
    } 
//istersen yukarıdaki gibi istersen aşağıdaki gibi yazabilirsin
    function myFunction(){
        let x=0;
        if(x==0) return Promise.resolve("ok");
        else return Promise.reject("error");
    } 

) */

/* myPromise.then(function(value)
{ myDisplayer(value)},function(error){myDisplayer(error)}); */

/*  myPromise.then(function(value)
{ myDisplayer(value)}).catch(function(error){myDisplayer(error)}).finally(console.log("whatever works..."));
 
 */
/* let myPromise =new Promise(function(myResolve,myReject){
    setTimeout(function(){myResolve("I love you!")},4000)

});
myPromise.then(function(value){
 console.log(myPromise);
});
console.log(myPromise);

 */
//myPromise.result ve myPromise.state e yanlızca catch ve then methodları ile erişilebiliyor

