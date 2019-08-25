var katzDeliLine = [];

var takeANumber = (arr,name) =>{
  let pos = arr.length+1
  arr.push(name)
  return `Welcome, ${name}. You are number ${pos} in line.`
}

var nowServing = katzDeliLine =>{
  if(katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }else{
    return katzDeliLine.unshift()
  }
  
}

var currentLine = arr =>{
  let j;
  let myString = "The line is currently: ";
  for(let i =0; i<arr.length;i++){
    j = i+1
    myString+= `${j}. ${arr[i]}`
  }
  return myString;
}



