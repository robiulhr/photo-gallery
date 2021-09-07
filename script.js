let imagecontainer = document.getElementById("image-container")
let buttoncontainer =document.getElementById("button-container")
let loader = document.getElementById("loader")

const apiKey = "FBU7sxgiVi6nmwj5JFtZoSygXRTDtaw6otvbeN7kdDI"
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=30`

let imageData = []

function displayPhotos (){
    imageData.forEach(image => {
      // creating ancor tag
          const imgLink = document.createElement("a");
          imgLink.setAttribute("href",image.urls.regular)

        //   imgLink.setAttribute("download",image.urls.regular)
        // creating download button
        // const downloadBtn = document.createElement("a")
        // downloadBtn.setAttribute("type","submit")
        // downloadBtn.setAttribute("class","btn")
        // // downloadBtn.setAttribute("class"," second")
        // downloadBtn.innerText = "Download"
        // creating image
        const img = document.createElement("img");
        img.setAttribute("title",image.alt_description)
        img.setAttribute("src",image.urls.regular)
        // appending child
        imgLink.appendChild(img)
        imagecontainer.appendChild(imgLink)
        // imgLink.appendChild(downloadBtn)



        //   console.log(image.urls.regular);
    });
}


async function getPhotos (){
   try{
        const response = await fetch(apiUrl)
       imageData = await response.json()
        console.log(imageData);
         displayPhotos()
        loader.hidden = true
         imageData = []
   }catch(err){
    console.log(woops, err);
   }
}
getPhotos()
                
                
  document.getElementById("button").addEventListener("click",getPhotos)

  window.addEventListener('scroll',()=>{
    // console.log(window.scrollY) //scrolled from top
    // console.log(window.innerHeight) //visible part of screen
    console.log("event fired");
    if(window.scrollY + window.innerHeight >= 
    document.documentElement.scrollHeight){
     
     setTimeout(()=>{
         
      loader.hidden = false
      getPhotos()
      loader.hidden = true
     },2000)

      setTimeout(()=>{
           buttoncontainer.style.display = "flex"
      },1000)
    }
})