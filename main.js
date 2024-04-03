let btn = document.querySelector("button");
let section = document.querySelector("section")
let inputs = document.querySelectorAll("input")
let apiUrl = "https://fakestoreapi.com/products";


btn.addEventListener('click', function() {
fetch(apiUrl)
.then(response => response.json())
.then(response => renderer(response))


function renderer(list) {

  section.innerHTML = "";
  console.log(list);

  let filteredList = list.filter(item => item.price >= inputs[0].value && item.price <= inputs[1].value )

  console.log(filteredList);

    filteredList.forEach(item => {
        section.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.title}</h5>
      <p class="card-text">Price:${item.price}</p>
      <p class="card-text">Price:Category:${item.category}</p>
    </div>
  </div>
    `
    })

    
}

})



