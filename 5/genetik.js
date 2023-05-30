/* /* Operatörler */

/* 1- aritmatik operatorler  */
// =, +, -, *, /, %, ++, --, ** gibi matematiksel işlemleri kullanır.
let number1 = 10;
let number2 = 20;
let number3 = 30;
let result;

result = number1 + number2;
result = number3 - number1;
result = number1 * number2;
result = number3 / number1;
result = number1 % 3; /* bölümden kalan sayıyı gösterir. genellikle sayının tek mi çift mi oldugunu anlamak icin kullanırız. */
/* result = number1++; */ //sonrasına yazarsak number1 değerine +1 ekler. console logda yazdırılırsa 11 olacaktır(number1)
/* result = ++number1; */ // öncesine yazarsak da önce kendi içinde toplar sonra result a ekler ve result 11 olur.

/* console.log(result); */


/* 2- Atama Operatörleri  */ 
/* +=, -=, /=, *=,  %=, gibi sembolleri var*/
result = number1
result += number1; // result + number1 işleminin kısasını yapar
result -= number1; // result - number1 işleminin kısasını yapar
result /= number1; // result / number1 işleminin kısasını yapar
result *= number1; // result * number1 işleminin kısasını yapar
result %= number2; // result % number1 işleminin kısasını yapar
/* console.log(result); */

/* 3-Karşılaştırma Operatörleri */
// ==, !=, ===, >, <, >=, <=, 
// eğer bir yerde 1 tane = varsa sağdakini sola atama yapar yani result = sefa1 sefa1 result değerinin yerine geçti atandı 
// ama eğer 2 tane == olur ise değerler birbirine eşit mi kontrolunu sağlar ve boolean cevabını döndürür. true false
result = number1 == number2; // number1 ve ve number2 birbirine eşit olmadıgı için false değeri döner
result = number1 != number2; // != eşit değildir işaretidir ve true döner.
result = 10 === "10"; // type kontrolü yapar ve false değeri döner.
result = number3 > number2; 
result = number3 < number2; 
result = number1 >= 10; // büyükse  veya eşitse true yoksa false
result = number1 <= 10; // küçükse veya eşitse true yoksa false
/* console.log(result); */


/* 4-Mantıksal Operatörleri */
// && ve, || veya, ! tersi,


// && özelliği: 2 şartta sağlanıyorsa true yoksa false
console.log(number1 !== number2 && number1 < number2);  

// || özelliği: 1 şartı sağlıyorsa true yoksa false 
console.log(number1 !== number2 || number1 < number2);  

// ! özelliği: tersini al demek !()
console.log(!(number1 > number2) && number1 < number2);  