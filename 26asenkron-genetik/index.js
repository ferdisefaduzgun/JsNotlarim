/* asenkron aynı anda birden çok işlemi gerçekleştirme anlamına gelmektedir */


//!asenkron programlama
console.log("1. işlem");
setTimeout(() => {
    console.log("2. işlem");
}, 2000);   //2 saniye sonra işlem gelir ve 3. sıraya geçer bu işlem beklerken arkada diğer işlemler olur
console.log("3. işlem");

//!callback fonksiyonu (asenkron programlama)
//sıralı işlemleri gerçekleştirmek için
//dışarıdan vereceğimiz fonskiyonun değişme ihtimaline karşı callback kullanırız.
//öncesinde sonrasına işlem sırasını değişmek için kullanırız.
function sayHello(name, callback) {
    console.log(`Hello ${name}`);
    callback()
}

function goodBye() {
    console.log("Görüşmek Üzere");
}

sayHello("sefa", goodBye);

//!ajax ve hhtp istekleri
//api verileri json formatında tutar 
//json formatındaki veri array olarak tutulduğundan js ile çağırıp/alıp istediğimiz şekilde kullanabileceğimiz kodlar yazarız(array metodlarıyla)
//arka plan verileri almak ve göndermeye ajax denir
//önceden xml şimdi ajax kullanıyoruz

//?HTTP İSTEKLERİ//METODLARİ
//GET = VERİLERİ ÇEKME/ALMA
//POST = VERİ GÖNDERME/EKLEME
//PUT =  VERİLERİ GÜNCELLEMEK İÇİN
//DELETE = VERİLERİ SİLMEK İÇİN

//
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users"); //önce method, sonra url
xhr.onload = function () {
    const response = xhr.responseText;
    // console.log(response); //eğer bilgilerin response text adlı yerde olduğunu bilmiyosan sadece xhr yi oku  //response string olarak çekilir, arrye çevirmek için
    const withParse = JSON.parse(response)  // array'e çevirdik
        if (xhr.status === 200) {
            console.log(withParse);
        }else{
            console.log('Hata oluştu: ' + xhr.status);
        }
}

xhr.send()

//?status kodları
//status = dönen sonuçların kodlarıdır 
//status = 200 = başarılı demek

//amma ve lakin bunlar eskidi bu yöntemleri çok kullanmayız 

//! json nedir ? 
/* {
    "title": "JavaScript: The Good Parts",
    "author": "Douglas Crockford",
    "price": 15.99,
    "tags": ["JavaScript", "Programming", "Web Development"],
    "published": true
  } */


//!promise
// başarılıysa resolve  başarısızsa reject döner.

/* new Promise(resolve) */



let number = Math.floor(Math.random() * 100);
if(number % 2 === 0){
    console.log(number + " çift sayı");
}else{
    console.log(number + " tek sayı");
}

function getRandomNumber() {
    return new Promise((resolve, reject) => {
        let number = Math.floor(Math.random() * 100);
        if(number % 2 === 0){
            resolve(number);
        }else{
            reject(`Hata ${number} sayısı tek bir sayıdır`)
        }
    })
}

getRandomNumber()
.then(number => console.log("Çözümlendi:" + number)) //resolve ise then ile sıraya koyduk ayarladık
.catch((error) => console.log(error)); //yanlışsa catch ile yakaladık ve ne yapması gerektiğini söyledik

//süre ekledik
function getRandomNumber() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let number = Math.floor(Math.random() * 100);
            if(number % 2 === 0){
                resolve(number);
            }else{
                reject(`Hata ${number} sayısı tek bir sayıdır`)
            }
        }, 1000);
    })
}

getRandomNumber()
.then(number => console.log("Çözümlendi:" + number)) //resolve ise then ile sıraya koyduk ayarladık
.catch((error) => console.log(error)); //yanlışsa catch ile yakaladık ve ne yapması gerektiğini söyledik

//then leri arttırarak bir sıraya sokarız ve sıralı biçimde çalışmasını sağlarız.


//daha da kısa yolu 
//! Fetch 
fetch("https://jsonplaceholder.typicode.com/users") //veriyi direkt bu şekilde aldık.
//xxx.json() = arraya çevirme (jsde kullanabileceğimiz)
.then(response => response.json()).then(data => console.log(data)).catch(error => console.log(error));

//sıralama mantğını yapma nedenimiz sunucuya bağlanırken ınternet yavaşlığı veya sunucuda bir sorun çıktıysa veya kullanıcının interneti yavaşsa diye aşama aşama yaptık.
//süreli yaparsak sunucudan verinin kaç sn de geleceğini bilemeyiz oyuzden bu metodlar uygulanır.

//! Async & Await 
//fetch'e alternatif yöntem
// async bir fonksıyonun asenkron oldugunu belirtir
// promise kullanır ve işlem tamamlanana kadar diğer aşamaya geçmez




async function getData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json(); //arraya çevirme (jsde kullanabileceğimiz)
    console.log(data);
}

getData()


//arrow func ile

const getData2 = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json(); //arraya çevirme (jsde kullanabileceğimiz)
    console.log(data);
}

getData2()


//hata'(hata koymalı)lı versiyon
//try ile çalışan catch ile hata çıkarsa ne olacağı
async function fetchUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  //https://youtu.be/ZkGpNadhfIc?list=PLdz-gps4GThx8ShOctECPgFZNoH09hX6b&t=3216
  fetchUsers();
