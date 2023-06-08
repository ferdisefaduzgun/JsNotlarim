/* Döngüler */
/* Javascripte belli bir koşula bağlı olarak kodu çalıştırması , bir döngü içersinde  */

let meyveler = ["elma", "armut", "kiraz", "muz", "karpuz"];

/* console.log(meyveler[0]);
console.log(meyveler[1]);
console.log(meyveler[2]);
console.log(meyveler[3]);
console.log(meyveler[4]); 
*/
//böyle uzun uzadıya yazmak yerine (belkide 10k meyve var) kısa yöntemle yapmaya dongu sistemi denir.

for(let i = 0; i < meyveler.length; i++){       //i++ demek i = i + 1 demektir istersek boyle de yazabiliriz.
    console.log(meyveler[i]); 
}                                               // let i = 0;  bu kısım kaçtan başlayacağı 
                                                // i < meyveler.length;  bu kısım koşulun ne olduğu (döngü ne koşula göre ve kaça kadar sürücek)
                                                // i++ bu kısım ne yapılacağı nı anlatır.


for(let i = 0; i <= 100; i = i + 1){ // <= 100 de dahil yani i 0 başta 100 den küçük veya eşit olana kadar döngüyü devam ettir demektir.
    console.log(i);
}

for(let i = 90; i <= 100; i = i + 1){ /* bu örnekte başlangıç değerini 90 yaptık */
    console.log(i);
}

for(let i = 0; i <= 100; i = i + 2){ /* her defasında 2 ekledik bu sefer de */
    console.log(i);
}


//sayi toplama
let sayilar = [10, 20, 30, 500, 900];
for(let index in sayilar){ //sayilarin index değerini bulma / i yerine index yazdik yani anlaşılır olsun diye // burda olay in kodunun index değerini bulması 
    console.log(index);
} 

//sayi toplama ayni
toplam = 0;
let sayilar2 = [10, 20, 30, 500, 900];
for(let i in sayilar2){ 
    console.log(toplam += sayilar[i]);
} 

/* yukaridaki ikisi kısayollardi kisayollarla devam */  /* index ve i aynı şeyler */
// aşağıdaki örnekte direkt içeriğini aldı hiç uğraşmadı 
let sayilar3 = [10, 20, 30, 500, 900];
let toplam2 = 0;
for(let index of sayilar3){
    console.log(index);
}

let sayilar4 = [10, 20, 30, 500, 900];
let toplam4 = 0;
for(let index of sayilar4){
    console.log(toplam4 += index);
}


// object ile döngü

/* const user = {
    "ad": "Sefa",
    "soyad": "Düzgün",
    "email": "ferdiduzgun9@gmail.com",
    "yas": 21
}

for(let key in user){
    console.log(user[key]);
}
 */
// çoklu kullanıcı


let users =[
    {
        "id": "1",
        "ad": "Sefa",
        "soyad": "Düzgün",
        "email": "ferdiduzgun9@gmail.com",
        "yas": 21
    },
    {
        "id": "2",
        "ad": "İrem",
        "soyad": "Düzgün",
        "email": "ferdiduzgun9@gmail.com",
        "yas": 21
    },
    {
        "id": "3",
        "ad": "Ece",
        "soyad": "Düzgün",
        "email": "ferdiduzgun9@gmail.com",
        "yas": 21
    },
]

/* console.log(users[0].ad);
console.log(users[1].ad);
console.log(users[2].ad); */

for(let i = 0; i < users.length; i++){
    console.log(users[i].ad);
}
