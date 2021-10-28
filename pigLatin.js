
//calrifications
// given a string  full of words sepaprated by spaces
//ex: "a sentence with words in it"
//if word starts with consonant bcdfghjklmnqrstvwxyz, then removefirst letter
//from front, then add that letter to the end, then add 'ay'
//do that with every word
//if word starts with aeiou just add 'yay' to the end of the word
 
//psuedocode
//write a function which takes in a string
//break the string into an array/list, removing the spaces
//loop through the list/array
    //if it starts with a consonant
        //do one thing: take the first letter off
        //add the first letter to the end
        //add 'ay' to the end
    //otherwise
        //add "yay" to the end
    //turn the list backinto a string, adding back in the spaces i removed
    //return the string

    function pigLatin(string){
        let consonants = 'bcdfghjklmnqprstvwxyz'
       let stringIntoList = string.split(" ")
       //console.log(stringIntoList)
       for (let i = 0; i < stringIntoList.length; i++){
           //console.log(stringIntoList[i][0])
           if(consonants.includes(stringIntoList[i][0])){
               stringIntoList[i]= stringIntoList[i].slice(1) + stringIntoList[i][0] +'ay'

               //console.log(fixedWord)

           }
           else{
            stringIntoList[i] = stringIntoList[i] + 'yay'
               //console.log(fixedVowelWord)
           }
          
    }
    let result = stringIntoList.join(' ')

    return result
    //console.log(stringIntoList)
}

    console.log(pigLatin("break this string into pieces"))