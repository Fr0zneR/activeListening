console.log("Welcome to Spotify");

// Initialize the variables
let songIndex=0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let songs = [
    {songName: "Salem-e-ishq", filepath:"song/1.mp3", coverpath:"cover/1.jpg"},
    {songName: "Salem-e-ishq", filepath:"song/1.mp3", coverpath:"cover/1.jpg"},
    {songName: "Salem-e-ishq", filepath:"song/1.mp3", coverpath:"cover/1.jpg"},
    {songName: "Salem-e-ishq", filepath:"song/1.mp3", coverpath:"cover/1.jpg"},
    {songName: "Salem-e-ishq", filepath:"song/1.mp3", coverpath:"cover/1.jpg"},
    {songName: "Salem-e-ishq", filepath:"song/1.mp3", coverpath:"cover/1.jpg"},
]

let audi

 oElement = new Audio('1.mp3');
// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0){
       audioElement.play();
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
    }
    else{ 
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
// Listen to events
document.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    // Update seekbar
});