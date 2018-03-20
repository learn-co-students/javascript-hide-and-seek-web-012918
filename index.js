function getFirstSelector (selector) {
  return document.querySelector(selector)
}

function nestedTarget (target) {
  return document.getElementById('nested', target)
}

function deepestChild () {
  return document.querySelector('#grand-node div div div div')
}

function increaseRankBy (n) {
  const ranked = document.querySelectorAll('ul.ranked-list li')
  for (let rank of ranked) {
    rank.innerHTML = parseInt(rank.innerHTML) + parseInt(n)
  }
}
