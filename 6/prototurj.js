/* Truthy values  // true kabul edilenler

    All numbers(positive and negative) are truthy except zero
    All strings are truthy except an empty string ('')
    The boolean true

Falsy values // yanlış kabul edilenler

    0
    0n
    null
    undefined
    NaN
    the boolean false
    '', "", ``, empty string
 */

/* karşılaştırma operatörleri örnek  */

console.log('ahmet.'.length == 'mehmettttt'.length);  // lenghtleri kontrol etme vs. ornektir
console.log('mango'.length == 'avocado'.length)  // false
console.log('mango'.length != 'avocado'.length)  // true
console.log('mango'.length < 'avocado'.length)   // true
console.log('milk'.length == 'meat'.length)      // true
console.log('milk'.length != 'meat'.length)      // false
console.log('tomato'.length == 'potato'.length)  // true
console.log('python'.length > 'dragon'.length)   // false

/* 
let check = 4 > 3                     // true
let check = !(4 > 3)                  //  false
let isLightOn = true
let isLightOff = !isLightOn           // false
let isMarried = !false                // true */  // tersini alma demek



/* arttırma operatoru  */

/* önceden-arttırma */

let count = 0
console.log(++count)        // 1
console.log(count)          // 1

    /* sonradan arttırma */

let count2 = 0
console.log(count2++)        // 0
console.log(count2)          // 1

/* azaltma operatorleri */
/* Pre-decrement */

let count3 = 0
console.log(--count3) // -1
console.log(count3)  // -1

   /*  Post-decrement */

let count4 = 0
console.log(count4--) // 0
console.log(count4)   // -1


/* ternary operator */ 
/* Üçlü operatör bir koşul yazmaya izin verir(tek satırda) */

// soru işareti true yu temsil eder : ise false yi
let result = 5 > 4 ? 'evet doğru' : 'hayir yanlış';
console.log(result);


/* işlem önceliği */

let a = 5
let b = 6

console.log((a > b && b > 5) && (a === b || b < 4));  //çoklu işlemlerde parantez kullanımı aynı matemaik (kolay)


/* windows alert methodu */ //alert yeri
/* alert('bu bir alert kodudur')   // tarayıcıda kullan */


/* windows promt methodu */ // input yeri
/* prompt('Bir değer girin yeri', 'içinde yazacak şeyler (placeholder gibi)') */

/* let sayi = prompt('bir sayi girin', '5')
let sonuc = sayi * 2

console.log(sonuc); */


//onay kutusu yeri 
//confirm()

/* let isDelete = confirm('Silme işlemi onaylansın mı') // evet hayır butonı cıkarır

console.log(isDelete ? 'silme islemi basarili' :'Silme islemi basarisiz');  */





/* tarih özellikleri */
/* getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay() */


const now1 = new Date();
console.log(now1);

const now2 = new Date().getFullYear();
console.log(now2);

const now3 = new Date();
console.log(now3.getMonth());  //böyle de olur

const now = new Date()
const year = now.getFullYear() // return year
const month = now.getMonth() + 1 // return month(0 - 11)
const date = now.getDate() // return date (1 - 31)
const hours = now.getHours() // return number (0 - 23)
const minutes = now.getMinutes() // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56





