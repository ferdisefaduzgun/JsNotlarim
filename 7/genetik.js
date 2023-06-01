/* KOŞULLAR */
/* Bu olursa bu olsun o olursa o olsun vs. */

let isLoggedIn = false;

if (isLoggedIn == true) {                   // değer true ise aşağıdakini çalıştır
    console.log('çalıştı');
}else{                                      // değer false ise aşağıdakini çalıştır
    console.log('true değil');   
}




const username = 'sefa123'
const password = '123456'

if(username == 'sefa123'){
    if(password == '123456'){
        console.log('Giriş yapıldı');
    }else{
        console.log('Şifre yanlış');
    }
}else{
    console.log('Kullanıcı adı yanlış');
}