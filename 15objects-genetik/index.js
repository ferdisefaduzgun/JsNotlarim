
/* objeler / objects */

let customer1 = {
  "ad": "Sefa",  // objeler "key": "value"  şeklinde yazılır. burada key ad value ise sefa değeridir.
  "soyad": "Düzgün",
  "yas": 25,
};

let customer2 = {
    "ad": "Sefa",  // objeler "key": "value"  şeklinde yazılır. burada key ad value ise sefa değeridir.
    "soyad": "Düzgün",
    "yas": 25,
    "ürünler": [
        "laptop", "car", "phone"
    ]
  };

  let customer3 = {
    "ad": "Sefa",  // objeler "key": "value"  şeklinde yazılır. burada key ad value ise sefa değeridir.
    "soyad": "Düzgün",
    "yas": 25,
    "ürünler": {
        "laptop": "casper",
        "price": 10
    }
  };

let customers = [   //tüm müşterileri listeleme
    customer1,
    customer2,
    customer3
]
console.log(customers);


/* console.log(customer2.ürünler); */
console.log(customer3.ürünler.laptop);

let urunler = [
    {
        "urun1": "ıphone",
        "fiyat": "10tl"
    },
    {
        "urun2": "samsung",
        "fiyat": "15tl"
    },
    {
        "urun1": "casper",
        "fiyat": "20tl"
    }
]

console.log(urunler);
console.log(urunler[0].fiyat);