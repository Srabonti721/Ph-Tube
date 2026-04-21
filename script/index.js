function removeActiveClass() {
    const activeBtn = document.getElementsByClassName("active");
    for (let active of activeBtn) {
        active.classList.remove("active")
    }
}

function loadCategories() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.categories)
        )
}

function displayCategories(categories) {
    const categoriContainer = document.getElementById("categories-container");

    for (const cat of categories) {
        const div = document.createElement("div")
        div.innerHTML = `
 <button id='btn-${cat.category_id}' onclick="loadCategoriesVideo(${cat.category_id})" class="btn-sm btn hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>
`
        categoriContainer.append(div)
    }
}

function loadVideo() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(response => response.json())
        .then(data => {
            removeActiveClass()
            document.getElementById('all-btn').classList.add("active")
            displayVideo(data.videos)
        })
}
const displayVideo = (videos) => {
    const videoContainer = document.getElementById("video-container");
    videoContainer.innerText = " ";

    if (videos.length == 0) {
        videoContainer.innerHTML = `
        <div class="col-span-full flex flex-col justify-center items-center text-center py-20">
        <img class="w-[120px]" src="assest/Icon.png" alt="">
        <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
</div>
        `
        return;
    }

    videos.forEach((video => {
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
  <button onclick="loadVideoDetails('${video.video_id}')" class="btn btn-block">show details</button>
</div>
        `
        videoContainer.append(videoBox)
    }))
}
const loadCategoriesVideo = (id) => {
    const url = ` https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            removeActiveClass()
            const clickedBtn = document.getElementById(`btn-${id}`)
            clickedBtn.classList.add("active")

            displayVideo(data.category)
        })
}

const loadVideoDetails = (videoID) =>{
const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoID}`
fetch(url)
.then(res => res.json())
.then(data =>displayVideoDetails(data.video)
)
}

const displayVideoDetails = (video) =>{
    console.log(video);
     document.getElementById("videoDetails").showModal();
     const detailsContainer = document.getElementById("details-container")
     detailsContainer.innerHTML=`
     <div class="card bg-base-100 image-full shadow-sm">
  <figure>
    <img class="w-full "
      src="${video.thumbnail}"
      alt="thumbnail" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.description}</p>

  </div>
</div>
     `
}

loadCategories()
