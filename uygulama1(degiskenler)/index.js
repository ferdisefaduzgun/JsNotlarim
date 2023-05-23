/* 
let ögrenci1 = "Mert Demir";
let ögrenci1Yasi = 2001;

let ögrenci1YasiHesapla = 2023 - ögrenci1Yasi;

let ögrenci1Sinav1 = 100;
let ögrenci1Sinav2 = 90;
let ögrenci1Sinav3 = 10;

let ögrenci1SinavToplam = ögrenci1Sinav1 + ögrenci1Sinav2 + ögrenci1Sinav3; 
let ögrenci1Ortalama = ögrenci1SinavToplam / 3;
const gecerlilik = 45 

console.log("İsim :" + " ",ögrenci1, ögrenci1YasiHesapla);
console.log("Sınav ortalaması: ",ögrenci1Ortalama);
console.log("Geçerlilik: " , gecerlilik );


let ögrenci2 = "Eylül Demir";
let ögrenci2Yasi = 2002;

let ögrenci2YasiHesapla = 2023 - ögrenci1Yasi;

console.log("İsim :" + " " + ögrenci2, ögrenci2YasiHesapla); */

/* 
Öğrenci bilgileri

1- Mert Demir 
    Doğum tarihi: 2001
    pc notlari: 100, 90, 10

2- Eylül Demir 
    Doğum tarihi: 2002
    pc notlari: 60, 30, 50

geçernot: 45

şartlar:
öğrencilerin doğum tarihlerininden yaşlarını hesaplayınız 
öğrencilerin not ortalamalarını bulunuz  
öğrencilerin dersi geçip geçmediğini bulunuz
*/

let tarih = new Date().getFullYear(); //tarihi çekme kodu
let gecmeNotu = 55;

let ogr1 = "Mert Demir";
let ogr1Dogum = 2001;
let ogr1Yas = tarih - ogr1Dogum;
let ogr1ders1 = 100;
let ogr1ders2 = 90;
let ogr1ders3 = 10;
let ogr1ort = parseInt((ogr1ders1 + ogr1ders2 + ogr1ders3) / 3); //parsInt küsüratı gizlemeye yarar.
let ogr1basari = ogr1ort > gecmeNotu; 

let ogr2 = "Eylül Demir";
let ogr2Dogum = 2003;
let ogr2Yas = tarih - ogr2Dogum;
let ogr2ders1 = 50;
let ogr2ders2 = 30;
let ogr2ders3 = 10;
let ogr2ort = parseInt((ogr2ders1 + ogr2ders2 + ogr2ders3) / 3); //parsInt küsüratı gizlemeye yarar.
let ogr2basari = ogr2ort > gecmeNotu; 

console.log("İsim: ", ogr1);
console.log("Yaş: ", ogr1Yas);
console.log("Ortalama: ", ogr1ort);
console.log("Gecme Durumu: ", ogr1basari);
console.log("");
console.log("İsim: ", ogr2);
console.log("Yaş: ", ogr2Yas);
console.log("Ortalama: ", ogr2ort);
console.log("Gecme Durumu: ", ogr2basari);
