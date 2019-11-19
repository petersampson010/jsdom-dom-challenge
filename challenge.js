const counter = document.getElementById("counter")
const minusButton = document.querySelector('#minus')
const plusButton = document.querySelector('#plus') 
const loveButton = document.querySelector('#heart')
const likes = document.querySelector('.likes')
const submitButton = document.querySelector('#submit')
const commentSection = document.querySelector('.comments')
const form = document.querySelector('#comment-form')
const pauseButton = document.querySelector('#pause')
let interval = setInterval('playPaused()', 1000);
let isPaused = false
let playPause = document.querySelector('#pause')


function playPaused() {
    if (isPaused == false) {
        incrementCounter()
        playPause.innerText = "pause"
    } else {
        playPause.innerText = "resume"
    }
}

function incrementCounter() {
    counter.innerText++;
}

minusButton.addEventListener("click", function() {
    counter.innerText --
})

plusButton.addEventListener("click", function() {
    counter.innerText ++
})

loveButton.addEventListener("click", function() {
    let like = document.createElement('li')
    likes.appendChild(like)
    like.innerText = `${counter.innerText} has been liked 1 time`
})

submitButton.addEventListener("click", function(event) {
    event.preventDefault()
    let comment = document.querySelector('#comment-input').value
    let commentPara = document.createElement('p')
    commentSection.appendChild(commentPara)
    commentPara.innerText = `${comment}`
    form.reset()
})

pauseButton.addEventListener("click", function() {
    isPaused = !isPaused
})
