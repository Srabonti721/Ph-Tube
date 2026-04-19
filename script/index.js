function loadCategories () {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res =>res.json())
    .then(data => displayCategories(data.categories)
    )
}

function displayCategories(categories){ 
const categoriContainer = document.getElementById("categories-container");

for(const cat of categories){
const div = document.createElement("div")
div.innerHTML = `
 <button class="btn-sm btn hover:bg-[#FF1F3D] hover:text-white">${cat. category}</button>
`
categoriContainer.append(div)
}
}
loadCategories()