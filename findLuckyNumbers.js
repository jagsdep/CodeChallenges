function findLuckyNumbers(n){
    var array = [1,2,3,4,5,6,7,8,9,10]
    
    var arr = []
    
    for (i = 0; i<n; i++){
     let x = Math.floor(Math.random() * array.length)
     arr.push(array[x])
     array.splice(x,1) 
    }
    return arr
    }
    console.log(findLuckyNumbers(5))
    