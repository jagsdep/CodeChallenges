

function hasMoreVowels(word) {
    const vowels = ["a", "e", "i", "o", "u", "y"];
   
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            return true;
        
        }else{
            return false;
        
    }
   
    }

}
console.log(hasMoreVowels('mooese'))

