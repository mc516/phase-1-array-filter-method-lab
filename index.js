// Code your solution here
function findMatching (array, name){
    let match = array.filter((key) => key.toUpperCase() === name.toUpperCase());
    return match;
}

function fuzzyMatch (array, name) {
    let newArray = [];
    array.filter((key) => {
      if (key.startsWith(name)){
        newArray.push(key)
      }
    })
    return newArray
  }
  
function matchName (array, string) {
    let match = [];
      array.filter(element => {
          if (element.name === string){
              match.push(element)
          }
      })
    return match;
  }