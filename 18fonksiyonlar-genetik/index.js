/* belirli bir işlemi yapmak için bir fonksiyon tanımlarız ve o işi yapması için onu çağırır kullanırız. */
/* kodları tekrar etmemek için kolaylık olsun diye kullandığımız özelliktir */
/* dry = dont repeat yourself */

function yeniOzellık(){    // () içine parametre yazılır
    console.log('çalıştı');
}

yeniOzellık()  //fonsiyonu kullandık


//////////////////////////////////////////////////////////////////

function parametreKullanimi(num1, num2) {  //parametre belirledik
    console.log(num1, num2); //konsola ne döneceğini ne yapacağını söyledik // şuanlık sadece yazdırıyoruz
}

parametreKullanimi(10, 20) // sayıyı verdik ve çıktısı 10,20 olacaktır.

//////////////////////////////////////////////////////////////////

function parametreKullanimi2(sayi1, sayi2){
        let toplam = sayi1 + sayi2;
        console.log(toplam);
}

parametreKullanimi2(50, 1500) // burdaki sayilari toplayacaktir.

/*function içersinde oluşturduğumuz let const gibi değerler içeriyi bağlar dışarıdan çağırılırsa kullanılmaz,
ama dışarıdan oluşturulan let veya const değeri fucntion içerisinde kullanılabilir.*/

///////////////////////////////////////////////////////////////////////

function cokluAlma(...sayilar) {  /// ... çoklu değer alma görevini görür.
    console.log(sayilar);
}

cokluAlma(10,20,30,40,50) // yazdırılan bu değerler arry içersine alınır.


///////////////////////////////////////////////////////////////////////

function cokluAlipIslem(...sayilar2) {
    let toplam = 0;
    for(let sayi of sayilar2){
        console.log(toplam += sayi);
    }
}

cokluAlipIslem(10, 20, 500)

////////////////////////////////////////////////////////////////////
let toplam = 0;
function cokluAlipIslem2(...sayilar2) {
    for(let sayi of sayilar2){
        toplam += sayi;
    }
}

cokluAlipIslem2(10, 20, 500,200000)
console.log(toplam); //dışardan yazdırma olayı

///////////////////////////////////////////////////////////////////
//yas hesaplama 
 
/* function yasHesapla(dogumYili) {
    let bugunkuTarih = new Date().getFullYear();
    console.log(bugunkuTarih - dogumYili);
}

yasHesapla(2002) */


function yasHesapla(dogumYili) {
    
    let bugunkuTarih = new Date().getFullYear();
    return bugunkuTarih - dogumYili;  // bu kodu en son sonuç olarak al demektir. bir değişkene atarken kullanırız.
}

const hesapla = yasHesapla(2001)

console.log(hesapla);
