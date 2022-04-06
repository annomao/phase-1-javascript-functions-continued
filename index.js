// code your solution here
function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(toDo = "go to the office"){
  return `This Monday, I will ${toDo}.`;
}

function wrapAdjective(visualFlair = "*"){
  return function (text = "special"){
    return `You are ${visualFlair}${text}${visualFlair}!`;
  }
}