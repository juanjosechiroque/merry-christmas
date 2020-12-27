function christmasTree(n) {
  
  let bottom = n - 1;  
  
  for(var i = 1; i <= n; i++) {
    
    let str = "";
    
    for(var j = 0; j < n-i; j++) {
      str += " ";
    }    
    for(var k = 0; k < 2*i - 1; k++) {
      str += "*";
    }
    
    console.log(str);
    
    if(i == n) {
      
      let str = "";    
      
      for(var l = 1; l <= bottom; l++) {
        str += " ";
      }      
      
      str += "|";      
      
      console.log(str);
    }
    
  }
  
  console.log("");
  
}

function christmasGreating() {  
  christmasTree(7);
  console.log("Merry Christmas!");  
}

module.exports = function () {
  
  christmasGreating();
  
}


