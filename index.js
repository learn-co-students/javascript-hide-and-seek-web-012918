function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy(n) {
  let ranked = document.querySelectorAll('ul.ranked-list li')
  for(let num of ranked){
    num.innerHTML = parseInt(num.innerHTML) + parseInt(n)
  }
}
