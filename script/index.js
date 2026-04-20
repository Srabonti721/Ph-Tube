

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

function loadVideo (){
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(response => response.json())
    .then(data => displayVideo(data.videos))
}
const displayVideo = (videos) =>{
    const videoContainer = document.getElementById("video-container");
    videos.forEach((video =>{
        const videoBox = document.createElement("div")
        videoBox.innerHTML = `
        <div class="card bg-base-100">
  <figure class="relative">
    <img class="w-full h-[150px] object-cover"
      src="${video.thumbnail}"
      alt="video" />
      <span class="absolute bottom-2 right-2 text-sm text-white bg-black rounded-md p-1 ">3hrs 56 min ago</span>
  </figure>
  <div class="flex gap-3 px-0 py-5">
<div class="profile ">
    <div class="avatar">
  <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2">
    <img src="${video.authors[0].profile_picture}" />
  </div>
</div>
</div>
<div class="intro">
    <h2 class="text-sm font-bold">${video.title}</h2>
    <p class="text-sm text-gray-400 flex gap-1">${video.authors[0].profile_name}
        <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">
    </p>
    <p class="text-sm text-gray-400 ">${video.others.views} view</p>
</div>
  </div>
</div>
        `
        videoContainer.append(videoBox)
    })) 
}


loadCategories()
loadVideo()