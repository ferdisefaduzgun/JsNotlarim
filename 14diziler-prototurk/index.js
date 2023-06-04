/* diziler genellikle const ile kullanılırlar */

/* arrayler 2 şekilde oluşturulur */
/* 1 */
let names = Array(); 
/* 2 */
let names2 = [a, b];
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
