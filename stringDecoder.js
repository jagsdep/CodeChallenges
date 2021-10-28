//write afunction decoder
//code is passed as an argument in a parameter
//string will start with number and end with letter
//skip the indexes as many number in the string
//


function decoder (code){

    var letter =" "
 
     for (let i = 0;i< code.length;i++){
         if(code[i] === 0){
         letter.push(code[i+1])
    
     
 
     
         }else if(code[i]>0){
             return code[i+1]
 
         }
         return letter
       
        
 
 
 }
 }
 console.log(decoder('1d3keo34'))