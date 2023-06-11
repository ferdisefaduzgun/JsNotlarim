//1
function toplama(num1, num2){
    return num1 + num2;
}

let toplam = toplama(20, 10);
console.log(toplam);

//2
function carpma(num1, num2) {
    return num1 * num2;
}

let carpmaIslemiSonucu = carpma(20, 4);
console.log(carpmaIslemiSonucu);

//3 böyle de olur
function cikarma(num1, num2){
    let cikarmaIslem = num1 - num2;
    return cikarmaIslem;
}

let num1 = 20, num2 = 10;
let cikarmaIslemiSonucu = cikarma(num1,num2)
console.log(cikarmaIslemiSonucu);

//4

function arrayliFunction(arraylerGelecek) {
    console.log(arraylerGelecek);
}

let dizi = [10, 20, 40, 60, 100]
arrayliFunction(dizi)

//5
function kolayToplamaForla(arraylerGelecek2) {
    total = 0;
    for(let i = 0; i < arraylerGelecek2.length; i++){
        total += arraylerGelecek2[i]
    }
    return total
}

let dizi2 = [10, 20, 40, 60, 100];
console.log('toplam', kolayToplamaForla(dizi2));

//6
/* function topla(n1, n2, n3, n4, n5) {  // yazmak yerine console loga arguments yazıp tüm elemeanları alabılırız
    
} 

topla(10, 20, 40, 60,10, 20, 40, 60,10, 20, 40, 60,10, 20, 40, 60,10, 20, 40, 60,10, 20, 40, 60,10, 20, 40, 60,) //çoklu veya sonsuz varsa
*/

function topla() {
    console.log(arguments);
}

topla(10, 20, 40, 60,10, 20, 40, 60,10, 20, 40, 60,10, 20, 40, 60,10, 20, 40, 60,10, 20, 40, 60,10, 20, 40, 60)

//6nın toplama ornegi
function CokluVerideOrnek() {
    total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
    return total
}

console.log(CokluVerideOrnek(10, 20, 40, 60,10, 20, 40, 60,10, 20, 40, 60,10, 20, 40, 60,10, 20, 40, 60,10, 20, 40, 60,10, 20));


//7 anonymous functıon
const anonymousFunc = function (name) {
     return `Hello ${name}`
}
console.log(anonymousFunc('sefa'));

//8 kendi kendini çağıran func
let sayHello = (function(name) {
    console.log(`hello ${name}`)
  })('sefas') //burda kullanırız

//9
//normal function
function funcAdi(param1,param2) {
    return `hello ${param1}`;
}

//arrow func  tek satırda
const hello2 = (name1, name2) => `hello ${name1}` // tek parametre olursa () kullanılmasına gerekmez btw

console.log(hello2('sefa duzgun'));
  
//10 rest operatoru hepsini alır argument gibi 
const toplama4 = (...numaralar) => {   
        console.log(numaralar);
}   

toplama4(10,2,5,10,7,6,5,3,23,23,2,)

// varsayılanı belirleme
function varsayilan(num1, num2 = 2){
    return num1 * num2
}

console.log(varsayilan(10));//2. bi parametre vermessek 2 yle çarpar 2 belirttik
console.log(varsayilan(10,5)); // burda belirttik 2 alınmaz


