let products = ['samsung', 'apple', 'gm4']
let result;


//array to string
/* result = products.join("/"); */ // aradaki virgülleri(veya ayraçları) join ile / a çevirdik. ayrıca array'dan stringe de çevirdik.

//arrayden(dizilerden) ürün silme eleman silme
//result = products.shift(); // ilk elemanı siler
//result = products.pop(); // son elemanı siler

//diziye eleman ekleme
result = products.push("xiomi") // en sona yeni bir eleman ekler
result = products.unshift("vestel venüs") // ilk başa yeni eleman ekler

//dizi birleştirme 
let urunler1 = ['dell' , 'casper'];
let urunler2 = ['lenovo', 'acer'];
let urunler3 = ['hp', 'asus'];

result = urunler1.concat(urunler2, urunler3); //concat ile arrayleri birleştirme işlemi yaparız.

// result = urunler1.splice(0, 0, urunler2); // urunler 2 yi ekleme metod 2
// result = urunler1.splice(0, 0, "elma");  // elmayı ekleme string ekleme metod 2
result = urunler1.splice(0, 2);  // silme 


console.log(products);
console.log(result);
