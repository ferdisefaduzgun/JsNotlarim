/* kod okunabilirliği arttırmak ve daha az kod yazmak için kullanılır */

/* eski JavaScript'te fonksiyonları "function" ile tanımalarken artık, arrow fonksiyonlar ile "=>" şeklinde tanımlanır. */

//! Arrow 
//? eski ve uzun yontemler
function sayHello2(){
    console.log('hello1');
}
sayHello2()

//? eski ve uzun yontemler
const sayHello3 = function sefa(){
    console.log('hello2');
}
sayHello3()

//? yeni
const sayHello = () => {     
    console.log('hello3');
}
sayHello()

//? yeni tek satırda
const sayHello4 = () => { console.log("hello4"); }
sayHello4()

//? yeni ve parametreli
const sayhello5 = (param) => { console.log(`Hello ${param}`); }
sayhello5("Sefa")

//! Array metodlari
//map()  forEach yerine kullanılabilir // her eleman için bir işlem yapar // döndürme olaylari
const sayilar1 = [1,2,3,4,5,6,7,8];
const kareleri = sayilar1.map((x) => x * x); // x sayilar arrayindeki her bir elemani temsil eder 
console.log(kareleri);

//filter() filtreleme yaparak eleman seçmeye çekmeye ve işlem yapmaya yarar(çoklu)
const sayilar2 = [1,2,3,4,5,6,7,8,9];
const ciftSayilar = sayilar2.filter((x) => x % 2 === 0); // % bölümünden kalan'ı bulmaya yarayan işaret eğer 0 sa (çiftler) onları ver.
console.log(ciftSayilar);

//reduce() toplama işlemidir. 
const sayilar3 = [1,2,3,4,5];
const sum = sayilar3.reduce((a, x) => a + x, 0) //a suankı deger // en sağdaki 0 başlangıç değeri 0 a nın yerine geçiyo her döndüğünde yükseliyo manasında
console.log(sum);

//find() içerisinden 1 tane (tekli) değer bulmak için kullanılır (filter gibi ama tekli)
const sayilar4 =[1,2,3,4,5];
const bul = sayilar4.find((x) => x > 2); //2 den büyük olan ilk sayıyı verir. (tekli buldu)
console.log(bul);

//some()  içinde x değeri var mı yok mu? kontrolü için yapariz boolean(true,false) değerler döner.
const sayilar5 = [1,2,3,4,5,6,7,8,9];
const bulBakalim = sayilar5.some((x) => x > 10) // 10dan büyük sayı  var mi ? 
console.log(bulBakalim); //false

//every() bu method array içindeki TÜM elemanlarin belli bir kritere uyup uymadığını kontrol ederek boolean sonuç verir(true,false)
const sayilar6 = [1,2,3,4,5,6,7,8,9];
const hepsi = sayilar6.every((x) => x < 10) //hepsi 10 dan küçük mü ? 
console.log(hepsi); //true

//! spread operatörü 
//...hepsini almayi kasteder /// kopyalamayı
const array1 = [1,2,3,4,5,6];
const array2 = [...array1,7,8,9]; //... ile içine ekledik
console.log(array2);

const sayilar7 = [1,2,3,4];
const toplama = (x, y, z) => x + y + z;
const sonuc = toplama(...sayilar7); //bu şekilde de kullanabiliriz fonksiyonlarla
console.log(sonuc);

const information = { name: "Sefa", age:30};
const ekleme = {...information, job: "developer"} // eklemeye inf ekledik ve yeni özellik ekledik.
console.log(ekleme);

const information2 = {name: "Sefa", age: 21};
const ekleme2 = { name: "Ahmed", job: "developer", ...information2} //ahmedi değiştik üstüne yazdık, yani ekleme2 nin üzerine yazdık.
console.log(ekleme2);

//! destruction
const information3 = {name: "Sefa", age: 22, job: "developer"}; //yeni obje açtık
const {name, age} = information3;  //değiştirdik ve sadece name ve age keyleri ve değerlerini kullanacağımızı belirttik.
const newInf = {name, age, location: "New York"};
console.log(newInf); 

//key ismi değişme
const obj1 = {name: "Sefa", surname: "Duzgun"};
const { name: firstName } = obj1;
console.log(firstName);

//rest operatoru 
const sayilar8 = [1,2,3,4,5,6,7];
const [first, second, ...rest] = sayilar8; //first second ve rest değişebilir // const [a, b, ...z] = sayilar8; de olurdu
console.log(first);
console.log(second);
console.log(...rest);

//spread bir örnek 
const obj = {name1: "John", age1: 30, job: "Developer"};
const {name1, age1} = obj;
const newObj = {name, age, location: "New York", ...obj};
console.log(newObj); // { name: "John", age: 30, location: "New York", job: "Developer" }

//! MAPS
//özellikle verilerin saklanması ve erişilmesi için çok kullanışlı
//key-value pair'ları saklar ve bu pair'ları hızlı bir şekilde erişebilir.
const map = new Map();
map.set("name", "Sefa") //sol taraf key / sağ taraf value
map.set("age", 30)
map.set("job", "developer");
//ulaşmak için
console.log(map);
console.log(map.get("name")); //bu şekilde de ulaşırız // spesifik ulaşma

//? delete() ile sileriz
map.delete("job"); //işi sildik
console.log(map);

//? yenilemek için forEach
map.forEach((value, key) => console.log(`${key}: ${value}`));


//! SETS  keylere göre işlem 
//unique değerlerin saklanması için kullanılır.
const set = new Set();
set.add(1);
set.add(2);
set.add("sefa");
set.add(2); //tekrar eklemez cünkü var
console.log(set);

//var mı yokmu kontrol boolean
console.log(set.has(2)); //true

//silme
set.delete(2);
console.log(set);

//forEach
set.forEach(value => console.log(value));

