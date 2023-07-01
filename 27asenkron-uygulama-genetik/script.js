
const postListDOM = document.querySelector(".post-list"); //post listi aldık
const postUI = (posts) => {  //arrow functionla fonksiyon açtık ve posts param verdik
  let result = "";  //result diye bir değişken oluşturduk
  posts.forEach((post) => {  // posts diye bir parametre oluşturduk onu data yaptık . içindeki dönen her değere post adı verdik 
    result += `
  <li class="post-item">
    <div class="post-body">
      <span class="post-id">Post Id: <b>${post.id}</b></span>
      <strong class="post-title">${post.title}</strong>
      <p class="post-content">${post.body}</p>
    </div>
    <button class="post-button">Read More</button>
  </li>`;
    postListDOM.innerHTML = result;
  }); // result ile her oluşturduğumuzda yeni bir result açıcak yani içindekileri
};

        //! verileri çekmek için 1.metod ajax
/*      const xhr = new XMLHttpRequest();
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts")
        xhr.onload = function () { // onload = yüklendiğinde 
        const response = xhr.responseText;
        const data = JSON.parse(response);
        postUI(data);
        }

        xhr.send(); // çağırma fonksiyonu  
*/
       //! Fetch
/*  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => postUI(data))
  .catch((error) => console.log(error)); */

//! Async & Await

const getData = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  postUI(data);
};

window.addEventListener("DOMContentLoaded", () => {
  getData();
});
