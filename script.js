const data=[
["Silver Wave","aesthetic","a1"],["Monochrome","aesthetic","a2"],["Lunar Glow","aesthetic","a3"],
["Midnight","dark","d1"],["Shadow Core","dark","d2"],["Black Motion","dark","d3"],
["Neon Arena","gaming","g1"],["Dark Gamer","gaming","g2"],["Pixel Night","gaming","g3"],
["Mountain Mist","nature","n1"],["Moon Valley","nature","n2"],["Silent Forest","nature","n3"]
];
let filter="all"; const grid=document.querySelector("#grid"), search=document.querySelector("#search"), toast=document.querySelector("#toast");
function render(){const q=search.value.toLowerCase();grid.innerHTML="";data.filter(x=>(filter==="all"||x[1]===filter)&&x[0].toLowerCase().includes(q)).forEach(x=>{let c=document.createElement("article");c.className="card";c.innerHTML=`<div class="wall ${x[2]}"><div class="wall-info"><b>${x[0]}</b><small>${x[1]}</small></div></div><a class="dl" href="#" data-name="${x[0]}">Download</a>`;grid.appendChild(c)});document.querySelectorAll(".dl").forEach(a=>a.onclick=e=>{e.preventDefault();toast.textContent=`${a.dataset.name}: add your JPG/PNG file to enable download.`;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),2500)})}
document.querySelectorAll(".cat").forEach(b=>b.onclick=()=>{document.querySelectorAll(".cat").forEach(x=>x.classList.remove("active"));b.classList.add("active");filter=b.dataset.filter;render()});search.oninput=render;render();