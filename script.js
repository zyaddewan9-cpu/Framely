const CONFIG={
  startDate:"2025-07-17T00:00:00",
  spotify:"https://open.spotify.com/track/4QBwDlKMFZUF0zwqskc4Bd?si=LObJ6nVzTOaHaLDPJ_h5qg&utm_source=copy-link"
};

const opening=document.getElementById("opening");
const app=document.getElementById("app");
document.getElementById("openStory").addEventListener("click",()=>{
  opening.classList.add("closed");
  app.classList.remove("hidden");
  setTimeout(()=>document.getElementById("home").scrollIntoView({behavior:"smooth"}),500);
});

function counter(){
  let d=Math.max(0,new Date()-new Date(CONFIG.startDate));
  const days=Math.floor(d/86400000);d%=86400000;
  const hours=Math.floor(d/3600000);d%=3600000;
  const minutes=Math.floor(d/60000);d%=60000;
  const seconds=Math.floor(d/1000);
  document.getElementById("days").textContent=String(days).padStart(3,"0");
  document.getElementById("hours").textContent=String(hours).padStart(2,"0");
  document.getElementById("minutes").textContent=String(minutes).padStart(2,"0");
  document.getElementById("seconds").textContent=String(seconds).padStart(2,"0");
}
counter();setInterval(counter,1000);

function openSong(){window.open(CONFIG.spotify,"_blank","noopener,noreferrer")}
["musicTop","musicHero","songButton"].forEach(id=>document.getElementById(id).addEventListener("click",openSong));
