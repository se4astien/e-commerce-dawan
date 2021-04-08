document
  .querySelector('.menu-btn')
  .addEventListener('click', () =>
    document.querySelector('.main-menu').classList.toggle('show')
  );

/* Rating stars */
const allstars = document.querySelectorAll('.fa-star');

init();

function init() {
  allstars.forEach((star) => {
    star.addEventListener('click', getRating);
    star.addEventListener('mouseover', addCss);
    star.addEventListener('mouseleave', removeCss);
  });
}

//Récuperation valeur data-star
function getRating(e) {
  console.log(e.target.dataset, e.target.nodeName, e.target.nodeType);
}

function addCss(e, css = 'checked') {
  const overedStar = e.target;
  e.target.classList.add(css);
  const previousSiblings = getPreviousSiblings(overedStar);
  console.log('previousSiblings', previousSiblings);
  previousSiblings.forEach((elem) => elem.classList.add(css)); //On ajoute le css au previous siblings
}
function removeCss(e, css = 'checked') {
  const overedStar = e.target;
  e.target.classList.remove(css);
  const previousSibling = getPreviousSiblings(overedStar);
  previousSibling.forEach((elem) => elem.classList.remove(css)); ////On supprime le css au previous siblings
}

function getPreviousSiblings(elem) {
  console.log('elem.previousSibling', elem.previousSibling);
  let siblings = [];
  const spanNodeType = 1; //nodeType pour les span == 1
  while ((elem = elem.previousSibling)) {
    if (elem.nodeType === spanNodeType) {
      siblings = [elem, ...siblings];
    }
  }
  return siblings;
}
