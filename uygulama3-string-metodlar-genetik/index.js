/* 1 */
let url = "ferdiduzgun.me";
let youtube = "Ferdi Sefa Düzgün";
let result;

result = url.length;
result = youtube.length;
result = youtube.replace(" ", "");
result = youtube.replaceAll(" ", "");
result = youtube.replaceAll(" ", "").length;

/* 2 */

result = youtube.split("");  //tek tek al [] içinde
result = youtube.split(" "); //kelimelere ayır [] içinde
result = youtube.split(" ").length;

result = url.split(".") //noktadan itibaren kes


/* 3 */

result = youtube.startsWith("Ferdi");  //kanal adı Ferdi ile başlıyor mu ? true 

/* if (result) {
    console.log('Evet Ferdi ile başlıyor');
} else {
    console.log('Hayır yanlış');
} */

console.log(result ? 'evet ferdi ile başlar' : 'hayır ferdi ile başlamaz');

console.log(result);


/* 4 değer kaçıncı sırada bul */

console.log(url.indexOf('me'));
console.log(url.lastIndexOf('me'));


/* 5 */


result = `${url}/${youtube.toLowerCase().replaceAll(" ", "")}`  //benim kodum wuhuuuuu  1. yöntem

youtube = youtube.replaceAll(" ", "-").toLowerCase();  // genetik 2. yontem bad
url = url.replace("me", "me/");

let newUrl = url.replace(url, url + youtube)

console.log(newUrl);





