var mergeAlternately = function(word1, word2) {
    let m = word1.length;
    let n = word2.length;
    let result = "";
    
    for(let i = 0; i < m || i < n; i++){
        if(i < m){
            result += word1[i];
        }
        if(i < n){
            result += word2[i];
        }
    }
    return result;
};

console.log(mergeAlternately("abc", "pqr"));