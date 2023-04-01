/* function myFunction(){
    return Promise.resolve("Hello");
} */ //bunun yerine async kullanıyoruz
/* async function myFunction(){
    return "Hello";
}
myFunction().then(
    function(value){console.log(value);},
    function(error){console.log(error);}
)
//promise objelerine normal functionlardaki gibi direkt çağıramıyoruz then içeriisnde çağırmalıyız
 */
// await işlemi yalnızca asynclerde çalışır.

/* async function myDisplay(){
    let myPromise =new Promise(
        function(resolve,reject){
            setTimeout(function(){resolve("I love you!")},3000)
        });
    console.log(await myPromise) // await ile then yazma ihtiyacı da ortadan kalkar çünkü promise objesinin değerini döndürür
}
myDisplay(); */

/* function resolveAfter2Seconds(x){
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve(x)},2000)

    })}
async function f1(){
    const x=await resolveAfter2Seconds(10);
    console.log(x);
}
f1(); */

async function  test(data){
    let promise = new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            if(data){
                resolve("bu bir değerdir")}
            else 
            {
                reject("bu bir değer değildir.")
            }
            },4000)
    });
    console.log("promise bekleniyor...")
    let response =await promise;
    console.log("promise bitti");
    return response
}
test(45).then(resolve=>console.log(resolve),reject=>console.log(reject));
