/* JavaScript dom: js kodlarının html de kullanılması manasına gelir. */
/* document ile html etiketlerine ulaşılabilir. */

const title = document.querySelector("h1") // elemana göre al (ilk)
const title2 = document.querySelector(".h1classi") // class'a göre al(ilk)
const title3 = document.querySelector("#h1idsi") // id'ye göre al(ilk)
title.style.color = "red";  //still işlemi uyguladık
title.remove() // silme komutu
const title4 = document.getElementById('h1idsi') // direkt id ye göre al #siz


document.querySelector('p').style.backgroundColor = "red"; //bir değere atamadan da işlem yapılır.
document.querySelector('p').style.width = "90px"; //bir değere atamadan da işlem yapılır.

const paragrafYaziDegis = document.querySelector('.p').innerText = "DOM"; //yazi degis
const paragrafTagDegis = document.querySelector('.p').innerHTML = "<button>click</button>"; //tag değiş

document.querySelector("li").style.color = "purple";
document.querySelector("li:first-child").style.color = "blue";
document.querySelector("li:nth-child(4)").style.color = "red";
document.querySelector("li:last-child").style.color = "lightcoral";


//// ÇOKLU SEÇİCİLER

const listItem = document.getElementsByClassName("list-item"); //classa göre seçici
const listItem2 = document.querySelectorAll(".list-item"); // seçici
const list1 = document.querySelector(".liste") //önce seçici oluşturduk
const listItems = list1.getElementsByTagName("li"); //sonra içinden(document degisti) sectik
const listItemsQuick = document.querySelectorAll(".list2 li") // en hızlısı kolayi bu

//çokluyla işlemler nasıl yapılır ? 

for(let i = 0; i < listItems.length; i++){
    listItem[i].style.color = "red"
}

for(let list of listItems){
    list.style.color = "blue";
}