/*
oop = nesne yonelimli programlamadır.
karmaşık kodları bir kalıba sokmak için yani bir düzenle yazmamızı sağlar
okunabilir kodlar yazmak için kullanılır
https://www.bilgisayargenetigi.com/blog-details/javascriptte-nesne-yonelimli-programlama
*/

/* birden fazla özelliğimiz(key,value değerimiz ) varsa object yani nesneleri kullanırız.*/

//1 nesne,property,key,value
 let araba2 = {   //anahtar, değer (key,value)
    renk: "mavi",//bunlar propertylerdir. nesnenin içinde bulunanlara denir. bilgileri saklar.
    hiz: 0,
};

console.log(araba2.hiz);//0


//method
let araba = {
    renk: "siyah",
    hız: 0,
    hızlandır: function() { //objenin içinde function kullanımına method denir
        this.hız = this.hız + 10; //veya += 10;     // this araba nin içindeki değerleri temsil eder
    }
};
araba.hızlandır(); //burda fonksiyonu çağırdık/kullandık
console.log(araba.hız); // 10 

let bilgisayar = {
    marka: 'casper',
    fiyat: 10,
    zamliFiyat: function (deger) {
        this.fiyat += deger;
    },
}

bilgisayar.zamliFiyat(40);
console.log(bilgisayar.fiyat);

//consttractor ES5 VERSİYON
//başlangıç değerleri ayarlama

function Kalemler(marka2){  //baş harfi buyuk olur
    this.marka2 = marka2;   //constratcor buralardir
    this.uçlar = 0;
}

Kalemler.prototype.degistir = function(deger){
    this.uçlar += deger;
}

const kalemler = new Kalemler("faber-castel")
console.log(kalemler.marka2);

kalemler.degistir(10)
console.log(kalemler.uçlar);

//ES6 VERSİYON bu kullanılır
//func açmaya gerek yok class kullan direkt

class Araba4 {
    constructor(renk){
        this.renk = renk;
    }
} 

let araba4 = new Araba4("mavi")
console.log(araba4.renk);


//class içinde metod
class Araba5 {
    constructor(renk){
        this.renk = renk;
        this.hiz = 0;
    }

    hizlardir(deger2){
        this.hiz += deger2;
    }
}

let araba5 = new Araba5("siyah") //yeni oluşturuyoz  //örnekleme instantiation

araba5.hizlardir(20);
console.log(araba5.hiz,);
console.log(araba5.renk);

//mor olan method (function)
//mavi olan özellik property


//inheritance  kalıtım
//başka bir classdaki özellikleri kullanmaya denir 
//aynı şey kullanacaksan öncekini değiştirmeden alıp üstüne bişey katıp 2. bi kod blogu yazmaya denir

class Araba6 {
    constructor(renk){
        this.renk = renk;
    }
}

class MotorluAraba extends Araba6 { //alıntı yapacağımız classı yazıyoruz extends le
        constructor(renk, motor){ //  
            super(renk);  //alacağın oz. superin içine yazyaz
            this.motor = motor;
        }
}

let araba6 = new Araba5("siyah");
let motorlu = new MotorluAraba("kırmızı", "benzinli motor")
console.log(motorlu.motor);
console.log(motorlu.renk);

//encapsulation (kapsülleme) dışarıdan ulaşmayı engellemek için yapılır
// başına # işareti koyarsak unddifined verir

class Araba7 {
    #renk;
    constructor(renk){
        this.#renk = renk;
    }

    getRenk(){  //istersek bu şekilde çağırabiliriz
        return this.#renk
    }

    setRenk(renk){
        this.#renk = renk;
    }
}

const araba7 = new Araba7("red");

console.log(araba7.renk);
console.log(araba7.getRenk()); // bu şekilde çağırırız
araba7.setRenk("pembe") // set ettik 

console.log(araba7.getRenk()); // getle çağırdık


//çok biçimlilik polymorphism
class Shape {
    draw() {
        console.log("Şekil çiziliyor.");
    }
}
class Circle extends Shape {
    draw(radius) {
        console.log(`${radius} radiuslu bir daire çiziliyor.`);
    }
}
let shape = new Shape();
let circle = new Circle();
shape.draw(); // "Şekil çiziliyor."
circle.draw(5); // "5 radiuslu bir daire çiziliyor."

class Calculator {
    add(a, b) {
        return a + b;
    }
    add(a, b, c) {
        return a + b + c;
    }
}

let calculator = new Calculator();
console.log(calculator.add(1, 2)); // Output: 3
console.log(calculator.add(1, 2, 3)); // Output: 6


//abs typescript
class Database {
    constructor(data) {
        this._data = data;
    }
    getData() {
        return this._data;
    }
    setData(value) {
        this._data = value;
    }
}

class DataController extends Database {
    constructor(data) {
        super(data);
    }
    getData() {
        return "Data: " + super.getData();
    }
}

let dataController = new DataController("Database Data");
console.log(dataController.getData()); // "Data: Database Data"