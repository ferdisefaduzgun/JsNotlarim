let ad = "sefa"
let soyad= "duzgun"
// değişkenleri yazdırırken toplama işaretiyle ard arda getirebilirsin.(eğer stringse)
console.log(ad + soyad); 



let ad2 = "sefa"
let soyad2= "duzgun"
// değişkenleri yazdırırken toplama işaretiyle ard arda getirebilirsin ve araya bişeyler (boşluk gibi) ekleyebilirsin.
console.log(ad2 + " " + soyad2); 


let $mudurAdi = "Cevdet"
let $sinifBaskani = "Mahmut"

console.log("Müdür adı: " + $mudurAdi);
console.log("Sınıf başkanı: " + $sinifBaskani);



let maas = 5000;
let zam = 0.8;
let zamliMaas = maas + maas * zam;

console.log(zamliMaas);

//sonlarina sen yinede ; koy nolur nolmaz
//sayilari tırnak içersine alma eğer number olarak almak istiyorsan 
/* string istiyorsan al */



let sayi1 = "10";   // string şeklinde yani tırnak içinde yazdığımız için toplarken yan yana getirdi toplamadı 
let sayi2 = "20";
let toplam = sayi1 + sayi2;

console.log(toplam);

let sayi3 = 10;   // tırnak içine almadığımız için number olarak algıladı ve toplama işlemi üstüne katılarak başarıyla gerçekleşti
let sayi4 = 20;
let toplam2 = sayi3 + sayi4;

console.log(toplam2);


//farkli yöntem  string numbera çevirme
let sayi5 = "10" ;           
let sayi6 = "20";
let toplam3 = Number(sayi5) + Number(sayi6);   //string değeri number gibi alma özelliği

console.log(toplam3);


//farkli yöntem  number stringe çevirme
let sayi7 = 10;
let sayi8 = 20;
let toplam4 = sayi7.toString() + sayi8.toString();

console.log(toplam4);

//booelan true false örnek
let sayi9 = 10;
let sayi10 = 20;
console.log(sayi9 > sayi10);  //sonuç false çıkar  10 20 den büyük değildir

//booelan true false örnek
let sayi11 = 10;
let sayi12 = 20;
console.log(sayi11 == sayi12);   //sonuç false çıkar  10 20 ye eşit değildir // eşittiri algılaması için iki kere yazariz .


//undifined örnek
let yeniKisi;
console.log(typeof yeniKisi);
