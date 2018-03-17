function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
    // return document.querySelector('div div div div div')
    return document.querySelector('#nested .target')
 }


function deepestChild(){
  let nodes = document.getElementById('grand-node')

  while (nodes.children[0]){
    nodes = nodes.children[0]
  }
  return nodes
}

document.querySelectorAll("ul.ranked-list")[0].querySelectorAll('li')[0].innerText

function increaseRankBy(n){
  let things = document.querySelectorAll("ul.ranked-list")

  for (let i = 0; i < things.length; i++){
    let moarThings = things[i].children

    for (let i = 0; i < moarThings.length; i++){
      moarThings[i].innerHTML = parseInt(moarThings[i].innerHTML)+ n
    }
  }
}

  // document.querySelectorAll('.ranked-lists li')
  // document.getElementsByClassName('ranked-lists')

    // return document//
    // that increases the ranks in all of the .ranked-lists by n.
    // (You might need to make use of parseInt()
