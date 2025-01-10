function pigIt(str){
    text = str.split(' ');
    
    for (var i = 0; i < text.length; i++) {
        if (/[a-zA-Z]/.test(text[i])){
            text[i] = text[i].slice(1) + text[i][0] + 'ay';

        }
    }
    return text.join(' ')
}
