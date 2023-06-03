/* NaN not a number demektir */

const username = "sefasefa23";
const yas = 25;

let result;

//stringi numbera çevirenler
result = 25;
result = Number("25");
result = parseInt("25"); //küsüratı almaz
result = parseFloat("25.7") //küsüratı da alır
result = isNaN("25"); // bu bir numara mı sorusu sor ? evet true döner 
result = isNaN("a25"); // bu bir numara mı sorusu sor ? hayır false döner
result = isNaN("25a"); // bu bir numara mı sorusu sor ? evet true döner

console.log(result);

/* 2 */

let myBigNumber = 25.312312312313;
result = myBigNumber.toPrecision(5); // 5 rakamı al (yuvarlama da yapar)
result = myBigNumber.toFixed(3); // . dan sonra ki küsüratın 3 rakamını al

result = Math.round(1.4); //yuvarlama yapar 
result = Math.round(1.6); // yuvarlama yapar

result = Math.ceil(1.2); // yukarıya yuvarlar 2 çıkar (herzaman)
result = Math.floor(1.9); // aşağıya yuvarlar 1 çıkar (herzaman)

result = Math.pow(5, 3); // 5 in üssü 3 ü hesaplar üs hesaplama
result = Math.sqrt(100); // sayının karekökünü hesaplar
result = Math.abs(-100); // sayının mutlak değer hesaplar

result = Math.max(10, 5, 2, 6, 7); // en büyük sayıyı bulur
result = Math.min(10, 5, 2, 6, 7); // en küçük sayıyı bulur

console.log(result);