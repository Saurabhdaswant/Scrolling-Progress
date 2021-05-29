const scrollingLine = document.querySelector(".scrollingLine");

function scroller() {
  const innerHeight = window.innerHeight;
  const fullHeight = document.body.clientHeight;
  const scroll = window.scrollY;
  const final = (scroll / (fullHeight - innerHeight)) * 100;
  scrollingLine.style.width = `${final}%`;
}

window.addEventListener("scroll", scroller);
