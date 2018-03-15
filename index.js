
function getFirstSelector(selector) {
  const first = document.getElementById('app').querySelector(selector)
  return first
}


function nestedTarget() {
  const target = document.getElementById('nested').querySelector('div.target')
  return target
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')
  for(let i = 0; i <lis.length; i++) {
      lis[i].innerHTML = (parseInt(lis[i].innerHTML) + n).toString()
  }
}

function deepestChild() {
  const grandNodeDivs = document.getElementById('grand-node').querySelectorAll('div')
  for(let i = 0; i < grandNodeDivs.length; i++) {
    if (grandNodeDivs[i].innerText === "boo!"){
      debugger
       return grandNodeDivs[i]
    }
  }
}
