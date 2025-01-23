function CS(str){
    let result = "";
        for (i = 0; i < str.length; i++) {
            if (str[i] == "-" || str[i] == "_") {
                i++;
                result += str[i].toUpperCase();
            }
            else{
                result += str[i];
            }
        }
        return(result);
    }
    
    let guess_word = CS("the-stealth_warrior");
    console.log(guess_word);