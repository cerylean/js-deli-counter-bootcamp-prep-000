var katzDeli = []

function takeANumber(line,name) { var i = line.length + 1;
  line.push(name); return `Welcome, ${name}. You are number ${i} in line.`}
  
  function nowServing(line) { if(line.length===0) {return "There is nobody waiting to be served!"} else { return ("Currently serving "+line.shift()+".")}}
  
  function currentLine(line) {var newLine = []
 if(line.length===0) {return "The line is currently empty."} else {for (let i = 0; i < line.length; i++) {newLine.push(` ${[i+1]}. ${line[i]}`)
      }
  } return "The line is currently:"+ newLine }
  
  