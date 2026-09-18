const data = [
  ["Silver Wave", "aesthetic", "IMG_1120.PNG"],
  ["Lunar Glow", "aesthetic", "IMG_1124 3.jpg"]
];

let filter = "all";

const grid = document.querySelector("#grid");
const search = document.querySelector("#search");
const toast = document.querySelector("#toast");

function render() {
  const q = search.value.toLowerCase();

  grid.innerHTML = "";

  data
    .filter(x =>
      (filter === "all" || x[1] === filter) &&
      x[0].toLowerCase().includes(q)
    )
    .forEach(x => {
      const c = document.createElement("article");
      c.className = "card";

      c.innerHTML = `
        <img class="wall" src="images/${x[2]}" alt="${x[0]}">
        <div class="wall-info">
          <b>${x[0]}</b>
          <small>${x[1]}</small>
        </div>
        <a class="dl" href="images/${x[2]}" download="${x[0]}.jpg">
          Download
        </a>
      `;

      grid.appendChild(c);
    });
}

document.querySelectorAll(".cat").forEach(b => {
  b.onclick = () => {
    document.querySelectorAll(".cat").forEach(x =>
      x.classList.remove("active")
    );

    b.classList.add("active");
    filter = b.dataset.filter;
    render();
  };
});

search.oninput = render;

render();
