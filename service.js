
const expand = document.getElementById("expand");
const rl = document.getElementById("rl");
let hidden = true;

const expandClickHandler = () => {
  rl.style.display = hidden ? "flex" : "none";
  hidden = !hidden;
};

const documentClickHandler = (event) => {
  if (!expand.contains(event.target) && !rl.contains(event.target)) {
    rl.style.display = "none";
    hidden = true;
  }
};

expand.addEventListener("click", expandClickHandler);
document.addEventListener("click", documentClickHandler);