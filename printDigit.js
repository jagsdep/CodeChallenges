
 let lastDigit;
 let reverse = 0; // store the reverse value

function printDigits(num){
   
    while(num != 0){
        lastDigit = num % 10; 
        reverse = reverse * 10 + lastDigit;
      num = Math.floor(num/10);
     
    }
    return reverse

}

console.log(printDigits(1234))
