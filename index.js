function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('div.target')
}

function increaseRankBy(n){
  let list = document.querySelectorAll('ul.ranked-list')
  for (let i = 0; i < list.length; i++){
    let newInner = parseInt(list[i].innerHTML) + n
    list[i].innerHTML = newInner
  }
}

function deepestChild(){
  let node = document.getElementById('grand-node')
  let subNode = node.children[0]
  while (subNode) {
    node = subNode
    subNode = node.children[0]
  }
  return node
}
