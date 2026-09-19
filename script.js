// VISUAL EDITZ — customize these two values
const WHATSAPP_NUMBER = "919834276690"; // Replace with your country code + WhatsApp number
const INSTAGRAM_URL = "https://instagram.com/visual_editz";

document.getElementById("year").textContent = new Date().getFullYear();

const menu = document.querySelector(".menu"), nav = document.querySelector("nav");
menu.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const cursor=document.querySelector(".cursor"), dot=document.querySelector(".cursor-dot");
window.addEventListener("mousemove",e=>{cursor.style.left=e.clientX+"px";cursor.style.top=e.clientY+"px";dot.style.left=e.clientX+"px";dot.style.top=e.clientY+"px"});
document.querySelectorAll("a,button").forEach(el=>{el.addEventListener("mouseenter",()=>{cursor.style.width="52px";cursor.style.height="52px"});el.addEventListener("mouseleave",()=>{cursor.style.width="34px";cursor.style.height="34px"})});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll(".video-card").forEach(card=>{
  card.addEventListener("click",e=>{
    if(card.getAttribute("href")==="#"){e.preventDefault(); alert(card.dataset.project+" — Add your real video/Instagram/YouTube link in index.html.");}
  });
});

function whatsappMessage(){
  const name=document.getElementById("name").value.trim();
  const service=document.getElementById("service").value.trim();
  const budget=document.getElementById("budget").value.trim() || "Not specified";
  const message=document.getElementById("message").value.trim();
  const text=`Hi VISUAL EDITZ!%0A%0AName: ${encodeURIComponent(name)}%0AService: ${encodeURIComponent(service)}%0ABudget: ${encodeURIComponent(budget)}%0AProject: ${encodeURIComponent(message)}%0A%0AI'd like to discuss my project.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,"_blank");
}
document.getElementById("waForm").addEventListener("submit",e=>{e.preventDefault();whatsappMessage()});
document.querySelector(".wa-float").href=`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20VISUAL%20EDITZ!%20I%20want%20to%20discuss%20a%20video%20editing%20project.`;
