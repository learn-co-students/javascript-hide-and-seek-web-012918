function getFirstSelector(s){
  return document.querySelector(s)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = list.length; i < l; i++) {
    let children = list[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}

function deepestChild(){
  let node1 = document.getElementById('grand-node')
  let node2 = node1.children[0]

  while (node2){
    node1 = node2
    node2 = node1.children[0]
  }
  return node1
}
