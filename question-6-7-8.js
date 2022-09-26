//❓❓ LAB QUESTION 6 & 7:
let dictionary = [
                "aardvark", "abattoir", "baby", "batman",
                "cat", "cooper", "dog", "ghost", "lion",
                "water", "window", "xylophone", "yawl",
                "yello", "zebra"
            ];
console.log(dictionary.length)

//❓❓ LAB QUESTION 8:
//Search the array of words in the haystack parameter for the
//word given in the needle parameter (get it? Searching for a needle in
//a haystack?).
//Return true when you find it, and false if you do not.
function linearSearch(needle, haystack){
let i = 0
while (i<= haystack.length){
    if(needle == haystack[i]){
        return true;
    }
    else if( i == haystack.length){
        return false
    }
    else {i++}
}
}

console.log("Does it contain cat? ", linearSearch("cat", dictionary));
console.log("Does it contain dog? ", linearSearch("dog", dictionary));
console.log("Does it contain syzygy? ", linearSearch("syzygy", dictionary));