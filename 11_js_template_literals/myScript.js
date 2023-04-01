/* let text = `He's often called Johnny `;
// windowsta backtick altgr+, ile yapılır
console.log(text);
let text1=
`

istediğin gibi
satır 
atlayabilirsin
multiline biçimde stringlerini yazabilirsin

`;
console.log(text1) */
let firstName="Jhon";
let lastName="Doe";
let text=`Welcome ${firstName} ${lastName}!`;
console.log(text);


let price=10;
let tax=0.25;
let total=`Total: ${(price*(1+tax)).toFixed(3)}`;
console.log(total);