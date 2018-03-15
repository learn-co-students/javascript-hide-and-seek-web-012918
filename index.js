function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('div.target');
}

function increaseRankBy(n) {
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li');
    for (let i = 0; i < list.length; i++) {
      let int = parseInt(list[i].innerHTML);
      list[i].innerHTML = (int + n).toString();
    }
}

function deepestChild() {
  const elements = document.querySelector('div#grand-node').firstElementChild.firstElementChild.firstElementChild.firstElementChild;
  return elements;
}
