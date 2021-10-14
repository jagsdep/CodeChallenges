//Worked with Tamara Chance 

let num = [1, 4, 11, 2, 37, -4];
let largestNum = num[0];
let smallestNum = num[0];
 
for(i = 0; i<num.length; i++){

  if(num[i]>largestNum){
largestNum = num[i]
  }
  if(num[i]<smallestNum){
    smallestNum = num[i]
  }
}
console.log(largestNum);
console.log(smallestNum);
