let nums = [1, 2, 3, 4]; //birden fazla veri tutmak için köşeli parantez koyariz

console.log(nums);


let nums2 = [1, 'sefa', true, null, undefined]; //hertülü şeyle yapılır.

console.log(nums2);



let nums3 = [1, 2, 3]; //0. eleman 1 dir.
nums3[0] = 10;    //ilk elemana erişip değiştirmek için yapariz.

console.log(nums3);

let nums4 = ["sefa", 2, 3];
nums4[0] = "ahmet";

console.log(nums4);


const PI = Math.PI;
console.log(PI);

console.log(Math.round(PI))                // yuvarlama yapar
console.log(Math.round(9.81))              // yuvarlama yapıyor
console.log(Math.floor(PI))                // aşağı yuvarlama yapar
console.log(Math.ceil(PI))                 // yukarı yuvarlama yapar

console.log(Math.min(-5, 3, 20, 4, 5, 10)) //  bir sayı kümesindeki en düşük elemanı gösterir
console.log(Math.max(-5, 3, 20, 4, 5, 10)) // bir sayı kümesindeki en yüksek elemanı gösterir

const randNum = Math.random() // 0 ile 1 arasında rastgele bir sayı üretir
console.log(randNum)

const num = Math.floor(Math.random() * 11) // 0 ile 10 arasında rastgele rakamlar üretir.
console.log(num)

console.log(Math.abs(-10))      // mutlak değer
console.log(Math.sqrt(100))     // karekök
console.log(Math.pow(3, 2))     // üssü 3 üssü 2 veya 3 ** 2 ile de yapabiliriz.

let randomNum = Math.random()         // random sayı oluşturucu atadık
let numBtnZeroAndTen = randomNum * 11 // 11 le çarptık 

console.log(numBtnZeroAndTen)         // this gives: min 0 and max 10.99   0 ile 11 arasında sayılar elde edeceğiz.

let randomNumRoundToFloor = Math.floor(numBtnZeroAndTen)
console.log(randomNumRoundToFloor)    // this gives between 0 and 10  yuvarlama işlemiyle küsüratı attık.


// toplama veya tek satır haline getirme
let name1 = "sefa";
let surname1 = "duzgun";

let fullName = name1 + ' ' + surname1;

console.log(fullName);  



// toplama veya tek satır haline getirme
let sayi1 = 5
let sayi2 = 3

let toplami = sayi1 + sayi2 

console.log(toplami);  


//çoklu satıra taşınca \ kullan  böylece hata almassın  ama eski yontem
const paragraph = "asjdklmasdkpmlasdmlasöşdpkasldasld\
asdsadasd\
asdasdasdasd\
asdasdasdasdasd\
asdasdasdds"

console.log(paragraph);


// bir alt satıra atma
let paragraph2 = "My name is sefa. \n what about you ? "  
console.log(paragraph2);

let paragraph3 = 'this is sefa\'s house ' //fazladan kesme işareti kullanıcaksak backslah ile errordan kurtul
console.log(paragraph3);

let paragraph4 = "\"this is a paragraph\"" //fazladan tırnak işareti kullanıcaksak backslah ile errordan kurtul
console.log(paragraph4);




//////////////  modern yontem 


let name2 = "sefa"
let surname2 = "duzgun"

let fullName2 = `${name2} ${surname2} `

console.log(fullName2);


let name3 = "sefa"
let surname3 = "duzgun"
let a = 5;
let b = 10;
let fullName3 = `${name3} 
bosluklar sıkıntı degil artık
cartcurt

a + b = ${a + b}

${a} + ${b} = ${a + b}

${surname3} `

console.log(fullName3);





