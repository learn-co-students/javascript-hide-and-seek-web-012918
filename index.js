function getFirstSelector(selection){
  return document.querySelector(selection)
}

function nestedTarget(){
  return document.getElementById('app').querySelector('div div.target')
}

function increaseRankBy(n){
  let sel = document.getElementsByClassName('ranked-list')
  for (let item of sel){
    item.innerHTML = (parseInt(item.innerHTML) + n).toString()
  }
}

function deepestChild(){
  let sel =  document.getElementById('grand-node').querySelector('div div div div div')
  return sel
}
