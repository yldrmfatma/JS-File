/* let text ="Please locate where 'locate' occurs!";
let indexText=text.indexOf("locate");
console.log(indexText);


let indexText1=text.lastIndexOf("loxcate");
console.log(indexText1);


let indexText2=text.indexOf("locate",15);
console.log(indexText2);
 */

/* let text ="Please Locate where 'locate' occurs!";
let searchText=text.search("locate");
// aramada büyük harf küçük harf duyarlılığı var
console.log(searchText);
let searchText1=text.search(/locate/i);
// aramaya büyük küçük harf duyarlılığını kaldırma özelliğini regex ile ekledik
console.log(searchText1);

 */
// search ve indexOf farkı
// regular expression regex ifadelerini kullanavbildiğiniz aramaları search ile yapılır
// indexOf ile de belirtilen aralık aranabilir
// ihtiyaca yönelik arama methodlarından biri tercih edilebilir.

/* let text="The rain in SPAIN stays mainly in the plain."
let textMatch=text.match(/ain/g);
//g globalde aramaya yapar
console.log(textMatch);

let textMatch1=text.match(/ain/gi);//hem tüm değerleri hem de büyük küçük harf duyarlılığını kaldırdık
console.log(textMatch1)
 */
/* let text="Hello world, welcome to the universe.";
let textIncludes=text.includes("world");
console.log(textIncludes);
let textIncludes1=text.includes("world",12);
console.log(textIncludes1); */

let text="Hello world, welcome to the universe.";
let textStartsWith=text.startsWith("Hello");
console.log(textStartsWith);
if(textStartsWith==true)
{
    console.log("Bu cümle 'Hello' ile başlıyor.")
}
let textEndsWith=text.endsWith("Hello");
console.log(textEndsWith);
