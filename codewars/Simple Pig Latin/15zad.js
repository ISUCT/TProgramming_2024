function SPlatin(str){
    let end_symbol = "";
    let global_arr = [];
    let list = str.split(' ');
    let specialCharsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
        for (let i = 0; i < list.length; i++){
            if(specialCharsRegex.test(list[i])){
                end_symbol = list[i];
            }
            else{
                    let word_i = list[i];
                    let temp_arr = word_i.split('');
                    temp_arr.push(temp_arr.shift());
                    temp_arr.push("ay");
                    let new_string = temp_arr.join('');
                    global_arr.push(new_string);
            }
        }
        if (end_symbol) {
            global_arr.push(end_symbol);
        }
    
        global_arr = global_arr.join(' ');
        return global_arr.trim();
    }
    
    let str = SPlatin("Pig latin is cool !");
    console.log(str);