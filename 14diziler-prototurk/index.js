/* diziler genellikle const ile kullanılırlar */

/* arrayler 2 şekilde oluşturulur */
/* 1 */
let names = Array(1); 
/* 2 */
/* let names2 = [a, b]; */
/* ama aralarında farklar vardır */


/* let lastIndex = fruits.length -1 */ // dizinin hesaplaması -1 cıkararak bulunur 0 dan başladıgı ıcın unutma


//dizileri modifiye etme içeriğini düzenleme const olsa bile düzenlnir çünkü modifiye ettigin içeriğidir.
const numbers = [1, 2, 3, 4, 5]
numbers[0] = 10;
numbers[1] = 40;

const webLang = [
    'html',
    'css',
    'js',
    'php',
    'python',
    'sql'
]

let lastIndex = webLang.length -1;
webLang[lastIndex] = 'mongo';

console.log(webLang);


/* Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift */
/* diziyi manipüle etme yöntemleri */

const arrayler = Array(9); // 9 tane boş dizi oluşturur.
const doluArray = Array(7).fill('x') // 7 tane içinde x yazan arry oluşturduk
const doluArrayNumber = Array(7).fill(5) // 7 tane içinde 5 yazan(number) array oluşturduk

let names4 = ['sefa', 'ahmet', 'ismail', 'bilal'];
let namesVarmi = names4.indexOf('bünyamin'); //sefa varsa pozitif değer(index değeri) yoksa -1 dönderir. checkleme 

if (namesVarmi != -1) {
    console.log( 'böyle bir değer mevcut' );
} else {
    console.log('böyle bir değer mevcut değil');
}

namesVarmi != -1 ? console.log('böyle bir değer mevcut') : console.log('böyle bir değer mevcut değil');;  //ternary operatoru

const numbers9 = ['tayfun', 'sefa', 'tayfun', 'ibrahim']
console.log(numbers9.lastIndexOf('tayfun')); //son tayfunu seçer bir dizide birden çok aynı string değeri taşıyan eleman olabılır.

const varsaYoksa = ['tayfun', 'sefa', 'tayfun', 'ibrahim'];
console.log(varsaYoksa.includes('sefa')); // sefa varsa true yoksa false  büyük kucuk harf duyarlı

const varsaYoksa2 = ['tayfun', 'sefa', 'tayfun', 'ibrahim']; 
console.log(Array.isArray(varsaYoksa2)); // bu bir array mi değil mi kontrol eder yukardakini

/* const numbers = [1, 2, 3, 4, 5];
console.log(numbers.join()) // 1,2,3,4,5 */






const namess = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

console.log(namess.join()) // Asabeneh,Mathias,Elias,Brook
console.log(namess.join('')) //AsabenehMathiasEliasBrook
console.log(namess.join(' ')) //Asabeneh Mathias Elias Brook
console.log(namess.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(namess.join(' # ')) //Asabeneh # Mathias # Elias # Brook

console.log(names.slice()); // slice belli bir aralıktaki elementleri kesmeye yarar

const numbers = [1,2,3,4,5]

console.log(numbers.slice()) // -> it copies all  item
console.log(numbers.slice(0)) // -> it copies all  item
console.log(numbers.slice(0, numbers.length)) // it copies all  item
console.log(numbers.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position  // range oluşturma 1 4 arasındakileri keser getirir



const names22 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
let suankiIsimler2 = names22.splice(0, 1) // 0 ile 1 arasındakileri çıkar 
let suankiIsimler = names22.splice(0, 1, 'sefa', 'ahmet')  // 0 ile 1 arasındakileri kes ve sefa ahmeti yerine ekle

console.log(names22);  

const numbers = [1, 2, 3, 4, 5]
numbers.reverse() // -> reverse array order
console.log(numbers) // [5, 4, 3, 2, 1]

numbers.reverse()
console.log(numbers) // [1, 2, 3, 4, 5]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  webTechs.sort()
  console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]
  
  webTechs.reverse() // after sorting we can reverse it
  console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]


/* 
  Array of arrays

  Array can store different data types including an array itself. Let us create an array of arrays */
  
  const firstNums = [1, 2, 3]
  const secondNums = [1, 4, 9]
  
  const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
  console.log(arrayOfArray[0]) // [1, 2, 3]
  
   const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
   const backEnd = ['Node','Express', 'MongoDB']
   const fullStack = [frontEnd, backEnd]
   console.log(fullStack)   // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
   console.log(fullStack.length)  // 2
   console.log(fullStack[0])  // ["HTML", "CSS", "JS", "React", "Redux"]
   console.log(fullStack[1]) // ["Node", "Express", "MongoDB"]