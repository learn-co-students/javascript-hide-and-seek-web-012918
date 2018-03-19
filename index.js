function getFirstSelector(selector){
  return document.querySelectorAll(selector)[0]
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const list = document.querySelectorAll('.ranked-list')
  for (let i=0; i<list.length; i++){
    let listElement = list[i].children
    for (let j=0; j<listElement.length; j++){
      listElement[j].innerHTML = parseInt(listElement[j].innerHTML)+n
    }
  }
}

function deepestChild(){
  let node = document.getElementById('grand-node')
  let child = node.children[0]
  while(child){
    node = child
    child = node.children[0]
  }
  return node
}
