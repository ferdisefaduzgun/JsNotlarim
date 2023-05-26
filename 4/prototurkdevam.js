let name1 = ['s', 'e', 'f', 'a']
name1[1] = 'a'

console.log(name1.length);

let name2 = ['s', 'e', 'f', 'a']
console.log(name2.length - 1); //son karakteri secme

//js programlamada sıralama/counting 0 dan başlar.


let word = "prototurk"
console.log(word.toUpperCase()); // büyük harfe çevirme

let word2 = "PROTOTURK"
console.log(word2.toLowerCase());  //küçük harfe çevirme

let word3 = "sefaduzgun"
console.log(word3.substr(4 , 6)); // 4. harften başla ve 6 karakter göster

let word4 = "sefaduzgun";
console.log(word4.substring(4,7)); // range

let name3 = "sefazoro";
console.log(name3.split('')); // ayır

let name3_5 = "sefa zoro2"
console.log(name3_5.split(2)); // ayır

let name4 = "sefa"
console.log(name4.split('').reverse()); // tersine çevir

let name5 = "sefa"
console.log(name5.split('').reverse().join('')); // birleştir

let name6 = " sefa "
console.log(name6.trim()); // boşlukları kaldırma

let name7 = "sefa ile js ogren"
console.log(name7.includes('ile'));  // bir dizenin içinde arama yapma  // true false döndürür // ile varsa true yoksa false

let name8 = "30 days of js"
console.log(name8.replace('js', 'python'));// değiştirme

let name9 = "30 days of js ve js ve js"
console.log(name9.replaceAll('js', 'python'));// tüm js leri değeişme değiştirme

let name10 = "sefa duzgun ıle js"
console.log(name10.charAt(3)); // [] bunla seçtiğimizi charat ile de seçebiliriz, seçip işlemler uygulayacağız ilerde

let name11 = "sefa duzgun ıle js"
console.log(name11.charCodeAt(5)); // ascii nosunu söyler

let name12 = "sefa duzgun ile js"
console.log(name12.indexOf('duzgun')); // seçici//  duzgun değerini bulur

let name13 = "sefa duzgun ile js ve js"
console.log(name13.lastIndexOf('js')); // seçici// son jsi bulur sonucu döndürür

let name14 = "sefa duzgun ıle js"
console.log(name14.startsWith('sefa')); //sefa ile baslıyosa true yoksa false

let name15 = "sefa duzgun ıle js"
console.log(name15.endsWith('sefa')); //sefa ile bitiyosa true yoksa false

let name16 = "sefa duzgun ile js"
console.log(name16.search('duzgun')); // arama yapar (kelime veya harf)

let name17 = 'sefa DUZGUN ile js ogrenıyorum'
console.log(name17.match(/duzgun/gi));  // g global olarak heryerinde ara demek  // i büyük küçük harf duyarlı demek 
                                        // iki tane slash arasında yazılır 

let name18 = "sefa"
console.log(name18.repeat(10)); // tekrarlama 10 defa tekrarlar mesela    

let numara = "5.5"
let numBolme = parseInt(numara) 
console.log(typeof numara);
console.log(typeof numBolme); //parsintle stringden numbera çevirdik ve küsüratı kaldırdık
console.log(numBolme);

let numara2 = "5.5"
let numBolmeme = parseFloat(numara2)
console.log(numBolmeme);   // stringden numbera çevirdik ve küsüratı da aldık
console.log(typeof numBolmeme);

let num1 = "5.5";
let stringToNum = Number(num1);
console.log(typeof stringToNum); 
console.log(stringToNum);  //2. yöntem numbera cevirme ama küsüratı da alır

let num2 = "5.5"
let stringToNum2 = +num2
console.log(typeof stringToNum2); // 3. yöntem başına + koyarak numaraya çevirdik


