
/* uygulama 1 */
let yas = 18;
let mezuniyet = "üniversite"

if (yas >= 18 && mezuniyet == "üniversite"){
    console.log("Ehliyet alabilirsin");
} else {
    console.log("Ehliyet alamazsın");
}


/* uygulama 2 */
let yas2 = 18;
let mezuniyet2 = "üniversite"

if (yas2 >= 18 && (mezuniyet2 == "lise" || mezuniyet2 == "üniversite")){
    console.log("Ehliyet alabilirsin");
} else {
    console.log("Ehliyet alamazsın");
}



/* uygulama 3 */
let yas3 = 17;
let mezuniyet3 = "üniversite"

if (yas3 >= 18 && (mezuniyet3 == "lise" || mezuniyet3 == "üniversite")){
    console.log("Ehliyet alabilirsin");
} else if(yas3 === 17){
    console.log("dayan son bir senen");
} 
else {
    console.log("Ehliyet alamazsın");
}