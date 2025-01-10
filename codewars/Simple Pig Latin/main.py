def pig_it(text):
    text_list = text.split()
    ans = ''
    for word in text_list:
        if len(word)>1:
            word = word[1:]+word[0]+'ay '
            ans += word
        elif word in "oO":
            word = word+"ay "
            ans += word
        else:
            word = word + ' '
            ans+=word
    ans = ans[:-1]
    return ans