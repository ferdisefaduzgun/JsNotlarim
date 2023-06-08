//do ve do while aynı görevleri yapar ama biraz farklı


// while: sadece true ise yani koşul doğru ise çalıştırır

let i = 0
while (i <= 5) { // burdaki koşul yerine gelirse
  console.log(i)  // burayı çalıştırır
  i++
}

// 0 1 2 3 4 5 

//örnek

let names = ['sefa', 'ahmet', 'faruk'];
let index = 0;

while (index < names.length) {
    console.log('isim', names[index]);
    index++
}

do{
    console.log('isim', names[index]);
    index++
}while(100 < names.length)  // 100 namesin lenghtınden küçük olmadıgı için 1 kerelige mahsu calıstırdı




// while do: koşul true olmaza bile do daki kodu bir kere çalıştırır.

let i2 = 0
do {  // bunu 
  console.log(i2)
  i2++
} while (i2 <= 5)  // buradaki koşul true olmaza bile yukarıdaki kodu bir kere çalıştırır.

// 0 1 2 3 4 5 


for(let name of names){  //of örnek
    console.log('Ad', name);
}

//break   //işin bitince yarıda kesmek için kullanırız.
for(let i = 0; i <= 5; i++){
    if(i == 3){
      break
    }
    console.log(i)
  }
  

  for(let name of names){  
    if(name == 'ahmet'){
        break
    }
    console.log('Ad', name);
}


for(let i = 0; i <= 5; i++){    //3 e gelince hiçbişey yapma yazdırma skip at demek için contuniue kullanırız
    if(i == 3){
      continue
    }
    console.log(i)
  }
  
  // 0 1 2 4 5
