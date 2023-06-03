let username = "sefasefa123";
let password = "123456"

if (password.length > 3) {
    console.log("giriş yapıldı");
} else {
    console.log("giriş başarısız");
}

//ternary operator

/* 1. yöntem */
result = password.length > 3
console.log(result ? 'giriş başarıyla yapıldı' : 'giriş yapılamadı');

/* 2. yontem */
password.length > 3 ? console.log('çalıştı') : console.log('çalışmadı');