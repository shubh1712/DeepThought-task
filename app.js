import  data  from "./data.js"

const taskList = document.querySelector('.task-list')

const getTaskAssets = data.tasks[0].assets

const  loadData = () => {
    getTaskAssets.forEach((asset)=>{
        const li = document.createElement('li')
        li.setAttribute('class','task-items')
        li.innerHTML = asset.asset_title
        taskList.appendChild(li)
    })
}
window.addEventListener('load',loadData)



const grid =  document.querySelector('.grid ')

const populateGrid = () =>{


    getTaskAssets.forEach((asset)=>{
        const title = asset.asset_title
        const desc = asset.asset_description
        const url = asset.display_asset_url
        const image = asset.display_asset_image
        const video = asset.display_asset_video
        const docs = asset.display_asset_docs

        let bodyContent;

        if(url){
            bodyContent = `<audio controls>
            <source src="./assets/WhatsApp Ptt 2022-05-24 at 9.19.05 AM.ogg" type="audio/ogg">
          Your browser does not support the audio element.
          </audio>`
        }
        else if(image){
            bodyContent =  `<iframe src="https://giphy.com/embed/IzjhI7ggjDlEnMxZMu" width="480" height="372" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cbc-retro-throwback-old-school-IzjhI7ggjDlEnMxZMu">via GIPHY</a></p> `
        }
        else if(video){
            bodyContent =`<iframe width="560" height="315" src="https://www.youtube.com/embed/s8H0Sx7jy7c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        }
        else if(docs){
            bodyContent = `<embed src="./assets/Big_data.pdf">`
        }
        else{
            bodyContent = `${desc}`
        }
        grid.innerHTML+=`<div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body edittable">  
              ${bodyContent}
            </div>
          </div>
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              ${title}
            </button>
          </h2>
        </div>
      </div>`
    })  
}

window.addEventListener('load',populateGrid)


// 

const toggle = document.querySelector('.toggle')
const taskNavigate = document.querySelector('.task-navigate')
const clicked = document.querySelector('.clicked')

clicked.addEventListener('click' , ()=>{

    taskNavigate.classList.toggle('toggle')
})
