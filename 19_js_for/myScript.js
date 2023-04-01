/* const cars=["BMW","Volvo","Fiat","Mercedes"];
let i,len,text;
for(i=0,len=cars.length,text="";i<len;i++){
    text +=cars[i] + "\n";
}
console.log(text); */
const array=[1,2,3,4,5,6];
for(let l=0,r=array.length-1;l<r;l++,r--)
{
    console.log(array[l],array[r])
}
